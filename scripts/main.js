// Abschnitt 1 Überschrift:


















































// Abschnitt 2 Sebi Hand












































// Erscheinende Schrift


// Originaltext in Buchstaben aufteilen
const textElement = document.getElementById('animated-text-p1');
const textContent = textElement.textContent; // Originaltext
textElement.textContent = ''; // Text leeren, um Animation zu starten

// Buchstaben einzeln in <span> verpacken
const splitText = textContent.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span);
    return span;
    textElement.style.fontSize = '2rem'; 
});

// GSAP: Zeichen für Zeichen animieren
gsap.fromTo(
    splitText,
    { opacity: 0 }, // Start: Buchstaben unsichtbar
    {
        opacity: 1, // Ziel: Buchstaben sichtbar
        duration: 0.05, // Dauer pro Buchstabe
        stagger: 0.05, // Verzögerung zwischen den Buchstaben
        ease: 'power1.out', // Weiche Bewegung
    }
);


// Abschnitt 3 Amelie Hand

gsap.registerPlugin(ScrollTrigger);

// teils mit hilfe von ChatGPT 21.11.2024, hat uns beim anfang geholfen 

gsap.to(".HandAmelie", {
    scrollTrigger: {
      trigger: ".container", // Der Bereich, der gescrollt wird
      start: "top+=400 top", // Animation beginnt, wenn der Container oben im Viewport ist
      end: "+=500", // Scrollbereich für die Animation
      scrub: true, // Bindet die Animation an den Scrollfortschritt
      pin: true, // Pinnt die Seite während der Animation
      markers: true
    },
    x: "50vw", // Hand bewegt sich von links bis zur Mitte
    opacity: 1, // Hand wird sichtbar
    ease: "power1.inOut",
});





















































// Abschnitt 4 Sebi Hand

















































// Abschnitt 5 Handherz Ende


// GSAP und ScrollTrigger-Plugin verwenden
gsap.registerPlugin(ScrollTrigger);

// Animation für die Bilder
gsap.timeline({
  scrollTrigger: {
    trigger: ".herzhand", // Der Bereich, bei dem die Animation startet
    start: "top center", // Startpunkt der Animation (Scroller erreicht Mitte des Bildschirms)
    end: "center center", // Endpunkt der Animation
    scrub: true, // Animation synchron mit dem Scrollen
  }
})
  .to(".AmelieHerz", {
    x: "0%", // Linkes Bild bewegt sich in die Zielposition
    duration: 1.5,
    ease: "power2.out",
  })
  .to(".SebiHerz", {
    x: "0%", // Rechtes Bild bewegt sich in die Zielposition
    duration: 1.5,
    ease: "power2.out",
  }, "<"); // Beide Animationen starten gleichzeitig

























