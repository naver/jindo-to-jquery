var JINDO_APIS = [{
	"className": "jindo",
	"property": [{
		"name": "$$.version",
		"description": " cssquery의 버전 정보를 담고 있는 문자열이다.",
		"jqueryCodeUrl": "fifisi",
		"jindoCodeUrl": "milano"
	}],
	"methods": [{
		"name": "$()",
		"description": "$()",
		"jqueryCodeUrl": "galolo",
		"jindoCodeUrl": "qivoy"
	}, {
		"name": "$$()",
		"description": "$$() ",
		"jqueryCodeUrl": "pojebe",
		"jindoCodeUrl": "tuned"
	}, {
		"name": "$$.clearCache()",
		"description": "$$() 함수(cssquery)에서 캐시를 사용할 때 캐시를 비울 때 사용한다. DOM 구조가 동적으로 바껴 기존의 캐시 데이터가 신뢰성이 없을 때 사용한다.",
		"jqueryCodeUrl": "gulowo",
		"jindoCodeUrl": "gubule"
	}, {
		"name": "$$.getSingle()",
		"description": "CSS 선택자를 사용에서 조건을 만족하는 첫 번째 요소를 가져온다. ",
		"jindoCodeUrl": "gateji",
		"jqueryCodeUrl": "qipuku"
	}, {
		"name": "$$.safeHTML()",
		"description": "인터넷 익스플로러에서 innerHTML 속성을 사용할 때 _cssquery_UID 값이 나오지 않게 하는 함수이다.",
		"jindoCodeUrl": "vutexa",
		"jqueryCodeUrl": "zubogu"
	}, {
		"name": "$$.test()",
		"description": "특정 요소가 해당 CSS 선택자(CSS Selector)에 부합하는 요소인지 판단하여 Boolean 형태로 반환한다. ",
		"jindoCodeUrl": "coxofo",
		"jqueryCodeUrl": "mumoni"
	}, {
		"name": "$$.useCache()",
		"description": "$$() 함수(cssquery)를 사용할 때 캐시를 사용할 것인지 설정한다.",
		"jindoCodeUrl": "loyeja",
		"jqueryCodeUrl": "taravu"
	}]
}, {
	"className": "$A",
	"property": [],
	"methods": [{
		"name": "Break()",
		"description": "Break() 메서드는 forEach(), filter(), map() 메서드의 루프를 중단한다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.",
	 	"jindoCodeUrl": "nozuhi",
		"jqueryCodeUrl": "higepi"
	}, {
		"name": "Continue()",
		"description": "Continue() 메서드는 forEach(), filter(), map() 메서드의 루프에서 나머지 명령을 실행하지 않고 다음 루프로 건너뛴다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.",
		"jindoCodeUrl": "fusupa",
		"jqueryCodeUrl": "befuvo"
	}, {
		"name": "concat()",
		"description": "배열을 결합해 새로운 배열을 반환한다.",
		"jindoCodeUrl": "gawuzu",
		"jqueryCodeUrl": "wepoda"
	}, {
		"name": "empty()",
		"description": "배열의 모든 원소를 제거하고, 빈 배열로 만든다.",
		"jindoCodeUrl": "zezage",
		"jqueryCodeUrl": "zovomi"
	}, {
		"name": "every()",
		"description": "배열을 순회하면서 배열의 모든 원소가 콜백 함수에 설정한 조건을 만족하는지 검사한다.",
		"jindoCodeUrl": "voropa",
		"jqueryCodeUrl": "fepito"
	}, {
		"name": "filter()",
		"description": "배열의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수가 true 값을 반환하는 원소만 모아 새로운 $A() 객체를 반환한다.",
		"jqueryCodeUrl": "bihatu",
		"jindoCodeUrl": "jiyuca"
	}, {
		"name": "forEach()",
		"description": "내부 배열의 모든 원소를 순회하면서 콜백 함수를 실행한다.",
		"jindoCodeUrl": "qaloxa",
		"jqueryCodeUrl": "buwige"
	}, {
		"name": "get()",
		"description": "파라미터로 지정한 인덱스로 내부 배열의 원소 값을 조회한다.",
		"jindoCodeUrl": "gariho",
		"jqueryCodeUrl": "cilebi"
	}, {
		"name": "has()",
		"description": "내부 배열에서 특정 값을 갖는 원소의 유무를 Boolean 형태로 반환한다.",
		"jqueryCodeUrl": "wakepi",
		"jindoCodeUrl": "tawujo"
	}, {
		"name": "indexOf()",
		"description": "내부 배열에서 특정 값을 갖는 원소를 검색하고 검색된 원소의 인덱스를 반환한다.",
		"jindoCodeUrl": "nuweca",
		"jqueryCodeUrl": "nurika"
	}, {
		"name": "length()",
		"description": "내부 배열 크기를 지정한다.",
		"jqueryCodeUrl": "kecibu",
		"jindoCodeUrl": "civoto"
	}, {
		"name": "map()",
		"description": "배열의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수의 실행 결과를 배열의 원소에 설정한다.",
		"jindoCodeUrl": "dopesa",
		"jqueryCodeUrl": "jaxudu"
	}, {
		"name": "pop()",
		"description": "내부 배열의 마지막 원소를 삭제한다.",
		"jindoCodeUrl": "faqewe",
		"jqueryCodeUrl": "jukove"
	}, {
		"name": "push()",
		"description": "내부 배열에 하나 이상의 원소를 추가하고 배열의 크기를 반환한다.",
		"jindoCodeUrl": "jopife",
		"jqueryCodeUrl": "koxujo"
	}, {
		"name": "refuse()",
		"description": "배열에서 입력한 파라미터와 같은 값을 제외하여 새로운 $A() 객체를 생성한다. ",
		"jindoCodeUrl": "tasime",
		"jqueryCodeUrl": "jayene"
	}, {
		"name": "reverse()",
		"description": "배열 원소의 순서를 거꾸로 뒤집는다.",
		"jindoCodeUrl": "vifaka",
		"jqueryCodeUrl": "zopaci"
	}, {
		"name": "set()",
		"description": "인덱스와 값을 지정하여 값을 셋팅한다.",
		"jindoCodeUrl": "bahaju",
		"jqueryCodeUrl": "celope"
	}, {
		"name": "shift()",
		"description": "내부 배열의 모든 원소를 앞으로 한 칸씩 이동시킨다. 내부 배열의 첫 번째 원소는 삭제된다.",
		"jindoCodeUrl": "bufaro",
		"jqueryCodeUrl": "doboha"
	}, {
		"name": "shuffle()",
		"description": "배열 원소의 순서를 무작위로 섞는다.",
		"jindoCodeUrl": "baviju",
		"jqueryCodeUrl": "hovequ"
	}, {
		"name": "slice()",
		"description": "내부 배열의 일부분을 추출한다.",
		"jindoCodeUrl": "fevepu",
		"jqueryCodeUrl": "fumuti"
	}, {
		"name": "some()",
		"description": "배열을 순회하면서 콜백 함수에 설정한 조건을 만족하는 원소가 있는지 검사한다.",
		"jindoCodeUrl": "luvuna",
		"jqueryCodeUrl": "jegamu"
	}, {
		"name": "splice()",
		"description": "내부 배열의 일부분을 삭제한다.",
		"jindoCodeUrl": "nofije",
		"jqueryCodeUrl": "cesala"
	}, {
		"name": "toString()",
		"description": "내부 배열을 문자열로 변환한다. ",
		"jqueryCodeUrl": "gilojo",
		"jindoCodeUrl": "ducawap"
	}, {
		"name": "unique()",
		"description": "배열에서 중복되는 원소를 삭제한다.",
		"jqueryCodeUrl": "zovozi",
		"jindoCodeUrl": "pabemi"
	}, {
		"name": "unshift()",
		"description": "내부 배열의 맨 앞에 하나 이상의 원소를 삽입한다.",
		"jqueryCodeUrl": "tigase",
		"jindoCodeUrl": "jegobe"
	}]
}, {
	"className": "$Agent",
	"property": [],
	"methods": [{
		"name": "flash()",
		"description": "사용자의 Flash Player 정보를 담고 있는 객체를 반환한다.",
		"jindoCodeUrl": "yataru",
		"jqueryCodeUrl": "buhokis"
	}, {
		"name": "navigator()",
		"description": "사용자 브라우저 정보를 담고 있는 객체를 반환한다.",
		"jindoCodeUrl": "vekili",
		"jqueryCodeUrl": "hedufe"
	}, {
		"name": "os()",
		"description": "사용자 운영체제 정보를 담고 있는 객체를 반환한다.",
		"jqueryCodeUrl": "fogohe",
		"jindoCodeUrl": "nanela"
	}, {
		"name": "silverlight()",
		"description": "사용자의 실버라이트(Silverlight) 정보를 담고 있는 객체를 반환한다.",
		"jindoCodeUrl": "socama",
		"jqueryCodeUrl": "fogeden"
	}]
}, {
	"className": "$Ajax",
	"property": [],
	"methods": [{
		"name": "isIdle()",
		"description": "$Ajax() 객체가 현재 요청 대기 상태인지 확인한다.",
		"jqueryCodeUrl": "qojus",
		"jindoCodeUrl": "nacici"
	}, {
		"name": "option()",
		"description": "$Ajax() 객체의 옵션 객체(oOption) 속성에 정의된 Ajax 요청 옵션에 대한 정보를 가져오거나 혹은 설정한다.",
		"jqueryCodeUrl": "fugote",
		"jindoCodeUrl": "cuciga"
	}, {
		"name": "request()",
		"description": "Ajax 요청을 서버에 전송한다.",
		"jindoCodeUrl": "xefoca",
		"jqueryCodeUrl": "mesucu"
	}, {
		"name": "url()",
		"description": "url을 변경하거나 반환한다.",
		"jqueryCodeUrl": "riraki",
		"jindoCodeUrl": "tokozu"
	}]
}, {
	"className": "$Ajax.Queue",
	"property": [],
	"methods": [{
		"name": "add()",
		"description": "$Ajax.Queue에 Ajax 요청($Ajax() 객체)을 추가한다.",
		"jqueryCodeUrl": "nukeya",
		"jindoCodeUrl": "fokuge"
	}, {
		"name": "option()",
		"description": "$Ajax.Queue 객체에 설정한 옵션 값을 키와 값으로 설정한다.",
		"jindoCodeUrl": "woqadu",
		"jqueryCodeUrl": "xavure"
	}, {
		"name": "request()",
		"description": "$Ajax.Queue에 있는 Ajax 요청을 서버로 보낸다.",
		"jindoCodeUrl": "kozove",
		"jqueryCodeUrl": "tahuwa"
	}]
}, {
	"className": "$Ajax.Response",
	"property": [],
	"methods": [{
		"name": "json()",
		"description": "응답을 JSON 객체로 반환한다.",
		"jqueryCodeUrl": "qaxuni",
		"jindoCodeUrl": "kizeze"
	}, {
		"name": "readyState()",
		"description": "응답 상태(readyState)를 반환한다.",
		"jqueryCodeUrl": "pegupi",
		"jindoCodeUrl": "xukise"
	}, {
		"name": "status()",
		"description": " HTTP 응답 코드를 반환한다.",
		"jindoCodeUrl": "nibuye",
		"jqueryCodeUrl": "mukeka"
	}, {
		"name": "text()",
		"description": "응답을 문자열(String)로 반환한다.",
		"jqueryCodeUrl": "fijapu",
		"jindoCodeUrl": "vakego"
	}, {
		"name": "xml()",
		"description": "응답을 XML 객체로 반환한다.",
		"jindoCodeUrl": "joweqi",
		"jqueryCodeUrl": "roninu"
	}]
}, {
	"className": "$Class",
	"property": [{
		"name": "$super",
		"description": "부모 클래스의 메서드에 접근할 때 사용한다",
		"jqueryCodeUrl": "bukoma",
		"jindoCodeUrl": "purifi"
	}],
	"methods": [{
		"name": "extend()",
		"description": "특정 클래스를 상속한다.",
		"jindoCodeUrl": "dokeve",
		"jqueryCodeUrl": "suwoha"
	}, {
		"name": "kindOf()",
		"description": "자신이 어떤 클래스의 종류인지 확인하는 메서드.",
		"jqueryCodeUrl": "kenufo",
		"jindoCodeUrl": "lujote"
	}]
}, {
	"className": "$Cookie",
	"property": [],
	"methods": [{
		"name": "get()",
		"description": "쿠키에서 key에 해당하는 값을 가져온다.",
		"jqueryCodeUrl": "buhexa",
		"jindoCodeUrl": "zexewi"
	}, {
		"name": "keys()",
		"description": "쿠키 key를 원소로 가지는 배열을 리턴한다.",
		"jindoCodeUrl": "pocimi",
		"jqueryCodeUrl": "lixowo"
	}, {
		"name": "remove()",
		"description": "쿠키에 설정된 쿠키 값을 제거한다.",
		"jindoCodeUrl": "lolila",
		"jqueryCodeUrl": "dazuko"
	}, {
		"name": "set()",
		"description": "쿠키 값을 설정한다. ",
		"jqueryCodeUrl": "hezige",
		"jindoCodeUrl": "jixite"
	}]
}, {
	"className": "$Date",
	"property": [{
		"name": "names",
		"description": "names",
		"jqueryCodeUrl": "nacusu",
		"jindoCodeUrl": "kamomu"
	}, {
		"name": "utc",
		"description": "",
		"jqueryCodeUrl": "muqozo",
		"jindoCodeUrl": "yubiti"
	}],
	"methods": [{
		"name": "compare()",
		"description": "인자로 받은 날짜와 차이를 숫자로 반환하는 함수이다.",
		"jindoCodeUrl": "fatawe",
		"jqueryCodeUrl": "desigu"
	}, {
		"name": "date()",
		"description": " $Date() 객체가 저장하고 있는 시각의 날짜(day of the month)를 가져오거나 지정한 값으로 설정한다.",
		"jindoCodeUrl": "pipuqi",
		"jqueryCodeUrl": "puwuqi"
	}, {
		"name": "day()",
		"description": "$Date() 객체가 지정하고 있는 시각의 요일(day of the week)를 가져온다. ",
		"jindoCodeUrl": "ralofu",
		"jqueryCodeUrl": "suqoro"
	}, {
		"name": "format()",
		"description": "$Date() 객체가 저장하고 있는 시간을 파라미터로 지정한 형식 문자열에 맞추어 변환한다. ",
		"jindoCodeUrl": "daxuxo",
		"jqueryCodeUrl": "betifi"
	}, {
		"name": "hours()",
		"description": "$Date() 객체가 저장하고 있는 시각의 시간을 가져오거나 지정한 값으로 설정한다.",
		"jindoCodeUrl": "larodi",
		"jqueryCodeUrl": "puyexe"
	}, {
		"name": "isLeapYear()",
		"description": "$Date() 객체가 저장하고 있는 시각의 연도가 윤년인지 검사한다.",
		"jindoCodeUrl": "vuloje",
		"jqueryCodeUrl": "vehiye"
	}, {
		"name": "minutes()",
		"description": " $Date() 객체가 저장하고 있는 시각의 분(minute)을 가져오거나 지정한 값으로 설정한다.",
		"jindoCodeUrl": "saxoqi",
		"jqueryCodeUrl": "pidabo"
	}, {
		"name": "month()",
		"description": "$Date() 객체가 저장하고 있는 시각의 달(month)을 가져오거나 지정한 값으로 설정한다",
		"jindoCodeUrl": "bosuqa",
		"jqueryCodeUrl": "lehuse"
	}, {
		"name": "now()",
		"description": "현재 시간을 밀리 초(millisecond) 단위의 정수로 리턴한다.",
		"jqueryCodeUrl": "liheco",
		"jindoCodeUrl": "kaduju"
	}, {
		"name": "seconds()",
		"description": "$Date() 객체가 저장하고 있는 시각의 초(second)를 가져오거나 지정한 값으로 설정한다.",
		"jindoCodeUrl": "larere",
		"jqueryCodeUrl": "tegaha"
	}, {
		"name": "time()",
		"description": "GMT를 기준으로 경과한 시간을 $Date() 객체에 설정하거나 $Date() 객체가 가지고 있는 값을 가져온다. ",
		"jindoCodeUrl": "cufexi",
		"jqueryCodeUrl": "zuxade"
	}, {
		"name": "year()",
		"description": "$Date() 객체가 저장하고 있는 시각의 연도(year)를 가져오거나 지정한 값으로 설정한다. ",
		"jindoCodeUrl": "quseqa",
		"jqueryCodeUrl": "niruku"
	}]
}, {
	"className": "$Document",
	"property": [],
	"methods": [{
		"name": "clientSize()",
		"description": "문서에서 스크롤바가 생겨 보이지 않는 부분을 제외한 영역(화면에 보이는 부분)의 가로 크기와 세로 크기 정보를 담은 객체를 반환한다.",
		"jqueryCodeUrl": "xudubi",
		"jindoCodeUrl": "tijaze"
	}, {
		"name": "renderingMode()",
		"description": "문서가 렌더링된 방식을 검사하여 반환한다.",
		"jindoCodeUrl": "hibanu",
		"jqueryCodeUrl": "copiga"
	}, {
		"name": "scrollPosition()",
		"description": "현재 문서에서 스크롤바의 위치를 구한다.",
		"jindoCodeUrl": "xurole",
		"jqueryCodeUrl": "wesufi"
	}, {
		"name": "scrollSize()",
		"description": "문서의 가로 크기와 세로 크기 정보를 담은 객체를 반환한다.",
		"jqueryCodeUrl": "ruqupo",
		"jindoCodeUrl": "doguta"
	}]
}, {
	"className": "$Element",
	"property": [],
	"methods": [{
		"name": "addClass()",
		"description": "HTML 요소에 클래스를 추가한다.",
		"jindoCodeUrl": "nicole",
		"jqueryCodeUrl": "gulaxon"
	}, {
		"name": "after()",
		"description": "$Element() 객체에 있는 요소의 다음 형제 노드(nextSibling)로 파라미터로 지정한 요소를 배정한다.",
		"jindoCodeUrl": "yudowi",
		"jqueryCodeUrl": "kebade"
	}, {
		"name": "afterHTML()",
		"description": "HTML 코드(outerHTML)의 뒤에 파라미터로 지정한 HTML 코드를 삽입한다.",
		"jindoCodeUrl": "lakeha",
		"jqueryCodeUrl": "xuvaye"
	}, {
		"name": "appear()",
		"description": "HTML 요소를 서서히 나타나게 한다(Fade-in 효과).",
		"jqueryCodeUrl": "yisuqa",
		"jindoCodeUrl": "rufimo"
	}, {
		"name": "append()",
		"description": "$Element() 객체에 있는 요소의 마지막 자식 노드로 파라미터로 지정한 HTML 요소를 배정한다.",
		"jindoCodeUrl": "miloco",
		"jqueryCodeUrl": "lokoju"
	}, {
		"name": "appendHTML()",
		"description": "내부 HTML 코드(innerHTML)의 뒤에 파라미터로 지정한 HTML 코드를 덧붙인다.",
		"jindoCodeUrl": "lizeba",
		"jqueryCodeUrl": "gabofa"
	}, {
		"name": "appendTo()",
		"description": "$Element() 객체에 있는 요소를 파라미터로 지정한 요소의 마지막 자식 요소로 배정한다.",
		"jindoCodeUrl": "tufoxe",
		"jqueryCodeUrl": "cocobu"
	}, {
		"name": "attach()",
		"description": "요소에 이벤트를 등록한다.",
		"jindoCodeUrl": "cotiwu",
		"jqueryCodeUrl": "latidi"
	}, {
		"name": "attr()",
		"description": "HTML 요소의 속성을 가져오거나 설정한다.",
		"jindoCodeUrl": "yirora",
		"jqueryCodeUrl": "ximasa"
	}, {
		"name": "before()",
		"description": "$Element() 객체에 있는 요소의 이전 형제 노드(previousSibling)로 파라미터로 지정한 요소를 배정한다.",
		"jindoCodeUrl": "gajife",
		"jqueryCodeUrl": "xuyed"
	}, {
		"name": "beforeHTML()",
		"description": "HTML 코드(outerHTML)의 앞에 파라미터로 지정한 HTML 코드를 삽입한다.",
		"jqueryCodeUrl": "qiviji",
		"jindoCodeUrl": "golowo"
	}, {
		"name": "child()",
		"description": "HTML 요소의 하위 노드에 해당하는 요소를 검색한다.",
		"jindoCodeUrl": "zixuca",
		"jqueryCodeUrl": "tofaya"
	}, {
		"name": "className()",
		"description": "HTML 요소의 클래스 이름을 설정하거나 반환한다.",
		"jindoCodeUrl": "xalelo",
		"jqueryCodeUrl": "wehiso"
	}, {
		"name": "css()",
		"description": "HTML 요소의 CSS 속성 값을 가져오거나 설정한다.",
		"jindoCodeUrl": "gufeyo",
		"jqueryCodeUrl": "lumego"
	}, {
		"name": "data()",
		"description": "dataset의 속성을 가져오거나 설정한다.",
		"jqueryCodeUrl": "woboyu",
		"jindoCodeUrl": "moreco"
	}, {
		"name": "delegate()",
		"description": "이벤트 위임(Event Deligation) 방식으로 이벤트를 처리한다.",
		"jqueryCodeUrl": "leyoge",
		"jindoCodeUrl": "gujoji"
	}, {
		"name": "disappear()",
		"description": "HTML 요소를 서서히 사라지게 한다(Fade-out 효과).",
		"jindoCodeUrl": "mahodi",
		"jqueryCodeUrl": "vibiku"
	}, {
		"name": "ellipsis()",
		"description": "HTML 요소의 텍스트 노드가 브라우저에서 한 줄로 보이도록 길이를 조절한다.",
		"jindoCodeUrl": "cureno",
		"jqueryCodeUrl": "qekidi"
	}, {
		"name": "empty()",
		"description": "HTML 요소의 자식 노드를 모두 제거한다.",
		"jindoCodeUrl": "pusuzo",
		"jqueryCodeUrl": "zalotu"
	}, {
		"name": "first()",
		"description": "HTML 요소의 첫 번째 자식 노드에 해당하는 요소를 반환한다.",
		"jqueryCodeUrl": "puwoxu",
		"jindoCodeUrl": "giruqe"
	}, {
		"name": "hasEventListener()",
		"description": "엘리먼트에 해당 이벤트가 할당되어 있는지를 확인.",
		"jqueryCodeUrl": "fewide",
		"jindoCodeUrl": "qabaru"
	}, {
		"name": "height()",
		"description": "HTML 요소의 높이를 가져오거나 설정한다.",
		"jqueryCodeUrl": "dahebi",
		"jindoCodeUrl": "pukiso"
	}, {
		"name": "hide()",
		"description": "HTML 요소가 화면에 보이지 않도록 display 속성을 none으로 변경한다.",
		"jqueryCodeUrl": "cuyida",
		"jindoCodeUrl": "fesudi"
	}, {
		"name": "html()",
		"description": "HTML 요소의 내부 HTML 코드(innerHTML)를 가져오거나 설정한다.",
		"jqueryCodeUrl": "golidi",
		"jindoCodeUrl": "tulube"
	}, {
		"name": "indexOf()",
		"description": "HTML 요소에서 파라미터로 지정한 요소가 몇 번째 자식인지 확인하여 인덱스를 반환한다.",
		"jindoCodeUrl": "rebapa",
		"jqueryCodeUrl": "wezasu"
	}, {
		"name": "isChildOf()",
		"description": "파라미터로 지정한 요소가 HTML 요소의 부모 노드인지 검사한다.",
		"jindoCodeUrl": "mamuxi",
		"jqueryCodeUrl": "vuhaba"
	}, {
		"name": "isEqual()",
		"description": "파라미터로 지정한 요소가 HTML 요소와 같은 요소인지 검사한다.",
		"jindoCodeUrl": "vohaji",
		"jqueryCodeUrl": "nuvuse"
	}, {
		"name": "isParentOf()",
		"description": "파라미터로 지정한 요소가 HTML 요소의 자식 노드인지 검사한다.",
		"jindoCodeUrl": "xuluvu",
		"jqueryCodeUrl": "lazuquz"
	}, {
		"name": "last()",
		"description": "HTML 요소의 마지막 자식 노드에 해당하는 요소를 반환한다.",
		"jqueryCodeUrl": "sokiqu",
		"jindoCodeUrl": "jawoho"
	}, {
		"name": "leave()",
		"description": "HTML 요소를 자신의 부모 요소에서 제거한다.",
		"jindoCodeUrl": "honime",
		"jqueryCodeUrl": "zixofu"
	}, {
		"name": "offset()",
		"description": "HTML 요소의 위치를 가져오거나 설정한다.",
		"jqueryCodeUrl": "liliqo",
		"jindoCodeUrl": "nenipu"
	}, {
		"name": "opacity()",
		"description": "HTML 요소의 투명도(opacity 속성) 값을 가져오거나 설정한다.",
		"jqueryCodeUrl": "duyewo",
		"jindoCodeUrl": "casera"
	}, {
		"name": "outerHTML()",
		"description": "HTML 요소의 내부 코드(innerHTML)에 해당하는 부분과 자신의 태그를 포함한 HTML 코드를 반환한다.",
		"jqueryCodeUrl": "dejozi",
		"jindoCodeUrl": "qasami"
	}, {
		"name": "parent()",
		"description": "HTML 요소의 상위 노드에 해당하는 요소를 검색한다.",
		"jqueryCodeUrl": "luqeve",
		"jindoCodeUrl": "dujiji"
	}, {
		"name": "prepend()",
		"description": "$Element() 객체에 있는 요소의 첫 번째 자식 노드로 파라미터로 지정한 HTML 요소를 배정한다.",
		"jqueryCodeUrl": "bohez",
		"jindoCodeUrl": "moraxa"
	}, {
		"name": "prependHTML()",
		"description": "내부 HTML 코드(innerHTML)의 앞에 파라미터로 지정한 HTML 코드를 삽입한다.",
		"jindoCodeUrl": "wuwiyi",
		"jqueryCodeUrl": "waviru"
	}, {
		"name": "prependTo()",
		"description": "$Element() 객체에 있는 요소를 파라미터로 지정한 요소의 첫 번째 자식 노드로 배정한다.",
		"jindoCodeUrl": "rikago",
		"jqueryCodeUrl": "siyupo"
	}, {
		"name": "prev()",
		"description": "HTML 요소의 이전 형제 노드에 해당하는 요소를 검색한다.",
		"jindoCodeUrl": "dezaho",
		"jqueryCodeUrl": "yusarid"
	}, {
		"name": "preventTapHighlight()",
		"description": "모바일에서 이벤트 델리게이트를 사용했을때 부모 엘리먼트에 하이라이트가 되는 것을 막는다.",
		"jindoCodeUrl": "luxezi",
		"jqueryCodeUrl": "huyuwe"
	}, {
		"name": "query()",
		"description": "HTML 요소에서 특정 CSS 선택자(CSS Selector)를 만족하는 첫 번째 하위 요소를 반환한다.",
		"jindoCodeUrl": "wimire",
		"jqueryCodeUrl": "sokiwu"
	}, {
		"name": "queryAll()",
		"description": "HTML 요소에서 특정 CSS 선택자(CSS Selector)를 만족하는 하위 요소를 찾는다.",
		"jindoCodeUrl": "lixinu",
		"jqueryCodeUrl": "delito"
	}, {
		"name": "remove()",
		"description": "HTML 요소의 특정 자식 노드를 제거한다.",
		"jqueryCodeUrl": "kimese",
		"jindoCodeUrl": "soyija"
	}, {
		"name": "replace()",
		"description": "$Element() 객체 내부의 HTML 요소를 지정한 파라미터의 요소로 대체한다.",
		"jindoCodeUrl": "vaboyi",
		"jqueryCodeUrl": "guropu"
	}, {
		"name": "show()",
		"description": "HTML 요소가 화면에 보이도록 display 속성을 변경한다.",
		"jindoCodeUrl": "vitocu",
		"jqueryCodeUrl": "lexisi"
	}, {
		"name": "test()",
		"description": "HTML 요소에서 특정 CSS 선택자(CSS Selector)를 만족하는지 확인한다.",
		"jqueryCodeUrl": "nusete",
		"jindoCodeUrl": "tulaku"
	}, {
		"name": "text()",
		"description": "HTML 요소의 텍스트 노드 값을 가져오거나 설정한다.",
		"jindoCodeUrl": "duqaco",
		"jqueryCodeUrl": "loyola"
	}, {
		"name": "toggle()",
		"description": "HTML 요소의 display 속성을 변경하여 해당 요소를 화면에 보이거나, 보이지 않게 한다.",
		"jindoCodeUrl": "qirino",
		"jqueryCodeUrl": "zowonu"
	}, {
		"name": "toggleClass()",
		"description": "HTML 요소에 클래스가 이미 적용되어 있으면 제거하고 만약 없으면 추가한다.",
		"jqueryCodeUrl": "cuwuxu",
		"jindoCodeUrl": "wohezo"
	}, {
		"name": "toString()",
		"description": "해당 요소의 코드를 문자열로 변환하여 반환한다(outerHTML 메서드와 동일).",
		"jindoCodeUrl": "budapa",
		"jqueryCodeUrl": "wokofo"
	}, {
		"name": "undelegate()",
		"description": "delegate() 메서드로 등록한 이벤트 위임을 해제한다.",
		"jqueryCodeUrl": "mafawu",
		"jindoCodeUrl": "midoke"
	}, {
		"name": "visible()",
		"description": "HTML 요소의 display 속성을 확인하거나 display 속성을 설정하기 위해 사용한다.",
		"jqueryCodeUrl": "bojuzo",
		"jindoCodeUrl": "nazunu"
	}, {
		"name": "width()",
		"description": "HTML 요소의 너비를 가져오거나 설정한다.",
		"jqueryCodeUrl": "posofe",
		"jindoCodeUrl": "fiyaxo"
	}, {
		"name": "xpathAll()",
		"description": "HTML 요소를 기준으로 XPath 문법을 만족하는 요소를 가져온다.",
		"jindoCodeUrl": "laceni",
		"jqueryCodeUrl": "jihopa"
	}]
}, {
	"className": "$ElementList",
	"property": [],
	"methods": [{
		"name": "addClass()",
		"description": "HTML 요소에 클래스를 추가한다.",
		"jindoCodeUrl": "sohuvu",
		"jqueryCodeUrl": "xowiva"
	}, {
		"name": "appear()",
		"description": "HTML 요소를 서서히 나타나게 한다(Fade-in 효과).",
		"jindoCodeUrl": "lodoqi",
		"jqueryCodeUrl": "negeli"
	}, {
		"name": "attr()",
		"description": "HTML 요소의 속성을 가져오거나 설정한다.",
		"jindoCodeUrl": "golova",
		"jqueryCodeUrl": "cilajo"
	}, {
		"name": "className()",
		"description": "HTML 요소의 클래스 이름을 설정하거나 반환한다.",
		"jqueryCodeUrl": "bezede",
		"jindoCodeUrl": "qaxoko"
	}, {
		"name": "css()",
		"description": "HTML 요소의 CSS 속성 값을 가져오거나 설정한다.",
		"jindoCodeUrl": "kegosi",
		"jqueryCodeUrl": "coxumo"
	}, {
		"name": "disappear()",
		"description": "HTML 요소를 서서히 사라지게 한다(Fade-out 효과).",
		"jqueryCodeUrl": "lebufo",
		"jindoCodeUrl": "yizere"
	}, {
		"name": "empty()",
		"description": "HTML 요소의 자식 노드를 모두 제거한다.",
		"jindoCodeUrl": "xikano",
		"jqueryCodeUrl": "qokica"
	}, {
		"name": "fireEvent()",
		"description": "HTML 요소에 이벤트를 발생시킨다.",
		"jqueryCodeUrl": "fabifa",
		"jindoCodeUrl": "voseve"
	}, {
		"name": "get()",
		"description": "$ElementList() 객체의 내부 요소 중에서 지정한 인덱스에 해당하는 요소를 반환한다.",
		"jindoCodeUrl": "qonira",
		"jqueryCodeUrl": "cowiwo"
	}, {
		"name": "getFirst()",
		"description": "$ElementList() 객체의 첫 번째 요소를 반환한다.",
		"jindoCodeUrl": "fapozi",
		"jqueryCodeUrl": "cuxalo"
	}, {
		"name": "getLast()",
		"description": "$ElementList() 객체의 마지막 요소를 반환한다.",
		"jindoCodeUrl": "goxiyi",
		"jqueryCodeUrl": "wayoba"
	}, {
		"name": "height()",
		"description": "HTML 요소의 높이를 가져오거나 설정한다.",
		"jindoCodeUrl": "revoru",
		"jqueryCodeUrl": "wovome"
	}, {
		"name": "hide()",
		"description": "HTML 요소가 화면에 보이지 않도록 display 속성을 none으로 변경한다.",
		"jindoCodeUrl": "mubaho",
		"jqueryCodeUrl": "pozatu"
	}, {
		"name": "html()",
		"description": "HTML 요소의 내부 HTML 코드(innerHTML)를 가져오거나 설정한다.",
		"jindoCodeUrl": "detofu",
		"jqueryCodeUrl": "pucoxu"
	}, {
		"name": "leave()",
		"description": "HTML 요소를 자신의 부모 요소에서 제거한다.",
		"jindoCodeUrl": "guromi",
		"jqueryCodeUrl": "rekifo"
	}, {
		"name": "length()",
		"description": "$A() 객체의 length() 메서드를 이용하여 $ElementList() 객체의 크기를 반환하거나 조정한다.",
		"jindoCodeUrl": "kibudi",
		"jqueryCodeUrl": "careya"
	}, {
		"name": "removeClass()",
		"description": "HTML 요소에서 특정 클래스를 제거한다.",
		"jindoCodeUrl": "dojufo",
		"jqueryCodeUrl": "kaqali"
	}, {
		"name": "show()",
		"description": "HTML 요소가 화면에 보이도록 display 속성을 변경한다.",
		"jqueryCodeUrl": "dayuso",
		"jindoCodeUrl": "mekaqo"
	}, {
		"name": "text()",
		"description": "HTML 요소의 텍스트 노드 값을 가져오거나 설정한다.",
		"jindoCodeUrl": "suciwo",
		"jqueryCodeUrl": "ravaja"
	}, {
		"name": "toggle()",
		"description": "HTML 요소의 display 속성을 변경하여 해당 요소를 화면에 보이거나, 보이지 않게 한다.",
		"jqueryCodeUrl": "xosofu",
		"jindoCodeUrl": "luvele"
	}, {
		"name": "toggleClass()",
		"description": "HTML 요소에 클래스가 이미 적용되어 있으면 제거하고 만약 없으면 추가한다.",
		"jindoCodeUrl": "cejupa",
		"jqueryCodeUrl": "zibiqo"
	}, {
		"name": "width()",
		"description": "HTML 요소의 너비를 가져오거나 설정한다.",
		"jindoCodeUrl": "penugi",
		"jqueryCodeUrl": "fojumo"
	}]
}, {
	"className": "$Event",
	"property": [{
		"name": "currentElement",
		"description": "이벤트가 정의된 엘리먼트",
		"jqueryCodeUrl": "dicaqe",
		"jindoCodeUrl": "jesixa"
	}, {
		"name": "element",
		"description": "이벤트가 발생한 엘리먼트",
		"jqueryCodeUrl": "cocofe",
		"jindoCodeUrl": "qarado"
	}, {
		"name": "relatedElement",
		"description": "이벤트의 연관 엘리먼트",
		"jqueryCodeUrl": "cihiji",
		"jindoCodeUrl": "picasa"
	}, {
		"name": "type",
		"description": "이벤트의 종류",
		"jqueryCodeUrl": "nikuva",
		"jindoCodeUrl": "savoci"
	}],
	"methods": [{
		"name": "mouse()",
		"description": "마우스 이벤트 정보를 담고 있는 객체를 반환한다.",
		"jqueryCodeUrl": "meveri",
		"jindoCodeUrl": "velagi"
	}, {
		"name": "pos()",
		"description": "마우스 커서의 위치 정보를 담고 있는 객체를 반환한다.",
		"jindoCodeUrl": "donope",
		"jqueryCodeUrl": "bopami"
	}, {
		"name": "stop()",
		"description": "이벤트의 버블링과 기본 동작을 중지시킨다.",
		"jqueryCodeUrl": "xadalo",
		"jindoCodeUrl": "wedama"
	}]
}, {
	"className": "$Fn",
	"property": [],
	"methods": [{
		"name": "bind()",
		"description": "생성자가 지정한 객체의 메서드로 동작하도록 묶은 Function 객체를 반환한다.",
		"jindoCodeUrl": "gojoge",
		"jqueryCodeUrl": "zavaro"
	}, {
		"name": "delay()",
		"description": "래핑한 함수를 지정한 시간 이후에 호출한다.",
		"jqueryCodeUrl": "mukolo",
		"jindoCodeUrl": "zenexu"
	}, {
		"name": "repeat()",
		"description": "setInterval() 메서드와 동일하다.",
		"jqueryCodeUrl": "romira",
		"jindoCodeUrl": "jadaye"
	}, {
		"name": "setInterval()",
		"description": "래핑한 함수를 지정한 시간 간격마다 호출한다.",
		"jqueryCodeUrl": "folasa",
		"jindoCodeUrl": "puzofe"
	}, {
		"name": "stopDelay()",
		"description": "delay() 메서드로 지정한 함수 호출을 중지할 때 사용한다.",
		"jindoCodeUrl": "boxeja",
		"jqueryCodeUrl": "xajoti"
	}, {
		"name": "stopRepeat()",
		"description": "repeat() 메서드로 지정한 함수 호출을 멈출 때 사용한다.",
		"jindoCodeUrl": "tifipo",
		"jqueryCodeUrl": "wetiyo"
	}]
}, {
	"className": "$Form",
	"property": [],
	"methods": [{
		"name": "element()",
		"description": "특정 또는 전체 입력 요소를 반환한다.",
		"jindoCodeUrl": "vigago",
		"jqueryCodeUrl": "kiqeva"
	}, {
		"name": "enable()",
		"description": "입력 요소의 활성화 여부를 검사하거나 설정한다.",
		"jqueryCodeUrl": "mekilan",
		"jindoCodeUrl": "rinaci"
	}, {
		"name": "serialize()",
		"description": "<form> 요소의 특정 또는 전체 입력 요소를 쿼리스트링(Query String) 형태로 반환한다.",
		"jqueryCodeUrl": "nunube",
		"jindoCodeUrl": "duyaru"
	}, {
		"name": "value()",
		"description": "<form> 요소의 값을 얻거나 설정한다.",
		"jqueryCodeUrl": "qijedi",
		"jindoCodeUrl": "tejime"
	}]
}, {
	"className": "$H",
	"property": [],
	"methods": [{
		"name": "Break()",
		"description": "forEach(), filter(), map() 메서드의 루프를 중단한다.",
		"jqueryCodeUrl": "nifore",
		"jindoCodeUrl": "feqete"
	}, {
		"name": "Continue()",
		"description": "forEach(), filter(), map() 메서드의 루프에서 나머지 명령을 실행하지 않고 다음 루프로 건너뛴다.",
		"jqueryCodeUrl": "latigo",
		"jindoCodeUrl": "vozofo"
	}, {
		"name": "$()",
		"description": "키(key)와 값(value)을 설정하거나 키에 해당하는 값을 반환한다.",
		"jindoCodeUrl": "zevoze",
		"jqueryCodeUrl": "xahifa"
	}, {
		"name": "add()",
		"description": "해시에 값을 추가한다.",
		"jindoCodeUrl": "retovo",
		"jqueryCodeUrl": "degagu"
	}, {
		"name": "filter()",
		"description": "해시의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수가 true 값을 반환하는 원소만 모아 새로운 $H() 객체를 반환한다.",
		"jindoCodeUrl": "yojata",
		"jqueryCodeUrl": "gigiqa"
	}, {
		"name": "forEach()",
		"description": "해시의 모든 원소를 순회하면서 콜백 함수를 실행한다.",
		"jqueryCodeUrl": "fenace",
		"jindoCodeUrl": "vusefu"
	}, {
		"name": "hasKey()",
		"description": "해시에 파라미터로 입력한 키가 있는지 확인한다.",
		"jqueryCodeUrl": "sesoba",
		"jindoCodeUrl": "hafixe"
	}, {
		"name": "hasValue()",
		"description": "해시에 파라���터로 입력한 값이 있는지 확인한다.",
		"jindoCodeUrl": "xamevi",
		"jqueryCodeUrl": "wesiga"
	}, {
		"name": "keys()",
		"description": "해시의 키를 배열로 반환한다.",
		"jqueryCodeUrl": "nunube",
		"jindoCodeUrl": "yoweno"
	}, {
		"name": "ksort()",
		"description": "키를 기준으로 해시의 원소를 오름차순 정렬한다.",
		"jqueryCodeUrl": "qisoru",
		"jindoCodeUrl": "velode"
	}, {
		"name": "length()",
		"description": "해시 객체의 크기를 반환한다.",
		"jindoCodeUrl": "xucihi",
		"jqueryCodeUrl": "puheho"
	}, {
		"name": "map()",
		"description": "해시의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수의 실행 결과를 배열의 원소에 설정한다.",
		"jqueryCodeUrl": "zutino",
		"jindoCodeUrl": "hekadu"
	}, {
		"name": "remove()",
		"description": "지정한 키의 원소를 제거한다.",
		"jqueryCodeUrl": "webigi",
		"jindoCodeUrl": "japari"
	}, {
		"name": "search()",
		"description": "해시에서 파라미터로 지정한 값을 가지는 원소의 키를 반환한다.",
		"jindoCodeUrl": "sasowi",
		"jqueryCodeUrl": "royoja"
	}, {
		"name": "sort()",
		"description": "값을 기준으로 해시의 원소를 오름차순 정렬한다.",
		"jindoCodeUrl": "tukone",
		"jqueryCodeUrl": "hetobu"
	}, {
		"name": "toQueryString()",
		"description": "해시를 쿼리 스트링(Query String) 형태로 만든다.",
		"jindoCodeUrl": "mobufu",
		"jqueryCodeUrl": "fahiwu"
	}, {
		"name": "values()",
		"description": "해시의 값을 배열로 반환한다.",
		"jqueryCodeUrl": "tenuku",
		"jindoCodeUrl": "cikohi"
	}]
}, {
	"className": "$Jindo",
	"property": [],
	"methods": [{
		"name": "isArray()",
		"description": "파라메터가 Array인지 확인하는 함수.",
		"jindoCodeUrl": "vemufe",
		"jqueryCodeUrl": "xevimi"
	}, {
		"name": "isBoolean()",
		"description": "파라메터가 Boolean인지 확인하는 함수.",
		"jqueryCodeUrl": "qalevo",
		"jindoCodeUrl": "qiqubo"
	}, {
		"name": "isDate()",
		"description": "파라메터가 Date인지 확인하는 함수.",
		"jindoCodeUrl": "laweso",
		"jqueryCodeUrl": "casiqo"
	}, {
		"name": "isDocument()",
		"description": "파라메터가 Document인지 확인하는 함수.",
		"jindoCodeUrl": "jasope",
		"jqueryCodeUrl": "gofufi"
	}, {
		"name": "isFunction()",
		"description": "파라메터가 Function인지 확인하는 함수.",
		"jindoCodeUrl": "quneho",
		"jqueryCodeUrl": "hekuje"
	}, {
		"name": "isHash()",
		"description": "파라메터가 Hash인지 확인하는 함수.",
		"jindoCodeUrl": "nefofo",
		"jqueryCodeUrl": "canoju"
	}, {
		"name": "isNull()",
		"description": "파라메터가 Null인지 확인하는 함수.",
		"jindoCodeUrl": "vujica",
		"jqueryCodeUrl": "foyuci"
	}, {
		"name": "isNumeric()",
		"description": "파라메터가 Numeric인지 확인하는 함수.",
		"jindoCodeUrl": "xapeda",
		"jqueryCodeUrl": "musoqe"
	}, {
		"name": "isString()",
		"description": "파라메터가 String인지 확인하는 함수.",
		"jindoCodeUrl": "pesin",
		"jqueryCodeUrl": "leyori"
	}, {
		"name": "mixin()",
		"description": "오브젝트를 mixin할 때 사용",
		"jindoCodeUrl": "voyizu",
		"jqueryCodeUrl": "nicano"
	}]
}, {
	"className": "$Json",
	"property": [],
	"methods": [{
		"name": "compare()",
		"description": "Json 객체끼리 값이 같은지 비교한다.",
		"jqueryCodeUrl": "laruco",
		"jindoCodeUrl": "hafeso"
	}, {
		"name": "fromXML()",
		"description": "XML 형태의 문자열을 $Json() 객체로 인코딩한다.",
		"jqueryCodeUrl": "lofava",
		"jindoCodeUrl": "tadilo"
	}, {
		"name": "get()",
		"description": "특정 경로(path)에 해당하는 $Json() 객체의 값을 반환한다.",
		"jqueryCodeUrl": "betawa",
		"jindoCodeUrl": "pufeca"
	}, {
		"name": "toObject()",
		"description": "$Json() 객체를 원래의 데이터 객체로 반환한다.",
		"jqueryCodeUrl": "yaqexo",
		"jindoCodeUrl": "tayuti"
	}, {
		"name": "toString()",
		"description": "$Json() 객체를 JSON 문자열 형태로 반환한다.",
		"jindoCodeUrl": "tasufi",
		"jqueryCodeUrl": "rawuki"
	}, {
		"name": "toXML()",
		"description": "$Json() 객체를 XML 형태의 문자열로 반환한다.",
		"jindoCodeUrl": "caneni",
		"jqueryCodeUrl": "liyozi"
	}]
}, {
	"className": "$S",
	"property": [],
	"methods": [{
		"name": "bytes()",
		"description": "문자열의 실제 바이트(byte) 수를 반환하고, 제한하려는 바이트(byte) 수를 지정하면 문자열을 해당 크기에 맞게 잘라낸다.",
		"jqueryCodeUrl": "yapali",
		"jindoCodeUrl": "kodifa"
	}, {
		"name": "escape()",
		"description": "문자열에 포함된 한글을 ASCII 문자열로 인코딩하고 non-ASCII 문자를 이스케이프(escape)한다.",
		"jindoCodeUrl": "jirubi",
		"jqueryCodeUrl": "rigiwo"
	}, {
		"name": "escapeHTML()",
		"description": "HTML 특수 문자를 HTML 엔티티(Entities)형식으로 변환한다.",
		"jindoCodeUrl": "yazeja",
		"jqueryCodeUrl": "mukizi"
	}, {
		"name": "escapeRegex()",
		"description": "문자열을 정규식에 사용할 수 있도록 이스케이프(escape)한다.",
		"jindoCodeUrl": "sojuwu",
		"jqueryCodeUrl": "niponu"
	}, {
		"name": "format()",
		"description": "문자열을 포매팅한다.",
		"jindoCodeUrl": "zidewo",
		"jqueryCodeUrl": "dimexu"
	}, {
		"name": "parseString()",
		"description": "URL 쿼리스트링(Query String)을 객체로 파싱한다.",
		"jindoCodeUrl": "jinavu",
		"jqueryCodeUrl": "huyate"
	}, {
		"name": "stripTags()",
		"description": "문자열에서 XML 혹은 HTML 태그를 제거한다.",
		"jindoCodeUrl": "beliha",
		"jqueryCodeUrl": "yawiji"
	}, {
		"name": "times()",
		"description": "문자열��� 파라미터로 지정한 횟수만큼 반복하는 문자열을 생성한다.",
		"jindoCodeUrl": "dikura",
		"jqueryCodeUrl": "sevonu"
	}, {
		"name": "toString()",
		"description": "$S() 객체가 감싸고 있던 원본 문자열(String 객체)을 반환한다.",
		"jindoCodeUrl": "delafud",
		"jqueryCodeUrl": "mijoyo"
	}, {
		"name": "trim()",
		"description": "문자열의 양 끝에 있는 공백을 제거한다.",
		"jqueryCodeUrl": "gozuvi",
		"jindoCodeUrl": "zolube"
	}, {
		"name": "unescapeHTML()",
		"description": "이스케이프(escape)된 문자를 원래의 문자로 변환한다.",
		"jindoCodeUrl": "futute",
		"jqueryCodeUrl": "ralena"
	}]
}, {
	"className": "$Template",
	"property": [],
	"methods": [{
		"name": "process()",
		"description": "템플릿을 해석하고 데이터를 적용하여 새로운 문자열을 생성한다.",
		"jqueryCodeUrl": "judame",
		"jindoCodeUrl": "funuza"
	}]
}, {
	"className": "$Window",
	"property": [],
	"methods": [{
		"name": "$value()",
		"description": "원본 window 객체를 반환한다.",
		"jqueryCodeUrl": "sorure",
		"jindoCodeUrl": "yaxeku"
	}, {
		"name": "moveBy()",
		"description": "창을 지정한 위치만큼 이동시킨다.",
		"jqueryCodeUrl": "yewuco",
		"jindoCodeUrl": "xobefo"
	}, {
		"name": "moveTo()",
		"description": "창을 지정한 위치로 이동시킨다.",
		"jindoCodeUrl": "vowomo",
		"jqueryCodeUrl": "dicigo"
	}, {
		"name": "resizeBy()",
		"description": "창의 크기를 지정한 크기만큼 늘리거나 줄인다.",
		"jqueryCodeUrl": "henopib",
		"jindoCodeUrl": "sovupo"
	}, {
		"name": "resizeTo()",
		"description": "창의 크기를 지정한 크기로 변경한다.",
		"jindoCodeUrl": "hiqene",
		"jqueryCodeUrl": "pigesa"
	}, {
		"name": "sizeToContent()",
		"description": "내부 문서의 콘텐츠 크기에 맞추어 창의 크기를 변경한다.",
		"jqueryCodeUrl": "vehaji",
		"jindoCodeUrl": "goruli"
	}]
}];
