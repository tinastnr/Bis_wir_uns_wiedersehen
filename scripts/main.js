// Audio

let spinning = false; 
let rotationTween; 

function toggleMusic() {
  const audio = document.getElementById("audio-player");
  const schallplatte = document.querySelector(".Schallplatte-button");

  if (audio.paused) {
    audio.play();
    

    if (!spinning) {
      rotationTween = gsap.to(schallplatte, { 
        rotation: "+=360", 
        duration: 2, 
        ease: "linear", 
        repeat: -1 
      });
      spinning = true;
    }
  } else {
    audio.pause(); 
    
    if (spinning) {
      rotationTween.pause(); 
      spinning = false;
    }
  }
}





// Abschnitt 2 Sebi Hand

gsap.registerPlugin(ScrollTrigger);

console.log("ScrollTrigger registered");

gsap.set(".textsection", {opacity: 0});

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".handsection",
        start: "top top", 
        end: "bottom top", 
        scrub: true,
        pin: true, 
        onEnter: () => console.log("ScrollTrigger entered"),
        onLeave: () => console.log("ScrollTrigger left"),
        onUpdate: (self) => console.log("ScrollTrigger progress:", self.progress)
    }
});

timeline
    .fromTo(".hand-image-container", { x: "100%" }, { x: "30%", ease: "power2.out", duration: 1 })

    .to(".textsection", { opacity: 1, duration: 1 }) 
    .to(".rose", { opacity: 1, duration: 1 }) 
    .to(".hand-image-container", { x: "30%", ease: "none", duration: 1 })
    .to(".rose", { opacity: 0, duration: 1 }, "+=0.5") 
    .to(".textsection", { opacity: 0, duration: 1 }, "+=0.5") 
    .to(".hand-image-container", { x: "100%", ease: "power2.in", duration: 1 });

console.log("Timeline created:", timeline);








// Abschnitt 3 Amelie Hand

gsap.registerPlugin(ScrollTrigger);

console.log("ScrollTrigger registered");

gsap.set(".textsection2", {opacity: 0});

const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".handsection2",
        start: "top top", 
        end: "bottom top", 
        scrub: true,
        pin: true, 
        onEnter: () => console.log("ScrollTrigger entered"),
        onLeave: () => console.log("ScrollTrigger left"),
        onUpdate: (self) => console.log("ScrollTrigger progress:", self.progress)
    }
});

timeline2
    .fromTo(".hand-image-container2", { x: "-100%" }, { x: "-40%", ease: "power2.out", duration: 1 })
    .to(".textsection2", { opacity: 1, duration: 1 }) 
    .to(".mond", { opacity: 1, duration: 1 }) 
    .to(".hand-image-container2", { x: "-40%", ease: "none", duration: 1 })
    .to(".mond", { opacity: 0, duration: 1 }) 
    .to(".textsection2", { opacity: 0, duration: 1 }, "+=0.5") 
    .to(".hand-image-container2", { x: "-100%", ease: "power2.in", duration: 1 });

console.log("Timeline created:", timeline2);









// Abschnitt 4 Sebi Hand


gsap.registerPlugin(ScrollTrigger);

console.log("ScrollTrigger registered");

gsap.set(".textsection3", {opacity: 0});

const timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".handsection3",
        start: "top top", 
        end: "bottom top",
        scrub: true,
        pin: true, 
        onEnter: () => console.log("ScrollTrigger entered"),
        onLeave: () => console.log("ScrollTrigger left"),
        onUpdate: (self) => console.log("ScrollTrigger progress:", self.progress)
    }
});

timeline3
    .fromTo(".hand-image-container3", { x: "100%" }, { x: "30%", ease: "power2.out", duration: 1 })
    .to(".textsection3", { opacity: 1, duration: 1 })
    .to(".taube", { opacity: 1, duration: 1 }) 
    .to(".hand-image-container3", { x: "30%", ease: "none", duration: 1 })
    .to(".taube", { opacity: 0, duration: 1 }, "+=0.5") 
    .to(".textsection3", { opacity: 0, duration: 1 }, "+=0.5") 
    .to(".hand-image-container3", { x: "100%", ease: "power2.in", duration: 1 });

console.log("Timeline created:", timeline3);





//Herzhände


gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".herzhand",
    start: "top center",
    end: "center center",
    scrub: true, 
  },
})
  .to(".AmelieHerz", {
    x: "8%", 
    duration: 1,
    ease: "power2.out",
  }, "<")
  .to(".SebiHerz", {
    x: "-8%", 
    duration: 1,
    ease: "power2.out",
  }, "<");


document.addEventListener("DOMContentLoaded", () => {

  gsap.to(".kussmund1", {
    opacity: 1, 
    duration: 1.5, 
    ease: "none",
    scrollTrigger: {
      trigger: ".herzhand", 
      start: "top center", 
      end: "center center", 
      scrub: true, 
    },
  });

  gsap.to(".kussmund2", {
    opacity: 1,
    duration: 1.5, 
    ease: "none", 
    scrollTrigger: {
      trigger: ".herzhand", 
      start: "top center", 
      end: "center center", 
      scrub: true, 
    },
  });

  gsap.to(".kussmund3", {
    opacity: 1, 
    duration: 1.5, 
    ease: "none", 
    scrollTrigger: {
      trigger: ".herzhand", 
      start: "top center", 
      end: "center center", 
      scrub: true, 
    },
  });
});








const lenis = new Lenis({
  lerp: 0.05, 
  wheelMultiplier: 1, 
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);