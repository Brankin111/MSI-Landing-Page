// GSAP ANIMATIONS //

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

    "(min-width: 1400px)": function () {

        gsap.from('#banner-img', {
            duration: 3,
            scale: 3,
            ease: 'expoScale(1, 3)',
            delay: .75
        });

        gsap.from('.new-products-grid', {
            scrollTrigger: {
                trigger: '.new-products-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top center',
                end: '+=1100px center',
                //markers: true,
            },
            duration: 1.5,
            x: '150%',
            delay: .01,
        });

        gsap.from('.laptops-grid', {
            scrollTrigger: {
                trigger: '.laptops-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top center',
                end: '+=1100px center',
                //markers: true,
            },
            duration: 1.5,
            x: '-150%',
            delay: .01,
        });

        gsap.from('.desktops-grid', {
            scrollTrigger: {
                trigger: '.desktops-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top center',
                end: '+=1100px center',
                //markers: true,
            },
            duration: 1.5,
            x: '150%',
            delay: .01,
        });

        gsap.from('.carousel', {
            scrollTrigger: {
                trigger: '.carousel',
                toggleActions: 'play reverse play reverse',
                start: 'top center',
                //markers: true,
            },
            duration: 1.5,
            x: '-200%',
            delay: .01,
        });
    }
});

// CAROUSEL //

$('.carousel').carousel({
    interval: 6000
});
