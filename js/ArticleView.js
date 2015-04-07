var ArticleView = (function() {
	function updateArticle(articleInfo) {
		console.log(articleInfo);
		if ( articleInfo.type== 'api' ) {
			_updateAPI( articleInfo.data );
		} else if ( articleInfo.type === 'guide' ) {
			_updateGuide( articleInfo.data);
		}
	}

	function _updateAPI(data) {
		var testJsBinUrl = 'http://jsbin.com/heqova/embed?js&height=450px';
		var $article = $('article');

		var templateData = {
			methodName: data.title,
			description: data.description,
			jindoJsbin: data.jindoCodeUrl ? "http://jsbin.com/"+data.jindoCodeUrl +'/embed?js&height=450px' : testJsBinUrl,
			jindoApiUrl: _getJindoApiUrl(data),
			jqueryApiUrl: _getJqueryApiUrl(data),
			jqueryJsbin: data.jqueryCodeUrl ?  "http://jsbin.com/"+data.jqueryCodeUrl +'/embed?js&height=450px' : testJsBinUrl
		}

		$article.addClass('api');
		$article.html('');
		
		var articleHtml = '';
	    var articleTpl = _.template($("#article-template").text()),
		articleHtml = articleTpl(templateData);
		var $article = $(articleHtml);
			
		window.jsbinified = undefined;
		$('article').html($article);
	}
	
	function _getJindoApiUrl(data){
		var className = "."+data.className;
		if(data.className === 'jindo') {
			className = '';
		}
		var category = (data.name.indexOf('()') === -1) ? 'method' : 'property'; 		
		return "http://jindo.dev.naver.com/docs/jindo/2.12.1/desktop/ko/classes/jindo"+className+".html#"+category+"_"+data.name.replace("()", '');
	}

	function _getJqueryApiUrl(data){
		return "http://api.jquery.com/";
	}

	function _updateGuide(data) {
		var tplText = $("#guide-template").text();
		var guideTpl = _.template(tplText);
		var guideHtml = guideTpl({title : data.title, description : data.description || '', guideUrl : data.url });
		var $article = $('article');

		$article.addClass('readme');
		//$('article').html(guideHtml);
		var $guideContent = $(guideHtml);

		$guideContent.filter('.content').load(data.url);
		$article.html($guideContent);
	}

	return {
		updateArticle : updateArticle
	};
})();