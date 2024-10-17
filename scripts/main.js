gsap.registerPlugin(ScrollTrigger);


gsap.to('.miniBiker', {
    x: '100vw',
   
    scrollTrigger: {
        markers: true,
        start: 'top center',
        end: 'bottom 30%',
        trigger: '.miniBiker',
        scrub: 10,
        pin: true,
    }
}


);