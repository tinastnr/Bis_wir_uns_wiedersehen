// Abschnitt 1 Überschrift:

gsap.registerPlugin(ScrollTrigger);

// teils mit hilfe von ChatGPT 21.11.2024, hat uns beim anfang geholfen 

gsap.to(".HandAmelie", {
    scrollTrigger: {
      trigger: ".container", // Der Bereich, der gescrollt wird
      start: "top top", // Animation beginnt, wenn der Container oben im Viewport ist
      end: "+=500", // Scrollbereich für die Animation
      scrub: true, // Bindet die Animation an den Scrollfortschritt
      pin: true, // Pinnt die Seite während der Animation
      markers: true
    },
    x: "50vw", // Hand bewegt sich von links bis zur Mitte
    opacity: 1, // Hand wird sichtbar
    ease: "power1.inOut",
});
















































// Abschnitt 2 Sebi Hand

















































// Abschnitt 3 Amelie Hand

















































// Abschnitt 4 Sebi Hand

















































// Abschnitt 5 Handherz Ende


// GSAP mit ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation
gsap.fromTo(
    ".SebiHerz",
    {
        x: "100%", // Startposition: außerhalb des Bildschirms
        y: 1900, // Vertikale Position
        opacity: 0 // Unsichtbar am Anfang
    },
    {
        x: "50%", // Zielposition
        y: 1900, // Beibehalten der vertikalen Position
        opacity: 1, // Sichtbar
        duration: 1, // Dauer
        ease: "power2.out", // Sanfte Animation
        scrollTrigger: {
            trigger: ".SebiHerz", // Element, das den Trigger auslöst
            start: "top center", // Startpunkt der Animation
            end: "bottom center", // Optional: Endpunkt, wenn es wieder verschwinden soll
            toggleActions: "play reverse none none", // Einblenden beim Scrollen nach unten, Ausblenden beim Scrollen nach oben
            markers: true // Optional: Marker für Debugging
        }
    }
);
























