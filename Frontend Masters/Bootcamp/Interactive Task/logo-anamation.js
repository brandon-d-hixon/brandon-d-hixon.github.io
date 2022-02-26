const { easing, tween, styler } = window.popmotion;

const divStyler = styler(document.querySelector("nav img"));

tween({
  from: -300,
  to: { x: 300, rotate: 180 },
  duration: 3000,
  ease: easing.backOut,
  flip: Infinity,
  elapsed: 500,
  // loop: 5,
  yoyo: 100,
}).start(divStyler.set);
