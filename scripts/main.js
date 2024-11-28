// Abschnitt 1 Überschrift:















































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
        duration: 1.5, // Dauer
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
























