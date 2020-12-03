// CAROUSEL //

$('.carousel').carousel({
    interval: 6000
});


//BANNER ANIMATION //

gsap.from('#banner-img', {
    duration: 3,
    scale: 3,
    ease: 'expoScale(1, 3)',
    delay: .75
});

// PRODUCT SECTION SCROLLTRIGGER ANIMATIONS //
//***** BROKEN :( *****//

//gsap.registerPlugin(ScrollTrigger);
//
//ScrollTrigger.matchMedia({
//    "(min-width: 1300px)": function () {
//
//        // MONITOR SECTION ANIMATIONS //
//        const monitorsTimeline = gsap.timeline({
//            scrollTrigger: {
//                trigger: '.new-products-grid',
//                toggleActions: 'play reverse play reverse',
//                markers: true
//            },
//            defaults: {
//                duration: 1.5,
//                start: 'top bottom',
//                end: 'bottom top'
//            }
//        });
//
//        monitorsTimeline.from('.new-products-grid', {
//            x: '150%',
//        });
//
//        // LAPTOP SECTION ANIMATIONS //
//        const laptopsTimeline = gsap.timeline({
//            scrollTrigger: {
//                trigger: '.laptops-grid',
//                toggleActions: 'play reverse play reverse',
//                markers: true
//            },
//            defaults: {
//                duration: 1.5,
//                start: 'top bottom',
//                end: 'bottom top',
//            }
//        });
//
//        laptopsTimeline.from('.laptops-grid', {
//            x: '-150%',
//        });
//
//        // DESKTOP SECTION ANIMATIONS //
//        const desktopsTimeline = gsap.timeline({
//            scrollTrigger: {
//                trigger: '.desktops-grid',
//                toggleActions: 'play reverse play reverse',
//                markers: true
//            },
//            defaults: {
//                duration: 1.5,
//                start: 'top bottom',
//                end: 'bottom top',
//            }
//        });
//
//        desktopsTimeline.from('.desktops-grid', {
//            x: '150%',
//        });
//
//        // MASCOT SECTION ANIMATIONS //
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
//    }
//});
