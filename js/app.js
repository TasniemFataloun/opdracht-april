gsap.registerPlugin(ScrollTrigger);
const main = document.querySelector("main");

for (let i = 1; i <= 5; i++) {
  gsap.from(`#section${i} .paragraaf${i}`, {
    scrollTrigger: {
      scroller: main,
      trigger: `#section${i}`,
      toggleActions: "restart none none pause",
    },
    x: 500,
    opacity: 0,
    duration: 1.5,
  });
}

gsap.registerPlugin(ScrollTrigger);

// use ScrollTrigger to trigger the animation when .letter-img comes into view
gsap.to('.letter img', {
  scrollTrigger: {
    trigger: '.letter img',
    toggleActions: "restart none none none"
  },
  x:50, 
  duration: 2
});