function navAnimation() {

  const nav = document.querySelector("nav");

  // Setup shared timeline
  const tl = gsap.timeline({ paused: true });

  tl.to(".nav-bottom", {
    height: "20vh",
    duration: 0.4,
  })
    .to(".nav-2 h5", {
      autoAlpha: 0.6,
      duration: 0.2,
    })
    .from(".nav-2 h5 span", {
      y: 25,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.3,
      }
    });

  nav.addEventListener("mouseenter", () => tl.play());
  nav.addEventListener("mouseleave", () => tl.reverse());

}


gsap.from("#page1 h1", {
  y: 1000,
  duration: 1.3,
  delay: 0.2,
  rotate: 200,
  stagger: 0.8,
  opacity: 0,
  // repeat: -1,
  // yoyo: true,

})

gsap.from("#page1 p", {
  x: -1000,
  duration: 1.5,
  delay: 1.5,
  rotate: -100
})

gsap.from("#page1-box h4,#page1-box h5", {
  x: 1000,
  duration: 1.5,
  delay: 2,
  rotate: 100,

})

gsap.from(".move img", {
  x: 2000,
  duration: 2.5,
  delay: 2.5,
  rotate: 100
})

gsap.from("#page3 .page3-left", {
  x: -500,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 .page3-left",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 50%",
    scrub: 3
  }
})

gsap.to("#page8 h1", {
  transform:"translateX(-1100%)",
  scrollTrigger: {
    trigger: "#page8",
    scroller: "body",
    ease: "none",
    // markers: true,
    start: "top 0%",
    end: "top -1100%",
    scrub:2,
    pin: true
  }
})







navAnimation();

