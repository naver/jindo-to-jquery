(function() {
	function changeUrl(htArticleData) {
		var param = null;

		if (htArticleData.type === 'guide') {
			param = htArticleData.data;
		} else if (htArticleData.type === 'api') {
			var methodInfo = htArticleData.data;
			param = methodInfo.className + '_' + methodInfo.name
		} else {
			return;
		}

		location.href = 'index.html?type=' + htArticleData.type + '&param=' + param;
	}

	function getMethodInfo(sClassName, sMethodName) {
		for (var i = 0, len = JINDO_APIS.length; i < len; i++) {
			if (JINDO_APIS[i].className.indexOf(sClassName) != -1) {
				for (var j = 0, l = JINDO_APIS[i].methods.length; j < l; j++) {
					console.log(sMethodName + " == " + JINDO_APIS[i].methods[j].name);
					if (JINDO_APIS[i].methods[j].name.indexOf(sMethodName) != -1) {
						var ret = JINDO_APIS[i].methods[j];
						ret.className = sClassName;

						return ret;
					}
				}
				return null;
			}
		}

		return null;
	}

	/**
	 * TODO: 가이드도 해시테이블로 관리하자.
	 */
	function getGuideTitle(sGuideUrl) {
		var htGuideTitle = {
			'html/guide.usage.html' : '라이브러리 사용법',
			'html/guide.10min.html' : '10분 요리'
		};

		return htGuideTitle[sGuideUrl];
	}

	function urlToArticleParam(sUrl) {
		var htRetParam = {};
		var sType = sUrl.match(/type=([^&]*)&?/)[1];
		var sParam = sUrl.match(/param=([^&]*)&?/)[1];
		
		if (!sType || !sParam) {
			return null;
		}

		htRetParam.type = sType;

		if (sType === 'api') {
			var aApi = sParam.split('_');
			htRetParam.data = getMethodInfo(aApi[0], aApi[1]);
			htRetParam.title = aApi[0] + ' - ' + aApi[1];
		} else if (sType === 'guide') {
			htRetParam.data = sParam;
			htRetParam.title = getGuideTitle(sParam);
		} else {
			return null;
		}

		return htRetParam;
	}

	$( window ).load(function() {
		$(".accordian").accordian({
			data: JINDO_APIS
		}).on('showArticle', function(e, data) {
			//URL 변경
			changeUrl(data);
		});;
		
		//문서 갱신 - 현재 url 을 파싱하여 그에 맞는 문서를 노출한다.
		var htParam = urlToArticleParam(location.href);
		if (htParam) {
			//타이틀 변경 (for disquss)
			$("title").text(htParam.title);

			//아티클 업데이트
			ArticleView.updateArticle(htParam);
		}
	});

})();