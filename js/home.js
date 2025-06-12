gsap.registerPlugin(ScrollTrigger);

// Hero Image Zoom & Fade Out
gsap.to(".hero img", {
    scale: 1.1,
    filter: "blur(6px)",
    opacity: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

// Hero Title Float Out
gsap.to(".hero-inner h1", {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "center top",
        scrub: true,
    }
});

// Tagline Float + Fade
gsap.to(".hero-inner p", {
    y: 50,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".hero",
        start: "top 10%",
        end: "bottom top",
        scrub: true,
    }
});

// About Section Bounce In
gsap.from(".about", {
    opacity: 0,
    y: 100,
    duration: 1.4,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 85%",
        toggleActions: "play none none none",
    }

gsap.to(".about", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

});
