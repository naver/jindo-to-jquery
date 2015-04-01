var Comments = (function() {
	return {
		show : function($parent) {
			//disquss 불필요한 데이터가 쌓이는 것을 방지하기 위해 임시로 DISABLE 시켜놓음 2015.03.31
			//var disqusTpl = _.template($("#disqus-template").text());
			//var disqusHtml = disqusTpl();
			//$('#code_comments').html(disqusHtml);

			if ($('#code_comments').length == 0) {
				$parent.append('<div class="comments" id="code_comments">/');
			}

			$('#code_comments').html('<img src="./img/comments.png">');

		},
		hide : function() {
			$('#code_comments').html('');
		}
	}
})();