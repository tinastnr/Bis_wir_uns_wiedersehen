// Audio
// Audio
function toggleMusic() {
  const audio = document.getElementById("audio-player");

  if (audio.paused) {
    audio.play(); // Startet die Musik
  } else {
    audio.pause(); // Pausiert die Musik
  }
}






// Abschnitt 1 Überschrift:
















 

































// Abschnitt 2 Sebi Hand

gsap.registerPlugin(ScrollTrigger);

console.log("ScrollTrigger registered");

gsap.set(".textsection", {opacity: 0});

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".handsection",
        start: "top top", // Adjusted start position
        end: "bottom top", // Adjusted end position
        scrub: true,
        pin: true, // Keeps it in place while scrolling
        markers: true,
        onEnter: () => console.log("ScrollTrigger entered"),
        onLeave: () => console.log("ScrollTrigger left"),
        onUpdate: (self) => console.log("ScrollTrigger progress:", self.progress)
    }
});

timeline
    .fromTo(".hand-image-container", { x: "100%" }, { x: "30%", ease: "power2.out", duration: 1 })

    .to(".textsection", { opacity: 1, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".rose", { opacity: 1, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".hand-image-container", { x: "30%", ease: "none", duration: 1 })
    .to(".rose", { opacity: 0, duration: 1 }, "+=0.5") // Bleibt etwas länger sichtbar
    .to(".textsection", { opacity: 0, duration: 1 }, "+=0.5") // Bleibt etwas länger sichtbar
    .to(".hand-image-container", { x: "100%", ease: "power2.in", duration: 1 });

console.log("Timeline created:", timeline);























// Abschnitt 3 Amelie Hand

gsap.registerPlugin(ScrollTrigger);

console.log("ScrollTrigger registered");

gsap.set(".textsection2", {opacity: 0});

const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".handsection2",
        start: "top top", // Adjusted start position
        end: "bottom top", // Adjusted end position
        scrub: true,
        pin: true, // Keeps it in place while scrolling
        markers: true,
        onEnter: () => console.log("ScrollTrigger entered"),
        onLeave: () => console.log("ScrollTrigger left"),
        onUpdate: (self) => console.log("ScrollTrigger progress:", self.progress)
    }
});

timeline2
    .fromTo(".hand-image-container2", { x: "-100%" }, { x: "-40%", ease: "power2.out", duration: 1 })
    .to(".textsection2", { opacity: 1, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".mond", { opacity: 1, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".hand-image-container2", { x: "-40%", ease: "none", duration: 1 })
    .to(".mond", { opacity: 0, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".textsection2", { opacity: 0, duration: 1 }, "+=0.5") // Bleibt etwas länger sichtbar
    .to(".hand-image-container2", { x: "-100%", ease: "power2.in", duration: 1 });

console.log("Timeline created:", timeline2);









































// Abschnitt 4 Sebi Hand


gsap.registerPlugin(ScrollTrigger);

console.log("ScrollTrigger registered");

gsap.set(".textsection3", {opacity: 0});

const timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".handsection3",
        start: "top top", // Adjusted start position
        end: "bottom top", // Adjusted end position
        scrub: true,
        pin: true, // Keeps it in place while scrolling
        markers: true,
        onEnter: () => console.log("ScrollTrigger entered"),
        onLeave: () => console.log("ScrollTrigger left"),
        onUpdate: (self) => console.log("ScrollTrigger progress:", self.progress)
    }
});

timeline3
    .fromTo(".hand-image-container3", { x: "100%" }, { x: "30%", ease: "power2.out", duration: 1 })
    .to(".textsection3", { opacity: 1, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".taube", { opacity: 1, duration: 1 }) // Längere Dauer für bessere Sichtbarkeit
    .to(".hand-image-container3", { x: "30%", ease: "none", duration: 1 })
    .to(".taube", { opacity: 0, duration: 1 }, "+=0.5") // Bleibt etwas länger sichtbar
    .to(".textsection3", { opacity: 0, duration: 1 }, "+=0.5") // Bleibt etwas länger sichtbar
    .to(".hand-image-container3", { x: "100%", ease: "power2.in", duration: 1 });

console.log("Timeline created:", timeline3);
















































// GSAP und ScrollTrigger-Plugin verwenden
gsap.registerPlugin(ScrollTrigger);

// Animation für die Hände (Herz-Animation)
gsap.timeline({
  scrollTrigger: {
    trigger: ".herzhand",
    start: "top center",
    end: "center center",
    scrub: true, // Animationsfortschritt gekoppelt an den Scroll-Fortschritt
  },
})
  .to(".AmelieHerz", {
    x: "8%", // Bewegung nach rechts
    duration: 5.5,
    ease: "power2.out",
  }, "<")
  .to(".SebiHerz", {
    x: "-8%", // Bewegung nach links
    duration: 5.5,
    ease: "power2.out",
  }, "<");

// Warten, bis die DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
  // ScrollTrigger für den ersten Kussmund
  gsap.to(".kussmund1", {
    opacity: 1, // Sichtbar machen
    duration: 1.5, // Animationsdauer
    ease: "none", // Keine zusätzliche Beschleunigung
    scrollTrigger: {
      trigger: ".herzhand", // Gleicher Trigger wie bei den Händen
      start: "top center", // Startpunkt
      end: "center center", // Endpunkt
      scrub: true, // Abhängig vom Scroll-Fortschritt
    },
  });

  // ScrollTrigger für den zweiten Kussmund
  gsap.to(".kussmund2", {
    opacity: 1, // Sichtbar machen
    duration: 1.5, // Animationsdauer
    ease: "none", // Keine zusätzliche Beschleunigung
    scrollTrigger: {
      trigger: ".herzhand", // Gleicher Trigger wie bei den Händen
      start: "top center", // Startpunkt
      end: "center center", // Endpunkt
      scrub: true, // Abhängig vom Scroll-Fortschritt
    },
  });

  gsap.to(".kussmund3", {
    opacity: 1, // Sichtbar machen
    duration: 1.5, // Animationsdauer
    ease: "none", // Keine zusätzliche Beschleunigung
    scrollTrigger: {
      trigger: ".herzhand", // Gleicher Trigger wie bei den Händen
      start: "top center", // Startpunkt
      end: "center center", // Endpunkt
      scrub: true, // Abhängig vom Scroll-Fortschritt
    },
  });
});


















const lenis = new Lenis({
  // Valeur entre 0 et 1
  // Valeur par défaut : 0,1
  // Plus la valeur est faible, plus le scroll sera fluide
  lerp: 0.05, 
  // Valeur par défaut : 1
  // Plus la valeur est haute, plus le défilement sera rapide 
  wheelMultiplier: 1, 
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);