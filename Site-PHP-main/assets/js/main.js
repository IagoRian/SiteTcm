;
(function($) {
    "use strict";

    $(document).ready(function() {

        /*-------------------------------
            Navbar fixada
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }

        $(document).on('click', '.navbar-nav li a', function(e) {
            var anchor = $(this).attr('href');
            var link = anchor.slice(0, 1);
            if ('#' == link) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
                $(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
            }

        });


        /*--------------------
            wow js init/frame
        ---------------------*/
        new WOW().init();



        /*------------------
            back to top (voltar para o inicio)
        ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 1000
        });
        // MouseEvent
        var $mosueOverEffect = $('.outer');
        if ($mosueOverEffect.length > 0) {
            VanillaTilt.init(document.querySelectorAll(".outer"), {
                max: 80,
                speed: 400,
                perspective: 200,
                scale: 1.2,
                reverse: true,
            });
        }


        // Clinet - active
        $('.client-active-area').owlCarousel({
                loop: true,
                items: 4,
                nav: true,
                margin: 100,
                dots: false,
                navText: ['<span data-icon="&#x23;"></span>', '<span data-icon="&#x24;"></span>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            })
            /*---------------------------
                     carousel
            ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        /*---------------------------
                carousel
        ---------------------------*/
        var $TestimonialCarousel = $('.testimonial-carousel-two');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }



    });



    var lastScrollTop = '';

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        // Sticky-Memu
        if ($(window).width() > 991) {
            StickyMenu();
        }



    });


    $(window).on('resize', function() {

        if ($(window).width() < 991) {
            navbarFix()
        }
    });


    $(window).on('load', function() {


        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);


        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

    });

    function navbarFix() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function(e) {
            e.preventDefault();
        })
    }

    function StickyMenu() {

        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            mainMenuTop.addClass('nav-fixed');
        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
    }


})(jQuery);