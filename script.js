const tl = gsap.timeline()

gsap.to("nav", {
  backgroundColor: "#000",
  color: '#ffffff', 
  duration : 0.5,
  scrollTrigger : {
    trigger  : 'nav',
    scroller : 'body',
    // markers : true,
    start : 'top -10%',
    end : 'top -10',
    scrub : 2
  }
});
gsap.to("a", {
  color: '#ffffff', 
  duration : 0.2,
  scrollTrigger : {
    trigger  : 'a',
    scroller : 'body',
    // markers : true,
    start : 'top -10%',
    end : 'top -10',
    scrub : 1
  }
});
gsap.from(".h1container h1", {
  duration : 0.5,
  y: 400,
  ease: "power1.out",
  stagger : 0.2

})

tl.to(".h1container h1", {
 duration : 0.5,
  y: 400,
  scrollTrigger : {
    trigger  : '.h1container h1',
    scroller : 'body',
    // markers : true,
    start : 'top -10%',
    end : 'top -10',
    scrub : 2
  }
});