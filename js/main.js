(function() {
	var data = [
	{
		className: "$$",
		methods: [
			{name : '$$.version ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.clearCache() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.debug() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.getSingle() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.safeHTML() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.test() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.useCache() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$$.xpath() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]	
	},
	{
		className: "$A",
		methods: [
			{name : '$value()', description : '$value() 메서드는 내부 배열을 반환한다.', jindoCodeUrl : 'http://jsbin.com/iwovaj/74/embed', jqueryCodeUrl : 'http://jsbin.com/iwovaj/74/embed'},
			{name : 'Break() ', description : 'Break() 메서드는 forEach(), filter(), map() 메서드의 루프를 중단한다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.', jindoCodeUrl : 'http://jsbin.com/iwovaj/74/embed', jqueryCodeUrl : 'http://jsbin.com/iwovaj/74/embed'},
			{name : 'Continue() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'concat() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'empty() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'every()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'filter()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'forEach() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'get()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'has()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'indexOf()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'length()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'length() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'map()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'pop()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'push()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'refuse()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'reverse() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'set() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'shift()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'shuffle() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'slice()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'some()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'sort() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'splice()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toString()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'unique() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'unshift()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Agent',
		methods : [
			{name : 'flash()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'navigator()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'os()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'silverlight()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Ajax',
		methods: [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'abort() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'header()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'header() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isIdle()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'option()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'option() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'request() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'url()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'url() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Ajax.Queue',
		methods: [
			{name : 'add() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'option()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'option() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'request() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Ajax.Response',
		methods: [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'header()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'json()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'readyState()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'status()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'text()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'xml()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Class',
		methods : []
	},
	{
		className : '$Cookie',
		methods: [
			{name : 'get()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'keys()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'remove() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'set() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Date',
		methods : [
			{name : 'names ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'utc ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'compare()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'date()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'date() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'day()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'format()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hours()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hours() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isLeapYear()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'minutes()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'minutes() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'month()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'month() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'name()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'name() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'now() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'parse() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'seconds()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'seconds() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'time()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'time() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'year()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'year() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Document',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'clientSize()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'query()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'queryAll()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'renderingMode()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'scrollPosition()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'scrollSize()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'xpathAll()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Element',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : 'http://jsbin.com/iwovaj/74/embed', jqueryCodeUrl : 'http://jsbin.com/iwovaj/74/embed'},
			{name : 'addClass() ', description : 'addClass() 메서드는 HTML 요소에 클래스를 추가한다', jindoCodeUrl : 'http://jsbin.com/iwovaj/74/embed', jqueryCodeUrl : 'http://jsbin.com/iwovaj/74/embed'},
			{name : 'after() ', description : 'after() 메서드는 jindo.$Element() 객체에 있는 요소의 다음 형제 노드(nextSibling)로 파라미터로 지정한 요소를 배정한다.', jindoCodeUrl : 'http://jsbin.com/iwovaj/74/embed', jqueryCodeUrl : 'http://jsbin.com/iwovaj/74/embed'},
			{name : 'afterHTML() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'appear() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'append() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'appendHTML() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'appendTo() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'attach() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'attr()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'attr() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'before() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'beforeHTML() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'child()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'className()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'className() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'clone()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'css()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'css() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'cssClass()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'cssClass() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'data()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'data() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'delegate() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'detach() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'disappear() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'ellipsis() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'empty() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'evalScripts() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'fireEvent()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'first()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hasClass()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hasEventListener()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'height()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'height() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hide() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hook() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hook() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'html()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'html() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'indexOf()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isChildOf()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isEqual()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isParentOf()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'last()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'leave() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'next()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'offset()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'offset() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'opacity()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'opacity() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'outerHTML()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'parent()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'prepend() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'prependHTML() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'prependTo() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'prev()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'preventTapHighlight() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'query()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'queryAll()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'remove() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'removeClass() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'replace() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'show() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'test()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'text()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'text() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toString()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toggle() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toggleClass() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'undelegate() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'visible()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'visible() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'width()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'width() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'wrap()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'xpathAll()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$ElementList',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'addClass() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'appear() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'attr() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'className() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'css() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'disappear() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'empty() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'fireEvent()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'get()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'getFirst()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'getLast()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'height() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hide() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'html() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'leave() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'length()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'length() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'removeClass() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'show() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'text() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toggle() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toggleClass() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'width() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Event',
		methods : [
			{name : 'CANCEL_ALL ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'CANCEL_BUBBLE ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'CANCEL_DEFAULT ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'currentElement', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'delegatedElement', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'relatedElement', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'srcElement', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'type', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hook() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'key()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'mouse()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'pos()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'stop() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'stopBubble() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'stopDefault() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Fn',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'bind()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'delay()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'repeat()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'setInterval()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'stopDelay() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'stopRepeat() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Form',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'element()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'enable()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'enable() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'reset() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'serialize()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'submit() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'value() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$H',
		methods : [
			{name : '$()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'Break() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'Continue() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'add() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'empty() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'filter()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'forEach() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hasKey()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'hasValue()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'keys()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'ksort() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'length()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'map()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'remove()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'search()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'sort() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toQueryString()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'values()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Jindo',
		methods : [
			{name : 'isArray() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isBoolean() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isDate() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isDocument() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isElement() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isFunction() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isHash() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isNode() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isNull() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isNumeric() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isRegexp() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isString() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isUndefined() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'isWindow() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'mixin() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Json',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'compare()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'fromXML() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'get()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toObject()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toString()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toXML()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$S',
		methods : [
			{name : 'jindo.$Event().pos().layerX / layerY', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'jindo.$Jindo().version', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'jindo.$Jindo.version', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'bytes()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'bytes()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'bytes()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'escape()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'escapeHTML()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'escapeRegex()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'format()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'parseString()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'stripTags()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'times()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'toString()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'trim()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'unescapeHTML()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Template',
		methods : [
			{name : 'addEngine() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'getEngine() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'process()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	},
	{
		className : '$Window',
		methods : [
			{name : '$value()', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'moveBy() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'moveTo() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'resizeBy() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'resizeTo() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''},
			{name : 'sizeToContent() ', description : '', jindoCodeUrl : '', jqueryCodeUrl : ''}
		]
	}];

	$(".accordian").accordian({
		data: data
	}).on('showArticle', function(e, data) {
		ArticleView.updateArticle(data);

		// ArticleView.updateArticle({
		// 	methodName: data.className+"."+data.name/*+"()"*/,
		// 	description: data.description,
		// 	jindoJsbin: data.jindoCodeUrl ? data.jindoCodeUrl +'?js&height=450px' : testJsBinUrl,
		// 	jqueryJsbin: data.jqueryCodeUrl ? data.jqueryCodeUrl +'?js&height=450px' : testJsBinUrl
		// });
	});;
})();