// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     autoplay: true,
//     lazyLoad: true,
//     center: true,
//     callbacks: true,
//     animateOut: true,
//     autoplayTimeout: 5000,
//     lazyLoadEager: 0,
//     stagePadding: 0,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: true
//         },
//         600: {
//             items: 3,
//             nav: false
//         },
//         1000: {
//             items: 5,
//             nav: true,
//             loop: false
//         }
//     }
// });


$('.owl-one').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 4000,
    animateOut: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        320: {
            items: 1,
            dots: true

        },
        600: {
            items: 1,
            dots: true
        },
        768: {
            items: 1,
            dots: true
        },
        950: {
            items: 1,
            dots: true
        },
        1000: {
            items: 1,
            dots: true
        },
        1200: {
            items: 1,
            dots: true
        },
        2000: {
            items: 1,
            dots: true
        }

    }
});


$('.owl-two').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


$('.owl-three').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});