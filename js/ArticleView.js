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
		//var testJsBinUrl = 'http://jsbin.com/iwovaj/74/embed?js&height=450px';
		var testJsBinUrl = 'http://jsbin.com/heqova/embed?js&height=450px';
		//data.jindoCodeUrl = null;
		var $article = $('article');
		
		var templateData = {
			methodName: data.title/*data.className+"."+data.name/*+"()"*/,
			description: data.description,
			jindoJsbin: data.jindoCodeUrl ? "./embed.php?bin="+data.jindoCodeUrl +'&height=450px' : testJsBinUrl,
			jqueryJsbin: data.jqueryCodeUrl ? "./embed.php?bin="+data.jqueryCodeUrl +'&height=450px' : testJsBinUrl
		}

		$article.addClass('api');
		$article.html('');
		
		var articleHtml = '';
	    var articleTpl = _.template($("#article-template").text()),
		articleHtml = articleTpl(templateData);
		var $article = $(articleHtml);
			
		window.jsbinified = undefined;
		$('article').html($article);
		
		// jsbin Embedder 에 iframe이 로딩 완료될때 마다 샐행할 핸들러를 전달
		JsbinEmbedder(function(evt){
			new JsbinUpdater({
				iframe: evt.currentTarget
			});
			var url = evt.currentTarget.contentDocument.location;
			var $panelBtns = $(evt.currentTarget.contentDocument).contents().find("#panels a.active");
			var $htmlBtn = $panelBtns[0];
			var $outputBtn = $panelBtns[2];
			
			$htmlBtn.click();
			$outputBtn.click();
			
			evt.currentTarget.style.visibility = 'visible';
		});
	}

	function _updateGuide(data) {
		var tplText = $("#guide-template").text();
		var guideTpl = _.template(tplText);
		var guideHtml = guideTpl({title : data.title, description : 'test', guideUrl : data.url });
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

function JsbinUpdater(htOption){
	this.elIframe = htOption.iframe;
	this.elSaveBtn = htOption.elSaveBtn;
	
	this.javascript;
	this.html;
	this.css;
	this.bin;

	this.getContents();
}

JsbinUpdater.prototype.getContents = function() {
	var $panelBtns = $(this.elIframe.contentDocument).contents().find(".editbox");
	console.log("HTML", $($panelBtns[0]).text());
	this.html = $($panelBtns[0]).text();
	console.log("CSS", $($panelBtns[1]).text());
	this.css = $($panelBtns[0]).text();
	console.log("JAVASCRIPT", $($panelBtns[2]).text());
	this.javascript = $($panelBtns[0]).text();
	console.log("BIN", this.elIframe.src.split("bin=")[1]);
	this.bin = this.elIframe.src.split("bin=")[1];
	
};