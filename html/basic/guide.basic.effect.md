## Animation Effect 관리

### .stop()

현재 selector 를 대상으로 작동 중인 모든 애니메이션 중지
### .delay()

에니메이션 큐에 지정된 다음 동작을 하기 전 delay 를 준다.
### jQuery.fx

이펙트 구현을 컨트롤하기 위한 속성 제공
#### jQuery.fx.speeds

jQuery.fx.speeds 의 경우 다음과 같은 기본값이 설정되어 있다.
```js
{
    slow : 600, 
    fast: 200, 
    _default: 400 // Default speed, used for "normal"
}

```

이 값을 다음과 같이 변경할 수 있다.
```js
jQuery.fx.speeds.fast = 300;
jQuery.fx.speeds.blazing = 100;
jQuery.fx.speeds.excruciating = 60000;
```

#### jQuery.fx.interval

*   초단 프레임 수 조정 (default: 프레임간 13ms)
*   이 값을 작게 하면 고성능 브라우저에서 부드라언 에니메이션이 가능, 한편 성능상 불리

#### jQuery.fx.off

*   애니메이션을 disable 시키기 위해 true 로 설정
*   오래된 브라우저에서 유용(사용자에게 애니메이션 적용 여부 옵션 제공)

## .animate() 를 이용한 이벤트 적용

.animate() 를 통해 동적으로 CSS 값을 애니메이션할 수 있다.
```js
// Custom effects with .animate()
$( "div.funtimes" ).animate(
    {
        left: "+=50",
        opacity: 0.25
    },

    // Duration
    300,

    // Callback to invoke when the animation is finished
    function() {
        console.log( "done!" );
    }
);

```

## Queue 와 Dequeue

Queue 는 jQuery 모든 애니메이션의 기반이다.
### callback 으로 함수 전달

#### callback 을 큐에 추가

callback 을 queue 함수를 써서 Queue 에 추가한다.  
 이렇게 Queue 에 추가해 놓으면 진행 중이던 animation 의 모든 스텝이 끝난 후 callback 이 실행된다.
```js
$( ".box" )
    .animate( {
        height: 20
    }, "slow")
    .queue( function() {
        $( "#title" ).html( "We're in the animation, baby!" );

        // This tells jQuery to continue to the next item in the queue
        $( this ).dequeue();
    } );

```

queue 에 있는 다음 액션을 수행하기 위해서는 dequeue 를 호출해주어야 한다.  

혹은 아래 예제와 같이 Queue 의 callback 의 매개변수로 예약된 함수를 호출하는 방식을 적용할 수도 있다.

*매개변수를 호출하여 자동으로 dequeue 하는 예제*
```js
.queue( function( next ) {
    console.log( "I fired!" );
    next();
} );

```

#### 커스텀 큐

애니메이션은 디폴트로는 "fx" 라는 이름의 큐를 사용한다.   
하지만 개별 이름을 갖는 큐를 지정할 수도 있다. 이럴 경우 dequeue 할 때 커스텀 큐 이름을 매개변수에 전달하여 해당 큐를 실행해야 한다.
```js
$( ".box" )
    .queue( "steps", function( next ) {
        console.log( "Step 1" );
        next();
    } )
    .queue( "steps", function( next ) {
        console.log( "Step 2" );
        next();
    } )
    .dequeue( "steps" );//Call this to display Step1, Step2!

```

fx 라는 이름을 갖는 기본 큐는 dequeue 없이 바로 시작할 수 있지만, 커스텀 큐는 dequeue 에 커스텀 큐 이름을 넣어야 시작할 수 있다.
#### 큐 클리어

##### .clearQueue();

Queue 에 남은 작업을 제거한다.
##### .stop(true)

현재 애니메이션 중단과 더불어 queue 클리어를 모두 한다.
#### 큐 대체

queue 함수의 2번째 인자로 배열을 넣으면 기존 queue 를 대체한다.
```js
$( ".box" )
    .queue( "steps", function( next ) {
        console.log( "I will never fire as we totally replace the queue" );
        next();
    } )
    .queue( "steps", [
        function( next ) {
            console.log( "I fired!" );
            next();
        }
    ] )
    .dequeue( "steps" );

```