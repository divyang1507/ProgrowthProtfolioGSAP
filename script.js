const text = SplitType.create('.splittype', { types: 'words' })

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: "[data-scroll-container]",
  markers: false,
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

scroll.on("scroll", (instance) => {
  ScrollTrigger.update();
  document.documentElement.setAttribute("data-scrolling", instance.direction);
});

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

function circlefollower() {
  window.addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY)
    document.querySelector(
      "#circle"
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
  });
}
circlefollower();

gsap.to("nav", {
  backgroundColor: "#000000",
  color: "#ffffff",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "[data-scroll-container]",
    // markers : true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("a", {
  color: "#ffffff",
  duration: 0.2,
  scrollTrigger: {
    trigger: "a",
    scroller: "[data-scroll-container]",
    // markers : true,
    start: "top -10%",
    end: "top -10",
    scrub: 1,
  },
});

const tl = gsap.timeline();
const tl2 = gsap.timeline();
tl.from(".logo, .navmenu", {
  duration: 0.5,
  y: -100,
  ease: "power1.out",
  stagger: 0.2,
});

tl2
  .from(".textcontainer h1 div", {
    duration: 0.5,
    y: 100,
    ease: "power1.out",
    stagger: 0.1,
    delay: 0.5,
    scrub: 2,
  })
  .from(".textcontainer h2 div", {
    duration: 0.1,
    y: 100,
    ease: "power1.out",
    stagger: 0.2,
    // delay: 0.5,
  })
  .from(".textcontainer p div", {
    duration: 0.2,
    y: 100,
    ease: "power1.out",
    stagger: 0.1,
    // delay: 0.5,
  });

tl2.play();

ScrollTrigger.create({
  // animation: tl2,
  trigger: ".textcontainer",
  start: "top 40",
  end: "bottom bottom",
  scrub: true,
  delay: 2,
  onEnter: () => tl2.reverse(),
  onLeaveBack: () => tl2.play(),
  markers: true,
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
