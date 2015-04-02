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
		var testJsBinUrl = 'http://jsbin.com/iwovaj/74/embed?js&height=450px';
		
		var templateData = {
			methodName: data.title/*data.className+"."+data.name/*+"()"*/,
			description: data.description,
			jindoJsbin: data.jindoCodeUrl ? "http://jindo.nhncorp.com:3000/"+data.jindoCodeUrl +'/embed?js&height=450px' : testJsBinUrl,
			jqueryJsbin: data.jqueryCodeUrl ? "http://jindo.nhncorp.com:3000/"+data.jqueryCodeUrl +'/embed?js&height=450px' : testJsBinUrl
		}

		$('article').html('');
		var articleHtml = '';
	    var articleTpl = _.template($("#article-template").text()),
		articleHtml = articleTpl(templateData);
		var $article = $(articleHtml);
			
		window.jsbinified = undefined;
		$('article').html($article);
	}

	function _updateGuide(data) {
		var tplText = $("#guide-template").text();
		var guideTpl = _.template(tplText);
		var guideHtml = guideTpl({title : data.title, description : 'test', guideUrl : data.url });

		//$('article').html(guideHtml);
		var $guideContent = $(guideHtml);

		$guideContent.filter('.content').load(data.url);
		$('article').html($guideContent);
	}

	return {
		updateArticle : updateArticle
	};
})();