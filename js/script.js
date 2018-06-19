//Scripts

//Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

//Carousel responsive
$(function () {

    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 991) {
                width = width / 4 - 10;
            } else if (width >= 767) {
                width = width / 3 - 10;
            } else if (width >= 549) {
                width = width / 2 - 10;
            } else if (width >= 300) {
                width = width - 10;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular',
            animation: {
                duration: 1000,
                speed: 1000,
                easing: 'linear',
                complete: function () {
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 10000,
            target: '+=1',
            autostart: true,
        })
        .on('mouseover', function (e) {
            $(this).jcarouselAutoscroll('stop');
        })
        .on('mouseout', function (e) {
            $(this).jcarouselAutoscroll('start');
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

//Equal height
    $(function () {
        $('.item').matchHeight(
            {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
        );
        $('.item h4').matchHeight(
            {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
        );
    });

//Mobile Menu
    $('.icon-menu.icon-menu-top').click(function () {
        $('.menu.icon-menu-top').animate({
            left: '0px'
        }, 200);

        $('body').animate({
            left: '285px'
        }, 200);
    });

    $('.icon-menu.icon-menu-bottom').click(function () {
        $('.menu.icon-menu-bottom').animate({
            left: '0px'
        }, 200);

        $('body').animate({
            left: '250px'
        }, 200);
    });

    $('.icon-close').click(function () {
        $('.menu').animate({
            left: '-250px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });

    $(".plus").click(function (e) {
        e.preventDefault();
        $(this).next().show();
    });

});
