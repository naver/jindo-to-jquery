## $ vs $()

```js
$("h1").remove()
```
위와 같이 jQuery selection 에 대해 호출된 메서드는 $.fn 라는 네임스페이스에 속한다. 그리고 자동으로 이 selection (this) 을 파라미터로 받거나 반환값으로 사용한다.

```js
$.ajax()
```

위와 같이 $ 네임스페이스에 속한 메소드들은 selection 을 대상으로 하는 메소드가 아닌 유틸리티성 메소드를 의미한다.

## $( document ).ready()

### $(document).ready()

페이지를 안전하게 조작할 수 있는 시점을 알려준다. 페이지 내 DOM 이 준비될 때 한번 호출된다.

```js
$(function() {
    //$(document).ready 와 동일

});
```

### $(window).load()

DOM 뿐만 아니라 전체 페이지(이미지, 스크립트, iframe)의 리소스가 준비되었을 때 호출된다.

## 다른 라이브러리와의 충돌 피하기

$(변수명)를 사용하는 다른 라이브러리와의 충돌을 피하고자 하는 경우 jQuery.noConflict() 를 호출하면 그 이후 시점부터 jQuery 에서 $ 라는 Alias 는 사용하지 않는다.

### 1) 새로운 Namespace(Alias)사용
jQuery.noConflict() 의 반환 값을 받은 변수를 새로운 jQuery 의 Alias 로 지정할 수 있다.

```js
var $j = jQuery.noConflict();
$j( document ).ready( function() {
    //ready
});

```

### 2) 즉시 실행함수 형태로 실행

```js
jQuery.noConflict();
(function( $ ) {
    $( "div" ).hide();
})(jQuery);

```

### 3) $ 를 매개변수로 지정

```js
jQuery.noConflict();
jQuery( document ).ready((function( $ ) {
    $( "div" ).hide();
});

```

## jQuery Object

### 반환값

jQuery 는 array 형태의 collection (jQuery Object) 을 반환한다. 이 jQuery Object 는 Element 의 조작을 위한 여러 편의 인터페이스를 제공한다.

첫 번째 jQuery object 반환하는 예제

```js
$( "h1" ).eq(0);

```

첫 번째 `<h1>` element 반환하는 예제

```js
$( "h1" ).get( 0 );
$( "h1" )[ 0 ];

```

### Wrapping 객체의 유일성

#### jQuery로 래핑된 Object 는 유일하다.

```js
$( "#logo") !== $("#logo")

```

#### 하지만 같은 Element 를 참조할 수 있다.

```js
var logo1 = $( "#logo" ).get( 0 );
var logo2 = $( "#logo" ).get( 0 );

logo1 === logo2

```

### 실시간이 아님을 주의

```js
var allParagraphs = $( "p" );

```

위 함수 호출 후 p 가 추가되거나 삭제되었을때 allParagraph 는 업데이트된 컨텐츠는 반영하지 않는다는 점을 유의하라. DOM 변경이 생겼다면 다시 호출해줘야 한다.

```js
allParagraphs = $( "p" );

```

### Wrapping Up

jQuery Object 를 가지고 element 를 create 하거나 select 하는 경우에 그 result 는 새로운 jQuery Object 이다.
## 탐색

### Parents

```js
.parent(), .parents(), .parentsUntil(), .closest()

```

### Children

```js
.children() , .find()
```

### Sibiling

```js
.prev(), .next(), .sibiling(), .nextAll(), nextUntil(), .prevAll(), .prevUntil()

```

## 유틸리티 함수

### 일반

```js
$.trim()
$.each();
$.inArray()
$.extend()
$.proxy()

```

### Type 테스팅

```js
$.isArray([]);
$.isFunction(function() {});
$.isNumeric(3.14);
$.type( true); //"boolean"
$.type(3);
$.type("test");
$.type (function() });

```

## 순회하기(Iterating)

### $.each()

$.each() 는 Array 를 대상으로 for 나 for-in 의 기능을 하는 유틸리티 함수

### .each

jQuery collection 에 대한 iteration 을 하는 함수

**단, 무조건 each 를 쓰지 말자.**

```js
$( "li").each( function(index, el) {
    $( el ).adClass( "newClass" );
});

```

위 코드는 다음과 같이 쓰는게 바람직하다.
```js
$( "li" ).addClass( "newClass" );

```

그러나 개별 element 에 대한 getter 를 쓸 때는 each 를 통해 개별적으로 돌아야한다.  
그렇지 않으면 첫번째 element 에 대한 결과만 반환한다. (예외 .text() 는 concat 된 문자열 반환)

```js
/**
* 여러 input 이 있을 때
*/
// Incorrect! 아래 코드는 첫번째 input value 값만 설정한다.
$( "input" ).val( $(this).val() + "%" );

// Correct! 개별 element 를 순회하며 값을 반환해주어야 한다.
$( "input" ).each( function( i, el ) {
    var elem = $( el );
    elem.val( elem.val() + "%");
});

```

단 setter 는 callback 을 지정하여 모든 개별 element 를 순회하며 값 설정을 할 수 있다.  

그래서 다음 둘은 동일하다.  
*1) each 로 모든 개별 element 를 순회하며 값을 설정하는 예*

```js
$( "input" ).each( function( i, el ) {
    var elem = $( el );
    elem.val( elem.val() + "%" );
});

```

*2) setter 함수에 callback 을 지정하여 모든 개별 element 에 값을 설정하는 예제*
```js
$( "input" ).val(function( index, value ) {
    return value + "%";
});

```

이런 암묵적인 iteration 과 관련하여 기억할만한 내용이 있다.
> children(), .parent() 와 같은 traverse 메소드들은 collection 에 있는 각 element 에 적용되어 통합된 children 혹은 parent 컬렉션을 반환한다는 점이다.

### .map

jQuery selector 에 기반하여 array 나 concat 된 문자열을 생성하기에는 each 보다는 map 이 적합하다.
```js
var newArr = [];
$( "li" ).each( function() {
    newArr.push( this.id );
});

```

```js
$( "li" ).map( function(index, element) {
    return this.id;
}).get();

```

문자열의 경우는 get() 후에 join 을 해주면 된다.
### $.map

일반 Array 에 적용대상으로 하는 유틸리티 함수이다. 

.map 과는 다음 차이를 갖는다.
* .map 은 jQuery Collection 을 대상으로 하지만 $.map 은 일반 JS Array 를 대상으로 한다.
* 마지막에 get 을 호출해줄 필요가 없다.
* (주의) **Callback 함수의 인자 순서가 뒤바뀌었다.**(이는 ES5 의 native JS 메소두 함수인 `.map` 과 순서를 맞추기 위함이다.)

```js
/*
<li id="a"></li>
<li id="b"></li>
<li id="c"></li>
 */

var arr = [{
    id: "a",
    tagName: "li"
}, {
    id: "b",
    tagName: "li"
}, {
    id: "c",
    tagName: "li"
}];

// Returns [ "a", "b", "c" ]
$( "li" ).map( function( index, element ) {
    return element.id;
}).get();

// Also returns [ "a", "b", "c" ]
// Note that the value comes first with $.map
$.map( arr, function( value, index ) {
    return value.id;
});

```