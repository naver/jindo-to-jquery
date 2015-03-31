var Comments = (function() {
	return {
		show : function() {
			//disquss 불필요한 데이터가 쌓이는 것을 방지하기 위해 임시로 DISABLE 시켜놓음 2015.03.31
			//var disqusTpl = _.template($("#disqus-template").text());
			//var disqusHtml = disqusTpl();
			//$('#code_comments').html(disqusHtml);
		},
		hide : function() {
			//$('#code_comments').html('');
		}
	}
})();