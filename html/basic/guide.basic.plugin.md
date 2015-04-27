## Plugin 개요

플러그인은 jQuery 의 prototype 객체를 확장한 메소드이다. 이렇게 확장된 모든 메소드는 jQuery Object 를 통해 호출할 수 있다.

### 플러그인을 가장 빨리 찾는 방법
구글, jQuery Plginin Registry 검색

### 좋은 플러그인인지 검증하는 방법
https://remysharp.com/2010/06/03/signs-of-a-poorly-written-jquery-plugin

### 참고사항
jQuery UI 에 있는 플러그인들은 jQuery 팀에 의해 관리되고 있다.
## 플러그인 만들기

### 가장 기본적인 형태

greenify 라는 함수를 플러그인으로 추가한다고 가정하자. 

플러그인을 추가하기 위해 할 일은 다음과 같이 $.fn 에 함수를 추가해주기만 하면 된다.
```js
$.fn.greenify = function() {
    this.css( "color", "green" );
};

$( "a" ).greenify(); // Makes all the links green.

```

### 체이닝 적용하기

jQuery Object 인 this 를 반환해주면 체이닝 가능한 함수로 완성된다.
```js
$.fn.greenify = function() {
    this.css( "color", "green" );
    return this;
}

$( "a" ).greenify().addClass( "greenified" );

```

단, .width() 의 경우처럼 특정 값을 반환해야 하는 method 는 예외이다.

### $ 와 scope 의 보호

즉시 실행함 수 형태로 jQuery 를 파라미터로 넘겨서 해결한다.
```js
(function ( $ ) {

    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };

}( jQuery ));

```

즉시 실행함수를 통해 외부로부터 변수를 보호(private)할 수 있다.
```js
(function ( $ ) {

    var shade = "#556b2f";

    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };

}( jQuery ));

```

### footprint 최소화

플러그인 충돌을 최소화 하기 위해서 $.fn 을 많이 잡아 먹지 말아야 한다.
```js
//Bad
(function( $ ) {

    $.fn.openPopup = function() {
        // Open popup code.
    };

    $.fn.closePopup = function() {
        // Close popup code.
    };

}( jQuery ));

```

아래와 같이 하나의 함수만 만들고 파라미터로 구분하는 것이 훨씬 좋은 선택이다.
```js
//Good
(function( $ ) {

    $.fn.popup = function( action ) {

        if ( action === "open") {
            // Open popup code.
        }

        if ( action === "close" ) {
            // Close popup code.
        }

    };

}( jQuery ));

```

### each 메소드의 사용

jQuery Object 는 배열 형태의 Collection 이기 때문에 아래와 같이 each 를 써서 모든 element 에 대한 작업을 수행할 수 있다.

```js
$.fn.myNewPlugin = function() {

    return this.each(function() {
        // Do something to each element here.
    });

};

```

그리고 this 를 반환할 필요 없이 `.each()` 의 결과를 반환해도 된다. `.each()` 는 체이닝 가능한 함수이므로 this 를 반환할 것이기 때문이다.

### 옵션의 지정

Literal object 형태로 옵션을 전달한다.
```js
(function ( $ ) {

    $.fn.greenify = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );

        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });

    };

}( jQuery ));

//사용예
$( "div" ).greenify({
    color: "orange"
});

```

### 실전

위에서 나온 내용으로 다음과 같은 플러그인을 만들어 볼 수 있다.
```js
(function( $ ) {

    $.fn.showLinkLocation = function() {

        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });

        return this;

    };

}( jQuery ));

// Usage example:
$( "a" ).showLinkLocation();

```

앵커 태그 텍스트에 `(주소)`를 추가하는 기능이다.
```html
<!-- Before plugin is called: -->
<a href="page.html">Foo</a>
  
<!-- After plugin is called: -->
<a href="page.html">Foo (page.html)</a>
```

위 플러그인은 다음과 같이 최적화 할 수 있다.
```js
(function( $ ) {

    $.fn.showLinkLocation = function() {

        this.filter( "a" ).append(function() {
            return " (" + this.href + ")";
        });

        return this;

    };

}( jQuery ));

```

최적화 포인트는 다음과 같다.
1.  `.append()` 는 callback을 인자로 받을 수 있고 callback의 반환 값을 각 element 에 append 할 수 있다.
2.  또한 DOM 에서 기본 제공하는 href 속성을 사용하여 굳이 `.attr()` 을 사용하지 않고 href 를 얻어올 수 있다.

## 진보된 플러그인 컨셉

### 기본 플러그인 설정 값에 대한 접근 제공

최소한의 코드로 사용자가 플러그인을 커스터마이징 할 수 있도록 하기 위해 필요하다.

다음은 기본 온셥을 변경하는 예제이다.
```js
// Plugin definition.
$.fn.hilight = function( options ) {

    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var opts = $.extend( {}, $.fn.hilight.defaults, options );

    // Our plugin implementation code goes here.

};

// Plugin defaults – added as a property on our plugin function.
$.fn.hilight.defaults = {
    foreground: "red",
    background: "yellow"
};

// 별도의 옵션 없이 기본 옵션이 적용된 효과를 볼 수 있음
$( "#myDiv" ).hilight();

```

### 하위 함수 재정의 인터페이스 제공

(함수 오버라이딩과 비슷)? 플러그인을 사용자가 커스터마이징하는 방법 중 위 방식과 마찬가지로 많이 쓰이는 방식이다. 

 다음은 hilight 의 format 함수를 재정의한 예이다. 다음과 같이 format 을 확장 가능한 형태로 plugin 을 구현한다.
