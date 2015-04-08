(function() {
	function changeUrl(htArticleData) {
		var param = null;

		if (htArticleData.type === 'guide') {
			param = htArticleData.data;
		} else if (htArticleData.type === 'api') {
			var prop = htArticleData.data;
			param = prop.className + '_' + prop.name;
		} else {
			return;
		}

		location.href = 'index.html?type=' + htArticleData.type + '&param=' + param;
	}

	function getPropInfo(isMethod, sClassName, sPropName) {
		for (var i = 0, len = JINDO_APIS.length; i < len; i++) {
			if (JINDO_APIS[i].className.indexOf(sClassName) != -1) {
				var prop = JINDO_APIS[i].property;
				if (isMethod) {
					prop = JINDO_APIS[i].methods;
				}

				for (var j = 0, l = prop.length; j < l; j++) {
					if (prop[j].name.indexOf(sPropName) != -1) {
						var ret = prop[j];
						ret.className = sClassName;
						ret.title = (sClassName === 'jindo' ? '' : sClassName + '.') + sPropName;

						return ret;
					}
				}
				return null;
			}
		}

		return null;
	}

	/**
	 * 선택된 메뉴를 타이틀로 사용
	 */
	function getDefaultTitle() {
		var $selected = $('.selected');
		//var len = $selected.length;

		var title = $selected.last().text().trim();
		// $selected.each(function(i) {
		// 	if (i != 0) {
		// 		title += $(this).text().trim();

		// 		if (i != len - 1) {
		// 			title += ' - '
		// 		}
		// 	}
		// });

		return title;
	}

	function urlToArticleInfo(sUrl) {
		var htRetParam = {};
		var sType = "guide";//기본값
		var sParam = "html/guide.usage.html";//기본값
		
		//파라미터 파싱
		var aMatched = sUrl.match(/type=([^&#]*)&?/);
		if (aMatched) {
			sType = aMatched[1];
		}
		aMatched = sUrl.match(/param=([^&#]*)&?/);
		if (aMatched) {
			sParam = aMatched[1];
		}		
		
		//반환 값 설정
		htRetParam.type = sType;
		if (sType === 'api') {
			var aApi = sParam.split('_');
			var isMethod = false;
			if (aApi[1].search(/\(\s*\)/) != -1) {
				isMethod = true;	
			}
			htRetParam.data = getPropInfo(isMethod, aApi[0], aApi[1]);
		} else if (sType === 'guide') {
			htRetParam.data = { url : sParam };
		} else {
			return null;
		}

		return htRetParam;
	}

	$( window ).load(function() {
		var info = urlToArticleInfo(location.href);
		if (!info) {
			return;
		}

		/**
		 * 메뉴 초기화
		 */
		$(".accordian").accordian({
			apiData: JINDO_APIS,
			guideData : GUIDES,
			selected : info
		}).on('showArticle', function(e, data) {
			//URL 변경
			changeUrl(data);
		});;
		
		/**
		 * 문서 갱신 - 현재 url 을 파싱하여 그에 맞는 문서를 노출한다.
		 */
		//타이틀이 지정되지 않은 경우, 선택된 메뉴를 기준으로 타이틀을 정한다.
		if (!info.data.title) {
			info.data.title = getDefaultTitle();
		}

		//타이틀 변경 (for disquss)
		$("title").text(info.data.title);

		//아티클 업데이트
		ArticleView.updateArticle(info);

		//comments
		Comments.show($('article'));
	});

})();