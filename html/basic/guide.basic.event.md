## 이벤트 처리를 위한 메소드 제공

```js
.on() /* 축약형(shorthand) - .click() = .on("click"), .focus(), .change(), etc. */
```

## 동적으로 생성된 엘리먼트로의 이벤트 확장은 안됨

.on 은 이벤트 리스너(핸들러)를 설정하는 시점에 존재하는 엘리먼트에 대해서만 리스너를 설정할 수 있음에 유의한다.   

따라서 다음 예제에서 Alert! 버튼은 동작하지 않는다.
```js
$( document ).ready(function(){

    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $( "button.alert" ).on( "click", function() {
        console.log( "A button with the alert class was clicked!" );
    });

    // Now create a new button element with the alert class. This button
    // was created after the click listeners were applied above, so it
    // will not have the same click behavior as its peers
    $( "<button class="alert">Alert!</button>" ).appendTo( document.body );
});
```

## 이벤트 객체

```js
// Preventing a default action from occurring and stopping the event bubbling
$( "form" ).on( "submit", function( event ) {

    // Prevent the form's default submission.
    event.preventDefault();

    // Prevent event from bubbling up DOM tree, prohibiting delegation
    event.stopPropagation();

    // Make an AJAX request to submit the form data
});

```

### 주요 프로퍼티
```js
.preventDefault()
```
element 의 기본 동작(a link - 페이지 열기, button - 폼 submit 등) 이 일어나지 않도록 한다. 대신 사용자는 이를 대신 하는 동작을 구현해주어야 한다.

```js
.stopPropagation()
```
DOM 트리에서 이벤트 버블링(자식 노드 -> 상위 노드로의 이벤트 전달)을 막는다.

```js
return false;
```
.preventDefault(), .stopPropagation() 을 동시에 한 효과가 있다. 

기타 다음과 같은 주요 event 속성이 있다.
```js
.pageX, .pageY // 이벤트 발생 좌표 (page 의 좌상단 기준 상대좌표)
.type // 이벤트 타입 (eg. "click")
.which // 버튼이나 키 값
.data // 이벤트 바인딩 시 전달한 데이터
.target // 이벤트를 발생시킨 DOM 엘리먼트
.namespace // 이벤트 발생 시 지정된 namespace
.timeStamp // 이벤트 발생 시점 (ms 단위 1970/1/1 기준)
```

## EventHandler 함수 내부

이벤트 핸들러는 this 를 통해 현재 이벤트가 바인딩된 DOM element 에 접근할 수 있다.   
다음과 같이 하면 현재 DOM element 를 jQuery 오브젝트로 변환한다.
```js
var element = $( this );
```

## 여러 개의 이벤트 응답 설정

여러 종류의 이벤트가 하나의 이벤트 핸들러를 같이 쓸수 있다면 .on() 함수에서 이벤트 타입을 스페이스로 구분하여 지정한다.
```js
// Multiple events, same handler
$( "input" ).on(
    "click change", // Bind handlers for multiple events
    function() {
        console.log( "An input was clicked or changed!" );
    }
);

```

다음과 같이 key/value 설정으로 이벤트 핸들러를 지정할 수도 있음.
```js
// Binding multiple events with different handlers
$( "p" ).on({
    "click": function() { console.log( "clicked!" ); },
    "mouseover": function() { console.log( "hovered!" ); }
});

```

## 이벤트에 대한 네임스페이스 지정

```js
// Namespacing events
$( "p" ).on( "click.myNamespace", function() { /* ... */ } );
$( "p" ).off( "click.myNamespace" );
$( "p" ).off( ".myNamespace" ); // Unbind all events in the namespace

```

플러그인과 같은 공유 모듈의 경우 이벤트에 대한 네임스페이스를 지정함으로서 의도치 않게 이벤트가 unbinding 되는 현상을 막을 수 있다.
## 이벤트 리스너 해제

### .off()

첫번째 파라미터는 해제하려는 "이벤트 타입"
```js
// Tearing down all click handlers on a selection
$( "p" ).off( "click" );

```

두번째 파라미터를 지정하는 경우 두번째 파라미터에 해당하는 함수(Event Listener)만 해제한다.
```js
// Tearing down a particular click handler, using a reference to the function
var foo = function() { console.log( "foo" ); };
var bar = function() { console.log( "bar" ); };

$( "p" ).on( "click", foo ).on( "click", bar );
$( "p" ).off( "click", bar ); // foo is still bound to the click event

```

## 이벤트 리스너를 한번만 처리하고자하는 경우

### .one()

```js
// Switching handlers using the `.one()` method
$( "p" ).one( "click", firstClick );

function firstClick() {
    console.log( "You just clicked this for the first time!" );

    // Now set up the new handler for subsequent clicks;
    // omit this step if no further click responses are needed
    $( this ).click( function() { console.log( "You have clicked this before!" ); } );
}

```

다음과 같은 경우에 유용할 수 있다.
* 이벤트 처리 후 다른 이벤트 핸들러를 등록하고자 하는 경우
* 각 이벤트에 대해 한번씩 이벤트 핸들러를 처리하고자 하는 경우

on 과 마찬가지로 한번에 여러 개의 이벤트를 바인딩할 수 있다.

아래는 한번에 여러 개의 이벤트를 바인딩하는 예제이다.
```js
// Using .one() to bind several events
$( "input[id]" ).one( "focus mouseover keydown", firstEvent);

function firstEvent( eventObject ) {
    console.log( "A " + eventObject.type + " event occurred for the first time on the input with id " + this.id );
}

```