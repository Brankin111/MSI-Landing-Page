// CAROUSEL //

$('.carousel').carousel({
    interval: 6000
});


//BANNER ANIMATION //

//        gsap.from('#banner-img', {
//            duration: 3,
//            scale: 3,
//            ease: 'expoScale(1, 3)',
//            delay: .75
//        });


// PRODUCT SECTION SCROLLTRIGGER ANIMATIONS //

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1300px)": function () {

        // MONITOR SECTION ANIMATIONS //
        const monitorsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.new-products-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top bottom',
                end: 'bottom top',
                markers: true
            },
            defaults: {
                duration: 1.5
            }
        });

        monitorsTimeline.from('.new-products-grid', {
            x: '150%',
        });

        // LAPTOP SECTION ANIMATIONS //
        const laptopsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.laptops-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top bottom',
                end: 'bottom top',
                markers: true
            },
            defaults: {
                duration: 1.5
            }
        });

        laptopsTimeline.from('.laptops-grid', {
            x: '-150%',
        });

        // DESKTOP SECTION ANIMATIONS //
        const desktopsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.desktops-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top bottom',
                end: 'bottom top',
                markers: true
            },
            defaults: {
                duration: 1.5
            }
        });

        desktopsTimeline.from('.desktops-grid', {
            x: '150%',
        });

        // MASCOT SECTION ANIMATIONS //
        const carouselTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.carousel',
                toggleActions: 'play reverse play reverse',
                start: 'top bottom',
                markers: true
            },
            defaults: {
                duration: 1.5
            }
        });

        carouselTimeline.from('.carousel', {
            x: '-200%',
        });
    }
});
