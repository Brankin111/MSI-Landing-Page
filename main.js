// CAROUSEL //

$('.carousel').carousel({
    interval: 6000
});


//BANNER ANIMATION //

gsap.from('#banner-img', {
    duration: 1,
    opacity: 0,
    delay: .1
});


// PRODUCT SECTION SCROLLTRIGGER ANIMATIONS //

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1300px)": function () {


        // MONITOR SECTION ANIMATIONS //
        var monitorsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.new-products-grid',
                toggleActions: 'play reverse play reset',
                start: 'top bottom',
                end: 'top center',
                scrub: 5
            }
        });

        monitorsTimeline.from('.new-products-grid', {
            x: innerWidth * 1
        });


        // LAPTOP SECTION ANIMATIONS //
        var laptopsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.laptops-grid',
                toggleActions: 'play reverse play reset',
                start: 'top bottom',
                end: 'top center',
                scrub: 5
            }
        });

        laptopsTimeline.from('.laptops-grid', {
            x: innerWidth * -1
        });


        // DESKTOP SECTION ANIMATIONS //
        var desktopsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.desktops-grid',
                toggleActions: 'play reverse play reverse',
                start: 'top bottom',
                end: 'top center',
                scrub: 5
            }
        });

        desktopsTimeline.from('.desktops-grid', {
            x: innerWidth * 1
        });
    }
});

// PAGE REFRESH IMAGE RELOAD
$(document).ready(function(){
    $(window).resize(function(){
        window.location.href = window.location.href;
    });  
});