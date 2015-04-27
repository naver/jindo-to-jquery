## ﻿1. Append Outside of Loops

아래와 같이 loop 안에서 매번 HTML 을 append 하지 말아라. 매번 DOM 조작 비용이 발생하기 때문이다.
```js
$.each( myArray, function( i, item ) {

    var newListItem = "*   " + item + "";

    $( "#ballers" ).append( newListItem );

});

```
loop 작업이 끝난 후 append 한다.

## 2. Cache Length During Loops

for 문에서 길이 값은 미리 변수로 빼서 처리하라.
```js

var myLength = myArray.length;

for ( var i = 0; i < myLength; i++ ) {

    // do stuff

}
```

## 3. Detach Elements to Work with Them

Element 뺐다가 다시 넣어야 하는 상황에서는 .detach()를 써라.

`.detach()`를 하면 DOM 만 제거되고 해당 element 에 대한 jQuery 데이터는 모두 유지 되기 때문에 element 를 뺐다가 나중에 다시 DOM 에 넣는 상황에서 `.remove()` 를 호출한 것에 비해 더 유리하다.

```js
var table = $( "#myTable" );
var parent = table.parent();

table.detach();

// ... add lots and lots of rows to table

parent.append( table );//TODO: 자식들도 유지되는 것 같은데 확인해 보기

```

## 4. Don't Act on Absent Elements

jQuery Object 가 없다고 하더라도 별 애러없이 그냥 지나가므로 jQuery Object 를 검증하는 건 우리 개발자의 책임이다. 

length를 체크한 후 실행하라. 왜냐하면 selection 에 해당하는 element 가 없으면 method 호출 시  overhead 가 발생하기 때문이다.

```js
// Bad: This runs three functions before it
// realizes there's nothing in the selection
$( "#nosuchthing" ).slideUp();

// Better:
var elem = $( "#nosuchthing" );

if ( elem.length ) {

    elem.slideUp();

}

// Best: Add a doOnce plugin.
jQuery.fn.doOnce = function( func ) {

    this.length && func.apply( this );

    return this;

}

$( "li.cartitems" ).doOnce(function() { 

    // make it ajax! \o/ 

});

```

## 5. Optimize Selector

사람들이 간과하고 있는 부분이다. 브라우저에서 많은 처리하도록 바뀌고 있지만 아직 중요하다.

### ID Based Selectors

ID 기반이 가장 빠르다.

Browser native 함수인 getElementById 를 타게 하는 방식이 최고다. 여러 개의 Selector 를  섞으면 Sizzel selelctor 엔진을 거치므로 성능이 좀 떨어진다.

```js
// Fast:
$( "#container div.robotarm" );

// Super-fast:
$( "#container" ).find( "div.robotarm" );

```

### Specificity

jQuery는 선택자를 오른쪽부터 분석하기 때문에 오른쪽에 좀더 상세한 selector 를 두는 것이 빠르다.

```js
// Unoptimized:
$( "div.data .gonzalez" );

// Optimized:
$( ".data td.gonzalez" );

```

### Avoid Excessive Specificity

과도한 selector 는 피하라. 단순하게 구성할 수록 Traverse 해야하는 layer 가 줄어들므로 속도가 빨라진다.

```js
$( ".data table.attendees td.gonzalez" );

// Better: Drop the middle if possible.
$( ".data td.gonzalez" );

```

### Avoid the Universal Selector

전체 element 를 암시하는 selector 를 쓰거나 * 와 같이 명시적으로 전체를 지정하는 selector 는 가능하면 사용하지 마라.

```js
$( ".buttons > *" ); // Extremely expensive.
$( ".buttons" ).children(); // Much better.

$( ".category :radio" ); // Implied universal selection.
$( ".category *:radio" ); // Same thing, explicit now.
$( ".category input:radio" ); // Much better.

```

## 6. Use Stylesheets for Changing CSS on Many Elements

css 를 통해서 20 개 이상의 element 의 속성을 바꾸려고 하는 경우 대신 style tag 적용하는 것이 60% 가까이 빠르다.

```js
// Fine for up to 20 elements, slow after that:
$( "a.swedberg" ).css( "color", "#0769ad" );

// Much faster:
$( "<style type=\"text/css\">a.swedberg { color: #0769ad }</style>")
    .appendTo( "head" );
```

## 7. Don't Treat jQuery as a Black Box.

https://code.jquery.com/jquery/ 링크를 보고 소스 코드를 자주 참조해라