```js
// Plugin definition.
$.fn.hilight = function( options ) {

    // Iterate and reformat each matched element.
    return this.each(function() {

        var elem = $( this );

        // ...

        var markup = elem.html();

        // Call our format function.
        markup = $.fn.hilight.format( markup );

        elem.html( markup );

    });

};

// Define our format function.
$.fn.hilight.format = function( txt ) {
    return "**" + txt + "**";
};

```

Cycle Plugin 위와 같은 방식으로 transition 을 재정의 할 수 있도록 하였다.
```js
$.fn.cycle.transitions = {

    // ...

};

```

### 외부에 노출할 필요없는 것들은 숨겨라

노출되고나면 하위 호환성 때문에 코드 수정이 어려워진다.
```js
// Create closure.
(function( $ ) {

    // Plugin definition.
    $.fn.hilight = function( options ) {
        debug( this );
        // ...
    };

    // Private function for debugging.
    function debug( obj ) {
        if ( window.console && window.console.log ) {
            window.console.log( "hilight selection count: " + obj.length );
        }
    };

    // ...

// End of closure.

})( jQuery );

```

### 사례 분석을 통한 진보 개념

```js
jQuery.fn.superGallery = function( options ) {

    // Bob's default settings:
    var defaults = {
        textColor: "#000",
        backgroundColor: "#fff",
        fontSize: "1em",
        delay: "quite long",
        getTextFromTitle: true,
        getTextFromRel: false,
        getTextFromAlt: false,
        animateWidth: true,
        animateOpacity: true,
        animateHeight: true,
        animationDuration: 500,
        clickImgToGoToNext: true,
        clickImgToGoToLast: false,
        nextButtonText: "next",
        previousButtonText: "previous",
        nextButtonTextColor: "red",
        previousButtonTextColor: "red"
    };

    var settings = $.extend( {}, defaults, options );

    return this.each(function() {
        // Plugin code would go here...
    });

};

```

### 문제는?

매우 specific한 옵션을 제공하는 방식으로 인해 커스터마이징하기 어려운 문제가 있다. 만약 이미지 width 가 변경될때 좀더 천천히 움직이길 원하는 경우 animateWidthDuration 이라는 옵션을 또 추가할 것인가?

### 보안책

### 특정 플러그인에 종속된 문법을 만들지 말자.

아래 옵션 제공 방식이 뭐가 문제인지 보자.
```js
var delayDuration = 0;

switch ( settings.delay ) {

    case "very short":
        delayDuration = 100;
        break;

    case "quite short":
        delayDuration = 200;
        break;

    case "quite long":
        delayDuration = 300;
        break;

    case "very long":
        delayDuration = 400;
        break;

    default:
        delayDuration = 200;

}

```

사용자가 delay 를 숫자로 지정하면 가장 심플하게 끝날 일을 위와 같이 함으로써 delay 제한이 생길 뿐더러 불필요한 코드가 추가되고 알고 싶지 않은 문법을 강요한다. 

사용자가 직접 지정할 수 있도록 한다. (위와 같이 미리 지정한 값("very short, very long...")에서만 사용하게 하지 말아라)

### Element 제어권을 제공하라

플러그인에서 사용할 element 를 생성한다고 했을때, 생성된 element 를 접근할 수 있는 인퍼페이스를 제공하는 것이 좋다. 

플러그인 내부적으로 임의의 ID 나 클래스 명을 부여하는 것도 이런 접근을 제공하는 방식이지만 그렇다고 플러그인 내부적으로 구현이 이런 hook 에 의존되지 않도록 해야한다. 다음예가 이에 대한 나쁜예 이다.

```js
// Plugin 내부 code
$( "<div class=\"gallery-wrapper\"></div>" ).appendTo( "body" );//body 에 직접 접근
  
$( ".gallery-wrapper" ).append( "..." );//클래스 명으로 접근
```

사용자에게 이런 정보들을 접근하고 수정할 수 있도록하는 것이 바람직하다. 그러기 위해 플러그인 설정과 관련한 public 변수(아래의 예에서는 settings)를 따로 두는 아래 예가 좋은 예이다.

```js
// Retain an internal reference:
var wrapper = $( "<div></div>" )
    .attr( settings.wrapperAttrs )
    .appendTo( settings.container );
  
// Easy to reference later...
wrapper.append( "..." );
```

</pre>

### 이벤트에 대한 Callback 인터페이스 제공

이벤트 드리븐 방식이라면 각 이벤트 별로 callback 을 attach 할 수 있도록 인터페이스를 제공한다.

아래는 onImageShow Callback 인터페이스를 제공하는 예제이다.
```js
var defaults = {

    // We define an empty anonymous function so that
    // we don't need to check its existence before calling it.
    onImageShow : function() {},

    // ... rest of settings ...

};

// Later on in the plugin:

nextButton.on( "click", showNextImage );

function showNextImage() {

    // Returns reference to the next image node
    var image = getNextImage();

    // Stuff to show the image here...

    // Here's the callback:
    settings.onImageShow.call( image );
}

```

superGallery 호출 시 Callback을 등록할 수 있도록 한다. 

이때 이미지를 컨텍스트로 callback 을 호출하면 this 를 통해 바로 이미지를 접근할 수 있으므로 더 직관적인 형태가 나온다.

```js
$( "ul.imgs li" ).superGallery({
    onImageShow: function() {
        $( this ).after( "<span>" + $( this ).attr( "longdesc" ) + "</span>" );
    },
  
    // ... other options ...
});
```

### 모든 것은 타협이다!

1.  **Flexiblitiy** : 당신의 플러그인이 얼마나 많은 상황을 고려하는가?
2.  **Size** : 기능에 걸맞는 크기인가?
3.  **Performance** : 사용자에게 옵션을 제공함으로써 생기는 성능 이슈는 없는가? 그렇다고 하더라도 제공할만한 가치가 있는가?