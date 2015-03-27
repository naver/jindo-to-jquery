var Comments = (function() {
	return {
		show : function() {
			$('#code_comments').html('<img src="./img/comments.png">');
		},
		hide : function() {
			$('#code_comments').html('');
		}
	}
})();