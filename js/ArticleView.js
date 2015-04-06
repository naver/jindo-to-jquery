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
			jindoJsbin: data.jindoCodeUrl ? "./embed.php?bin="+data.jindoCodeUrl +'&height=450px' : testJsBinUrl,
			jqueryJsbin: data.jqueryCodeUrl ? "./embed.php?bin="+data.jqueryCodeUrl +'&height=450px' : testJsBinUrl
		}

		$('article').html('');
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

			var $outLink = $($(evt.currentTarget.contentDocument).contents().find(".menu a.brand.button.group")[0]);
			$outLink.attr("href", "http://jindo.nhncorp.com:3000" + $outLink.attr("href"));
			$($(evt.currentTarget.contentDocument).contents().find(".menu a.button")[1]).remove()
		});
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

function JsbinUpdater(htOption){
	this.elIframe = htOption.iframe;
	this.$elSaveBtn = null;

	this.bin = this.elIframe.src.split("bin=")[1];
	
	this.jsbinData = this.getContents();
	
	$(this.elIframe.contentWindow.document).keydown(function(evt) {
		this.jsbinData = this.getContents();
		// Activate Save Button
		if(this.$elSaveBtn === null) {
			this.$elSaveBtn = $("<a>업데이트</a>");
			console.log($(".menu", $(this.elIframe.contentWindow.document))[0]);
			$($(".menu", $(this.elIframe.contentWindow.document))[0]).append(this.$elSaveBtn);
			this.$elSaveBtn.on("click", function(){
				// JSBIN API를 통해 POST 요청을 보내고 (이 또한 별도 마련된 프록시를 거침)
				// 성공 응답이 오면 스스로를 제거한다.
				this.$elSaveBtn.remove();
				this.$elSaveBtn = null;	
				alert("!");
			}.bind(this));
		}
	}.bind(this));
}

JsbinUpdater.prototype.getContents = function() {
	var binData = {};
	var $editPanels = $(this.elIframe.contentDocument).contents().find(".editbox");
	binData.html = $($editPanels[0]).text();
	binData.css = $($editPanels[0]).text();
	binData.javascript = $($editPanels[0]).text();
	
	return binData;
};

