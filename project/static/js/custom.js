$(window).load(function() {
    "use strict";

    /*=========================================================================
     Preloader
     =========================================================================*/
    $("#preloader").delay(350).fadeOut('slow');

    /*=========================================================================
     Wow Initialize
     =========================================================================*/
    // Here will be the WoW Js implementation.
    setTimeout(function(){new WOW().init();}, 0);

    /*=========================================================================
     Portfolio Filter
     =========================================================================*/
    $('.filter-navigation').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.filter-navigation').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
        });
    });

    var $grid = $('.portfolio-filter').isotope({
        // options
        itemSelector: '.portfolio-item',
        masonry: {
            // use element for option
            columnWidth: '.portfolio-item'
        }
    });

    /*=========================================================================
     Masonry JS
     =========================================================================*/
    $('.blog-container').masonry({
        itemSelector: '.blog-post'
    });

    $('.gallery-container').masonry({
        itemSelector: '.gallery-item'
    });
});

/*=========================================================================
 Home Slider
 =========================================================================*/
$(document).ready(function() {
    "use strict";

    $('.hero-slide').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });

    $('.hero-slide').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    $('.hero-slide').slick({
        dots: true,
        fade: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: false,
        cssEase: 'ease-in-out'
    });

    function doAnimations(elements) {
        "use strict";
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});

$(function(){
    "use strict";

    /*=========================================================================
     Parallax
     =========================================================================*/
    (function(){
        "use strict";

        var parallax = document.querySelectorAll(".parallax"),
            speed = 0.1;

        window.onscroll = function(){
            [].slice.call(parallax).forEach(function(el,i){

                var windowYOffset = window.pageYOffset,
                    elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

                el.style.backgroundPosition = elBackgrounPos;

            });
        };

    })();

    /*=========================================================================
     Portfolio Widget
     =========================================================================*/
    $(".portfolio-widget").sliphover({
        target: '.portfolio-widget-item',
        caption: 'data-caption'
    });

    /*=========================================================================
     Scroll to Top
     =========================================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 800);
    });

    /*=========================================================================
     Slick Slider
     =========================================================================*/
    $('.project-slider').slick({
        dots: true
    });

    $(".sticky-info").sticky({topSpacing:10});

    /*=========================================================================
     Sidebar & Search Toggle
     =========================================================================*/
    $(".main-sidebar .close").on( 'click', function() {
        $(".main-sidebar").removeClass("open");
    });

    $(".navicon").on( 'click', function() {
        $(".main-sidebar").addClass("open");
    });

    $(".search-icon").on( 'click', function() {
        $(".search-form").toggleClass("open");
    });

    /*=========================================================================
     Magnific Popup Functions
     =========================================================================*/
    $('.gallery-img').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    $('.video-icon').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '</div>',

            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',

                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }

            },

            srcAction: 'iframe_src',
        }
    });

});