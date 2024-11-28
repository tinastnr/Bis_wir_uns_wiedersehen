// Abschnitt 1 Überschrift:















































// Abschnitt 2 Sebi Hand

















































// Abschnitt 3 Amelie Hand

















































// Abschnitt 4 Sebi Hand

















































// Abschnitt 5 Handherz Ende



//animate ".box" from an opacity of 0 to an opacity of 0.5
// Animation mit GSAP
gsap.fromTo(
    ".SebiHerz", 
    { x: "100%", y: 1900 }, // Startposition
    { x: "50%", y: 1900, duration: 1 } // Zielposition und Dauer
);

// ScrollTrigger hinzufügen
let tl = gsap.to(".SebiHerz", {
    scrollTrigger: {
        trigger: ".SebiHerz", // Element, das den Trigger auslöst
        start: "top center", // Startpunkt der Animation
        end: "bottom center", // Optional: Endpunkt
        toggleActions: "play none none none", // Aktionen für Play/Pause/Restart
    },
    x: "50%", // Zielposition
    duration: 1 // Dauer der Animation
});

// Zugriff auf ScrollTrigger-Methoden
tl.scrollTrigger.refresh(); // Aktualisiert den ScrollTrigger
// tl.scrollTrigger.kill(); // Entfernt den ScrollTrigger (optional)





























