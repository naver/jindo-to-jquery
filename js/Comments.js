var Comments = (function() {
	return {
		show : function() {
			var disqusTpl = _.template($("#disqus-template").text());
			var disqusHtml = disqusTpl();
			$('#code_comments').html(disqusHtml);
		},
		hide : function() {
			$('#code_comments').html('');
		}
	}
})();