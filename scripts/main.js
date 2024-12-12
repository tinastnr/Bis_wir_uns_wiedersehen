// Abschnitt 1 Überschrift:


















































// Abschnitt 2 Sebi Hand

















































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
        x: "80%", // Zielposition
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



gsap.fromTo(
    ".AmelieHerz",
    {
        x: "-120%", // Startposition: Außerhalb des Bildschirms links
        y: "1900", // Beibehalten der vertikalen Position
        opacity: 0 // Unsichtbar am Anfang
    },
    {
        x: "-30%", // Zielposition: 20% vom linken Rand
        y: "1900", // Beibehalten der vertikalen Position
        opacity: 1, // Sichtbar
        duration: 1.5, // Dauer der Animation
        ease: "power2.out", // Sanfte Animation
        scrollTrigger: {
            trigger: ".AmelieHerz", // Element, das den Trigger auslöst
            start: "top center", // Animation startet, wenn das Element in der Mitte des Viewports ist
            toggleActions: "play reverse none none", // Spielt Animation vorwärts und rückwärts ab
            markers: true // Debugging-Marker (optional)
        }
    }
);






















