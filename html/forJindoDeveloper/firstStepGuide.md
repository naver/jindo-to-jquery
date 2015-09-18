## jQuery 와 같이 쓰기 
### Jindo 와 jQuery 간의 충돌 피하기 ###
jQuery 는 $를 jQuery 라는 변수의 **별명(alias)**으로 사용한다. 하지만 문제는 Jindo 에서도 $ 라는 이름을 사용하기 때문에 충돌이 발생한다. jQuery 는 다른 라이브러리와의 이러한 충돌을 피하기 위해 *noConflict()* 라는 함수를 제공한다.

다음과 같이 호출하면 jQuery 에서 $ 변수를 안쓰도록 한다. 즉 $ 는 더이상 jQuery 의 Alias 가 아니다.

```html
<script src="jindo.js"></script>
<!-- 1. jQuery 를 로딩하면 jindo 에 정의된 $ 는 _$ 라는 내부 변수에 저장 -->
<script src="jquery.js"></script>
<script>
// 2. noConflict 를 호출하면 $ 가 jQuery 로 덮어써진 경우 이전 $ 값(_$)을 복구시킨다.
jQuery.noConflict();

// 3. 그래서 이 다음부터는 $ 를 jindo 의 $ 로 사용할 수 있다.
var el = $("test"); //el 은 jQuery Object 가 아닌 Jindo.$() 에 의해 수행된 element 값이다.
</script>
```

다음과 같이 다른 변수를 jQuery 의 Alias 로 지정할 수도 있다.

```js
var j = jQuery.noConflict();
 
// Do something with jQuery
j( "div p" ).hide();
```

$ 를 사용하고 싶은 경우 다음과 같은 형태로 사용이 가능하다.
```js
//jQuery ready 의 callback 함수 파라미터로 $ 를 받는다.
jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
  // Code that uses jQuery's $ can follow here.
  $( "div" ).hide();
});

/** 혹은 **/

//즉시 실행함수에 jQuery 를 넘기고 파라미터로 $ 를 받는다.
jQuery.noConflict();
(function( $ ) {
  $(function() {
    // More code using $ as alias to jQuery
    $( "div" ).hide();
  });
})(jQuery);
```

#### 참고문서
  * http://learn.jquery.com/using-jquery-core/avoid-conflicts-other-libraries/

## 자주하는 실수
### $Element("id") vs $("selector")
$Element 는 **id** 를 인자로 받지만 $() 는 **CSS selector** 를 인자로 받는다는 점에 유의하라.

따라서 다음 코드는 잘못변환된 예이다.
```js
$Element("test").css -> $("test").css
```
아래와 같이 수정되는 것이 옳다.
```js
$("#test").css
```