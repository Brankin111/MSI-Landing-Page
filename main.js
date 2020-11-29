// HEADER ANIMATION //

$('.banner')
    .hide()
    .slideDown(2500);


// CAROUSEL //

$('.carousel').carousel({
    interval: 6000
});


// GSAP ANIMATIONS //

gsap.from('.new-products-grid', {
    scrollTrigger: {
        trigger: '.new-products-grid',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
    },
    duration: 1.5,
    x: '150%',
    delay: .01,
})

gsap.from('.laptops-grid', {
    scrollTrigger: {
        trigger: '.laptops-grid',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
    },
    duration: 1.5,
    x: '-150%',
    delay: .01,
})

gsap.from('.desktops-grid', {
    scrollTrigger: {
        trigger: '.desktops-grid',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
    },
    duration: 1.5,
    x: '150%',
    delay: .01,
})

gsap.from('.carousel', {
    scrollTrigger: {
        trigger: '.carousel',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
    },
    duration: 1.5,
    x: '-200%',
    delay: .01,
})
