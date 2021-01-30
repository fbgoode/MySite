// Scrolling animations
var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "60%"
    }
});

// define tweens
var tween = TweenMax.from("#IUPI", 1, {
    x: 1000,
    ease: Power2.easeOut
});
var tween2 = TweenMax.to("#eventDate2", 1, {
    y: $(window).height() / 2,
    ease: Power2.easeInOut
});

// build scene
new ScrollMagic.Scene({
        triggerElement: "#IUPI"
    })
    .setTween(tween)
    .addTo(controller2);

new ScrollMagic.Scene({
        triggerElement: "#IUPI"
    })
    .setTween(tween2)
    .addTo(controller2);

// change height of spacers

$(".eventSpacer").css("height",$(window).height() / 2+32)