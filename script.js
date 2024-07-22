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
