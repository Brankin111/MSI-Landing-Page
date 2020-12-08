// CAROUSEL //

$('.carousel').carousel({
    interval: 6000
});


//BANNER ANIMATION //

gsap.from('#banner-img', {
    duration: 3.5,
    opacity: 0,
    delay: 1
});

// PRODUCT SECTION SCROLLTRIGGER ANIMATIONS //
//***** BROKEN :( *****//

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1300px)": function () {

        // MONITOR SECTION ANIMATIONS //
        let monitorsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.new-products-grid',
                toggleActions: 'play reverse play reset',
                markers: true,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 4
            },
            defaults: {
                //duration: 1.5
            }
        });

        monitorsTimeline.from('.new-products-grid', {
            x: innerWidth * 1
        });

        // LAPTOP SECTION ANIMATIONS //
        let laptopsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.laptops-grid',
                toggleActions: 'play reverse play reset',
                markers: true,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 4
            },
            defaults: {
                //duration: 1.5
            }
        });

        laptopsTimeline.from('.laptops-grid', {
            x: innerWidth * -1
        });

        // DESKTOP SECTION ANIMATIONS //
        let desktopsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.desktops-grid',
                toggleActions: 'play reverse play reverse',
                markers: true,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 4
            },
            defaults: {
                //duration: 1.5
            }
        });

        desktopsTimeline.from('.desktops-grid', {
            x: innerWidth * 1
        });

        // MASCOT SECTION ANIMATIONS //
        //        const carouselTimeline = gsap.timeline({
        //            scrollTrigger: {
        //                trigger: '.carousel',
        //                toggleActions: 'play reverse play reverse',
        //                markers: true
        //            },
        //            defaults: {
        //                duration: 1.5,
        //                start: 'top bottom',
        //            }
        //        });
        //
        //        carouselTimeline.from('.carousel', {
        //            x: '-200%',
        //        });
    }
});
