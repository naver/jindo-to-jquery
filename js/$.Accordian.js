/*
	Menu Accordion
	Version: 1.0.0
	Author: KIM HEE JAE
*/
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery, _);
    }

}(function($, underscore) {
    'use strict';
    var Accordian = window.Accordian || {};
    var LOCALSTRG_MENU_SCROLL_TOP = 'menuScrollTop';
    var EXPAND_BUTTON_HTML = '\
    						<div class="icon">\
								<svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></g></svg>\
							</div>';

    Accordian = (function() {

        var instanceUid = 0;

        function Accordian(element, settings) {
            var _ = this;
			
            _.initials = {
	            $accordian: $(element),
                animating: false,
                classTemplate: underscore.template($("#class-template").text()),
                methodTemplate: underscore.template($("#method-template").text()),
                propertyTemplate: underscore.template($("#property-template").text()),
                verticalScrolling: false
            };

            $.extend(_, _.initials);
            _.settings = settings;
			_.apiData = settings.apiData; // Wrapper Class 의 정보를 담은 객체
			_.guideData = settings.guideData;

			_.$sideMenu = $('#side_menu');
 			_.$classesContainer = $(".classes-container", _.$accordian);

 			//Build HTML
            _.buildOut();

            //menu 스크롤
            var nMenuScrollTop = localStorage.getItem(LOCALSTRG_MENU_SCROLL_TOP);
            if (!nMenuScrollTop) {
            	nMenuScrollTop = 0;
            }
            _.$sideMenu.scrollTop(nMenuScrollTop);

            //Element
			_.$accordianHeaders = $(".accordian-header", _.$accordian);
			
			_.$menuItems = $(".accordian-content > .menu-item", _.$accordian);
			
			
            _.clickHandler = $.proxy(_.clickHandler, _);

            _.instanceUid = instanceUid++;

            _.init();

        }

        return Accordian;

    }());
	
	Accordian.prototype.buildContent = function(aMenuItems) {
		var contentHtml = '';
		for (var i = 0, l = aMenuItems.length; i < l; i++) {
			if (aMenuItems[i].content) {
				contentHtml += 
					'<div class="accordian-item">\
						<div class="menu-item accordian-header">\
							<div class="icon info"></div>\
							' + aMenuItems[i].title + '\
							' + EXPAND_BUTTON_HTML + '\
						</div>\
						<div class="accordian-content">\
							' + this.buildContent(aMenuItems[i].content) + '\
						</div>\
					</div>';
			} else {
				var selected = ("guide" === this.settings.selected.type && aMenuItems[i].url === this.settings.selected.data.url) ? 'selected' : '';
				contentHtml += 
					'<div class="menu-item ' + selected + '" data-guide-url="' + aMenuItems[i].url + '">\
						' + aMenuItems[i].title + '\
					</div>';
			}
		}

		return contentHtml;
	}

	function _toPropertyHtml(classObj, classIndex, property, propertyIndex) {
		var _ = this;
		//선택 상태를 표시
		var selected = 
			(_.settings.selected
			&& "api" === _.settings.selected.type 
			&& property.name === _.settings.selected.data.name
			&& classObj.className === _.settings.selected.data.className ) ? 'selected' : '';

		var html = _.propertyTemplate({
			classIndex: classIndex,
			propertyName: property.name,
			propertyIndex: propertyIndex,
			selected : selected
		});
		return html;
	}

	function _toMethodHtml(classObj, classIndex, method, methodIndex) {
		var _ = this;
		//선택 상태를 표시
		var selected = 
			(_.settings.selected
			&& "api" === _.settings.selected.type 
			&& method.name === _.settings.selected.data.name
			&& classObj.className === _.settings.selected.data.className ) ? 'selected' : '';

		var methodHtml = _.methodTemplate({
			methodName: method.name,
			classIndex: classIndex,
			methodIndex: methodIndex,
			selected : selected
		});
		return methodHtml;
	}

    Accordian.prototype.buildOut = function() {
		//_.apiData 를 이용해서 wrapper class 영역의 html 을 채워준다.
		var _ = this;
		//console.log(_.apiData);

		//가이드 영역 메뉴 갱신
		if (_.guideData) {
			var sideMenuHtml = this.buildContent(_.guideData);
			_.$sideMenu.prepend(sideMenuHtml);
		};

		//API 메뉴 영역 갱신
		if (_.apiData) {
			var classesHtml = $.map( _.apiData, function( classObj, classIndex ) {
				//프로퍼티, 메소드 HTML
				var propertyHtml = $.map( classObj.property, $.proxy(_toPropertyHtml, _, classObj, classIndex)).join('');
				var methodsHtml = $.map( classObj.methods, $.proxy(_toMethodHtml, _, classObj, classIndex)).join('');

				var classHtml = _.classTemplate({
					className: classObj.className,
					properties : propertyHtml,
					methods: methodsHtml,
				});
				return classHtml;
			}).join('');
			_.$classesContainer.html(classesHtml);
		}

		//선택된 메뉴의 상위 아이템에 대해 선택된 상태로 변경
		var $el = $('.selected')
		$el.parents('.accordian-content').show();
		$el.parents('.accordian-item').children('.menu-item').addClass('selected');
    };

    Accordian.prototype.init = function() {
        var _ = this;

        if (!$(_.$accordian).hasClass('accordian-initialized')) {
            $(_.$accordian).addClass('accordian-initialized');
            _.initializeEvents();
        }

        _.$accordian.trigger('init', [_]);
        
    };
    
    Accordian.prototype.clickHandler = function(e) {
	    var _ = this;
	    var $accordianHeader = $(e.target);
	    var $accordianContent = $accordianHeader.next();

		var isPrimary = $accordianHeader.parent().parent()[0] === _.$accordian[0];

		// 최상위 헤더일 때의 로직		
		if(isPrimary) {
			if($accordianHeader.hasClass('selected')) {
				$accordianHeader.removeClass('selected')
				$accordianContent.slideUp({});
			} else {
				_.$accordianHeaders.filter(".selected").removeClass('selected').next().slideUp({});
				$accordianHeader.addClass('selected')
				$accordianContent.slideDown({});			
			}
		} else {
			if($accordianHeader.hasClass('selected')) {
				$accordianHeader.removeClass('selected')
				$accordianContent.slideUp({});										
			} else {
				$(".accordian-header", $accordianHeader.parent().parent()).filter(".selected").removeClass('selected').next().slideUp({});
				$accordianHeader.addClass('selected')
				$accordianContent.slideDown({});							
			}			
		}

		//TODO: 로컬 스토리지 지원 범위에 따른 지원
		var nMenuScrollTop = _.$sideMenu.scrollTop();
		localStorage.setItem(LOCALSTRG_MENU_SCROLL_TOP, nMenuScrollTop);
	};
	
    Accordian.prototype.initializeEvents = function() {
        var _ = this;
		_.$accordianHeaders.on('click.accordian', _.clickHandler);
		_.$menuItems.on('click.accordian', function(e){
			$('.accordian-content > .menu-item').removeClass("selected");

			var data = $(e.target).data();
			var articleData = null;

			if(data.classIndex !== undefined) {
				$(e.target).addClass("selected");
				var classObj = this.apiData[data.classIndex];
				var classIndex = data.classIndex;
				var contentData = null;

				if (data.methodIndex !== undefined) {
					contentData = classObj.methods[data.methodIndex];
				} else if (data.propertyIndex !== undefined) {
					contentData = classObj.property[data.propertyIndex];
				} else {
					//ERROR
					return;
				}

				contentData.className = classObj.className;
				
				articleData = {
					type : 'api',
					data : contentData,
					title : contentData.className + ' - ' + contentData.name
				}
			} else if (data.guideUrl) {
				articleData = {
					type : 'guide',
					data : data.guideUrl,
					title : $(e.target).text()
				}
			}

			//TODO: 로컬 스토리지 지원 범위에 따른 지원
			var nMenuScrollTop = _.$sideMenu.scrollTop();
			localStorage.setItem(LOCALSTRG_MENU_SCROLL_TOP, nMenuScrollTop);

			//If the selected items has a valid data, then request to update an article.
			if (articleData) {
				$(this.$accordian).trigger("showArticle", articleData);
			}
		}.bind(this));
    };

    $.fn.accordian = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i = 0,
            ret;
        for (i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].accordian = new Accordian(_[i], opt);
            else
                ret = _[i].accordian[opt].apply(_[i].accordian, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));