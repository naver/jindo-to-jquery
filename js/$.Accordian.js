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

    Accordian = (function() {

        var instanceUid = 0;

        function Accordian(element, settings) {
            var _ = this;
			
            _.initials = {
	            $accordian: $(element),
                animating: false,
                classTemplate: underscore.template($("#class-template").text()),
                methodTemplate: underscore.template($("#method-template").text()),
                verticalScrolling: false
            };

            $.extend(_, _.initials);
			_.data = settings.data; // Wrapper Class 의 정보를 담은 객체
 			_.$classesContainer = $(".classes-container", _.$accordian);

            _.buildOut();

			_.$accordianHeaders = $(".accordian-header", _.$accordian);
			
			_.$menuItems = $(".accordian-content > .menu-item", _.$accordian);
			
			
            _.clickHandler = $.proxy(_.clickHandler, _);

            _.instanceUid = instanceUid++;

            _.init();

        }

        return Accordian;

    }());

    Accordian.prototype.buildOut = function() {
		//_.data 를 이용해서 wrapper class 영역의 html 을 채워준다.
		var _ = this;
		//console.log(_.data);
		var classesHtml = $.map( _.data, function( classObj, classIndex ) {
			var methodsHtml = $.map( classObj.methods, function( method, methodIndex) {
				var methodHtml = _.methodTemplate({
					methodName: method.name,
					classIndex: classIndex,
					methodIndex: methodIndex,
				});
				return methodHtml;
			}).join('');
			var classHtml = _.classTemplate({
				className: classObj.className,
				methods: methodsHtml
			});
			return classHtml;
		}).join('');
		_.$classesContainer.html(classesHtml);
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
				
				var classIndex = data.classIndex;
				var methodIndex = data.methodIndex;
				var classObj = this.data[data.classIndex];
				var contentData = classObj.methods[methodIndex];
				contentData.className = classObj.className;
				//$(this.$accordian).trigger("showArticle", [contentData]);
				
				articleData = {
					type : 'api',
					data : contentData
				}
			} else if (data.guideUrl) {
				articleData = {
					type : 'guide',
					data : data.guideUrl
				}
			}

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