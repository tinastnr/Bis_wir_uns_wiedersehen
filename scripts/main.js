// Audio
// Audio und Schallplattenanimation mit GSAP
let spinning = false; // Variable zur Kontrolle der Rotation
let rotationTween; // Speichert die GSAP-Animation

function toggleMusic() {
  const audio = document.getElementById("audio-player");
  const schallplatte = document.querySelector(".Schallplatte-button");

  if (audio.paused) {
    audio.play(); // Startet die Musik
    
    // Falls noch keine Rotation existiert oder sie gestoppt wurde, erstelle eine neue Animation
    if (!spinning) {
      rotationTween = gsap.to(schallplatte, { 
        rotation: "+=360", // Endlosdrehung
        duration: 2, 
        ease: "linear", 
        repeat: -1 // Unendlich wiederholen
      });
      spinning = true;
    }
  } else {
    audio.pause(); // Pausiert die Musik
    
    if (spinning) {
      rotationTween.pause(); // Stoppt die Rotation
      spinning = false;
    }
  }
}







// Abschnitt 1 Überschrift:
















 

































// Abschnitt 2 Sebi Hand

gsap.registerPlugin(ScrollTrigger);

gsap.set(".HandSebiIMG",{
  x: "50vw"
})

// Animation für die Hand
gsap.to(".HandSebiIMG", {
  x: "0",
  opacity: 1, // Hand wird sichtbar
  ease: "power1.inOut",
  pinSpacing: false,
  pin: true,


  scrollTrigger: {
    trigger: ".HandSebi", // Der Bereich, der gescrollt wird
    start: "top center", // Animation beginnt, wenn der Container oben im Viewport ist
    end: "bottom top", // Scrollbereich für die Animation
    scrub: true, // Bindet die Animation an den Scrollfortschritt
    markers: true
    
    
  
  },

});






































// Deine Funktion
function textfunction() {

  // Originaltext in Buchstaben aufteilen
  const textElement = document.getElementById('animated-text-p1');
  const textContent = textElement.textContent; // Originaltext
  textElement.textContent = ''; // Text leeren, um Animation zu starten
  textElement.style.display = "block";

  // Buchstaben einzeln in <span> verpacken
  const splitText = textContent.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span);
    return span;
  });

  // GSAP: Zeichen für Zeichen animieren
  gsap.fromTo(
    splitText,
    { opacity: 0 }, // Start: Buchstaben unsichtbar
    {
      opacity: 1, // Ziel: Buchstaben sichtbar
      duration: 0.03, // Dauer pro Buchstabe
      stagger: 0.03, // Verzögerung zwischen den Buchstaben
      ease: 'power1.out', // Weiche Bewegung
    }
  );

}






gsap.to(".textcontainer", {

  scrollTrigger: {
    trigger: ".textcontainer",  // Element, das den Trigger auslöst
    start: "700px",  // Startpunkt der Animation
    onEnter: textfunction,  // Funktion wird aufgerufen, wenn Trigger aktiv wird
    markers: true,        // Debug-Markierungen anzeigen
  },
});


// Abschnitt 3 Amelie Hand

// gsap.registerPlugin(ScrollTrigger);

// // teils mit hilfe von ChatGPT 21.11.2024, hat uns beim anfang geholfen 

// gsap.to(".HandAmelie", {
//   scrollTrigger: {
//     trigger: ".containerAmelie", // Der Bereich, der gescrollt wird
//     start: "top+=400 top", // Animation beginnt, wenn der Container oben im Viewport ist
//     end: "+=500", // Scrollbereich für die Animation
//     scrub: true, // Bindet die Animation an den Scrollfortschritt
//     pin: true, // Pinnt die Seite während der Animation
//     markers: true
//   },
//   x: "50vw", // Hand bewegt sich von links bis zur Mitte
//   opacity: 1, // Hand wird sichtbar
//   ease: "power1.inOut",
// });
















































// Abschnitt 4 Sebi Hand


















































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

















