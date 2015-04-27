## jQuery Ajax 관련 메소드

### $.ajax()

Ajax 를 위한 핵심 메소드이다.
```js
// Using the core $.ajax() method
$.ajax({

    // The URL for the request
    url: "post.php",

    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },

    // Whether this is a POST or GET request
    type: "GET",
  
    // The type of data we expect back
    dataType : "json",
  
    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $( "<h1>" ).text( json.title ).appendTo( "body" );
        $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    },
  
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
    },
  
    // Code to run regardless of success or failure
    complete: function( xhr, status ) {
        alert( "The request is complete!" );
    }
});
```

#### 옵션들

```js
async // 기본값은 true, 만약 false 로 하면 응답이 올때까지 코드 블록 실행이 중단된다.
cache // 기본값 true (예외 script, jsonp 타입), false 로 설정하면 캐시 되지 않도록 하기 위한 임의의 파라미터가 요청뒤에 붙게 된다.
complete // 요청의 성공/실패에 상관없이 요청작업이 끝났을때 callback
context // callback 함수의 context 지정. 기보능로는 $.ajax() 에 넘긴 Object  를 지칭
data // 서버에 전송할 데이터
dataType // 서버로부터 전송받을 데이터 타입
error // 에러 콜백
jsonp // jsonp 요청할 때 쿼리 스트링에 넣을 callback 이름
success: 성공 콜백
timeout // 실패로 간주할 때까지의 시간
traditional // 1.4 이전에서 사용했던 data serialization 방법을 적용
type // 요청 타입 eg.POST, GET...
```

#### 유용한 편의 메소드들

$.ajax 를 좀더 편하게 사용하게 하기 위한 Wrapping 메소드이다.
```js
$.get
$.post
$.getScript
$.getJSON
$.fn.load
    - URL 로부터 HTML 을 가져와서 해당 element 에 뿌려준다.
    - load 시 select 를 옵션으로 하여 특정한 영역만 가져올 수 있다.
```

```js
// Using .load() to populate an element
$( "#newContent" ).load( "/foo.html" );

```

#### dataType 과 관련된 주의 사항

서버에서 data Type 을 (클라이언트 요청과 동일하게)정확하게 내려주는지 확인해야 한다.   
그렇지 않으면 정확한 이유없이 fail 이 떨어지기 때문이다.

### Form 과의 연동

#### jQuery Ajax를 Form 과 연동했을때 유용한 점

##### 1) Serialization

*   **.serialize()** 는 Form 데이터를 query 문자열(field1=val1&field2=val2)로 serialize해준다.   
  *  다만 serialize 되기 위해서는 element 는 name 속성을 가져야한다는 제약 사항이 있다.
  *  checkbox 나 radio 의 경우 체크되어 있으면 쿼리 문자열에 포함된다.
*   **.serializeArray()** 는 .serialize 와 유사하지만 결과값이 문자열 대신 Object 배열이다. 

##### 2) Client-side validation

Form Submit 을 할때 값이 유효하지 않으면 event.preventDefault(); 를 통해 submit 을 방지하는 등의 사전 처리를 할 수 있다.
```js
// Using validation to check for the presence of an input
$( "#form" ).submit(function( event ) {

    // If .required's value's length is zero
    if ( $( ".required" ).val().length === 0 ) {

        // Usually show some kind of error message here

        // Prevent the form from submitting
        event.preventDefault();
    } else {

        // Run $.ajax() here
    }
});

```

##### 3) Prefiltering

Ajax 요청을 보내기 전에 Ajax 옵션을 바꾸는 기능이다.
```js
// Using a proxy with a prefilter
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    if ( options.crossDomain ) {
        options.url = "http://mydomain.net/proxy/" + encodeURIComponent( options.url );
        options.crossDomain = false;
    }
});

```

dataType 을 지정하여 특정 데이터 타입에만 filter 가 적용되게 할 수 있다.
```js
// Using the optional dataTypes argument
$.ajaxPrefilter( "json script", function( options, originalOptions, jqXHR ) {

    // Do all of the prefiltering here, but only for
    // requests that indicate a dataType of "JSON" or "script"
});

```

Ajax 시작과 끝 시점에 발생할 Callback 을 지정하는 방식은
 * Ajax request 할 때 option 으로 지정하는 방식도 가능하지만, 
 * 다음과 같이 이벤트 바인딩하는 형태도 가능하다.

```js
// Setting up a loading indicator using Ajax Events
$( "#loading_indicator" )
    .ajaxStart(function() {
        $( this ).show();
    })
    .ajaxStop(function() {
        $( this ).hide();
    });

```