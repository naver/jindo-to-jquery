var ArticleView = (function() {
	function updateArticle(articleInfo) {
		if ( articleInfo.type== 'api' ) {
			_updateAPI( articleInfo.data );
		} else if ( articleInfo.type === 'guide' ) {
			_updateGuide( articleInfo.data);
		}
	}

	function _updateAPI(data) {
		var testJsBinUrl = 'http://jsbin.com/heqova/embed?js';
		var $article = $('article');
		
		var templateData = {
			methodName: data.title,
			description: data.description,
			jindoJsbin: data.jindoCodeUrl ? "http://jsbin.com/"+data.jindoCodeUrl +'/embed?html,js,console' : testJsBinUrl,
			jindoApiUrl: _getJindoApiUrl(data),
			jqueryApiUrl: _getJqueryApiUrl(data),
			jqueryJsbin: data.jqueryCodeUrl ?  "http://jsbin.com/"+data.jqueryCodeUrl +'/embed?html,js,console' : testJsBinUrl
		}

		$article.addClass('api');
		$article.html('');
		
		var articleHtml = '';
	    var articleTpl = _.template($("#article-template").text()),
		articleHtml = articleTpl(templateData);
		var $article = $(articleHtml);
			
		window.jsbinified = undefined;
		$('article').html($article);


		$.ajax("http://output.jsbin.com/"+data.jindoCodeUrl+".js", {
			method: 'get',
			complete: function (jqXHR, textStatus) {
				var data = jqXHR.responseText;
				if (data.length > 0) {
					$("#jindoCode").text(data);
				} else {
					$("#jindoCode").text("// TODO");
				}
				hljs.highlightBlock($("#jindoCode")[0])
			}
		});

		$.ajax("http://output.jsbin.com/"+data.jqueryCodeUrl+".js", {
			method: 'get',
			complete: function (jqXHR, textStatus) {
				var data = jqXHR.responseText;
				if (data.length > 0) {
					$("#jqueryCode").text(data);
				} else {
					$("#jqueryCode").text("// TODO");
				}
				hljs.highlightBlock($("#jqueryCode")[0])
			}
		});
	}
	
	function _getJindoApiUrl(data){
		var className = "."+data.className;
		if(data.className === 'jindo') {
			className = '';
		}
		var category = (data.name.indexOf('()') === -1) ? 'property' : 'method'; 		
		return "http://jindo.dev.naver.com/docs/jindo/2.12.1/desktop/ko/classes/jindo"+className+".html#"+category+"_"+data.name.replace("()", '');
	}

	function _getJqueryApiUrl(data){
		return "http://api.jquery.com/";
	}

	function _getGuideExtension(sPath) {
		return sPath.match(/.*\.(\w*)/)[1];
	}

	function _updateGuide(data) {
		var tplText = $("#guide-template").text();
		var guideTpl = _.template(tplText);
		var guideHtml = guideTpl({title : data.title, description : data.description || '', guideUrl : data.url });
		var $article = $('article');
		var $guideContent = $(guideHtml);

		var type = _getGuideExtension(data.url) || "";
		$article.addClass('readme');

		if ( type === "html" ) {
			$guideContent.filter('.content').load(data.url, function() {
				$('pre code').each(function(i, block) {
    				hljs.highlightBlock(block);
  				});
			});
		} else if ( type === "md" ) {
			//TODO: 함수로 빼자
			var mdOption = {
				'highlight' : function( code, lang ) {
					if(lang) {
						return hljs.highlight(lang.toLowerCase(), code).value;
					}
					return;
				}
			}

			$.get( data.url, function( markdown ) {
				$guideContent.filter( '.content' ).html( marked( markdown, mdOption ) );
			});
		}
		$article.html($guideContent);
	}

	return {
		updateArticle : updateArticle
	};
})();