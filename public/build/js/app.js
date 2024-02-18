$(() => {
    // константы
    const preloader = $('.preloader-container');
    const menu = $('.menu');
    const menuButton = $('[menu-open]');
    const menuToggle = $('[menu-toggle]');
    const menuClose = $('[menu-close]');

    // переменные
    var hint = $('.hint');
    var tooltip = $('[data-tooltip-id]');
    var tooltipButton = $('[data-tooltip-toggle]');
    var buttonCopy = $('[data-form-copy]');
    var tabs = $('[data-tab-id]');

    // preloader
    if (preloader.length) {
        setTimeout(() => {
            preloader.animate({
                opacity: 0,
                visibility: 'hidden'
            }, 500);
            setTimeout(() => {
                preloader.remove();
            }, 500)
        }, 1000);
    }

    // menu
    if (menu.length) {
        function showMenu() {
            $('body').addClass('menu-is-open');
            menu.addClass('show');
        };

        function hideMenu() {
            $('body').removeClass('menu-is-open');
            menu.removeClass('show');
        };

        function toggleMenu() {
            $('body').toggleClass('menu-is-open');
            menu.toggleClass('show');
        }

        menuButton.on('click', showMenu);
        menuClose.on('click', hideMenu);
        menuToggle.on('click', toggleMenu);
    }

    // tooltip
    if (tooltip.length) {

        var tooltipPosition = () => {
            if (tooltipButton.attr('data-tooltip-position') == 'bottom center') {
                tooltip.attr('data-tooltip-pos', 'bottom center');
                tooltip.css('top', tooltipButton.offset().top + (tooltipButton.height() * 2));
                tooltip.css('left', tooltipButton.offset().left + (tooltipButton.width() / 2));
            }

            if (tooltipButton.attr('data-tooltip-position') == 'top center') {
                tooltip.attr('data-tooltip-pos', 'top center');
                tooltip.css('bottom', (tooltipButton.offset().top + (tooltipButton.height() * 2)) * -1);
                tooltip.css('left', tooltipButton.offset().left + (tooltipButton.width() / 2));
            }
        }


        function tooltipShow() {
            tooltip.addClass('show');
            tooltip.show();
        }

        function tooltipHide() {
            tooltip.removeClass('show');
            tooltip.hide();
        }

        function tooltipToggle() {
            if (tooltip.hasClass('show')) {
                tooltipHide();
            } else {
                tooltipShow();
            }
        }

        if (tooltip.attr('data-tooltip-id') == tooltipButton.attr('data-tooltip-toggle')) {
            tooltipPosition();

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                tooltipButton.on('touchstart', tooltipToggle);
            } else {
                tooltipButton.on('mouseenter', tooltipShow);
                tooltipButton.on('mouseleave', tooltipHide);
            }

            $(window).on('resize', function () {
                tooltipPosition();

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    tooltipButton.on('touchstart', tooltipToggle);
                } else {
                    tooltipButton.on('mouseenter', tooltipShow);
                    tooltipButton.on('mouseleave', tooltipHide);
                }
            })
        }
    }

    // копирование текста в буфер обмена
    if (buttonCopy.length) {
        var formCopy = buttonCopy.parents().find('input').attr('id', buttonCopy.attr('data-form-copy'));

        buttonCopy.on('click', function () {
            formCopy.select();
            document.execCommand("copy");

            if (buttonCopy.attr('data-form-copy') == hint.attr('data-hint-id')) {
                hint.text(hint.attr('data-hint-text'));
                hint.addClass('show');
                formCopy.blur();
                setTimeout(() => {
                    hint.removeClass('show');
                }, 2000);
            }
        });
    }

    // вкладки
    if (tabs.length) {
        var switcher = $(document).find('[data-tab-toggle]');

        switcher.on('click', (e) => {
            switcher.each((i, item) => {
                $(item).removeClass('active');
            });

            $(e.currentTarget).addClass('active');

            tabs.each((i, tab) => {
                $(tab).removeClass('active');

                if ($(tab).attr('data-tab-id') == $(e.currentTarget).attr('data-tab-toggle')) {
                    $(tab).addClass('active');
                }
            });
        });
    }

    // анимация на главном экране с кубом
    if ($('#welcome-animation').length) {
        const animation = lottie.loadAnimation({
            container: document.getElementById('welcome-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/animation/welcome.json'
        });
    }

    // анимация на экране проверки
    if ($('#check-animation').length) {
        const animation = lottie.loadAnimation({
            container: document.getElementById('check-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/animation/check.json'
        });
    }

    // анимация на экране участник розыгрыша
    if ($('#success-animation').length) {
        const animation = lottie.loadAnimation({
            container: document.getElementById('success-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/animation/success.json'
        });
    }

    // анимация на экране не выполнены все условия
    if ($('#error-animation').length) {
        const animation = lottie.loadAnimation({
            container: document.getElementById('error-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/animation/error.json'
        });
    }

    // анимация на экране уже участник розыгрыша
    if ($('#invalid-animation').length) {
        const animation = lottie.loadAnimation({
            container: document.getElementById('invalid-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/animation/invalid.json'
        });
    }

    // анимация на экране на пути в ЛК
    if ($('#finish-animation').length) {
        const animation = lottie.loadAnimation({
            container: document.getElementById('finish-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/json/animation/finish.json'
        });
    }

    // Слайдер победителей
    if ($('#swiperWinner').length) {
        var swiperWinner = new Swiper('#swiperWinner', {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'horizontal',
            loop: false,
            allowTouchMove: true,
            grabCursor: true,
            init: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    if (swiperWinner.realIndex == 0) {
                        $('body').css('background-image', '');
                        $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(97, 95, 47),rgb(229, 183, 60) 100%)');
                    } else if (swiperWinner.realIndex == 1) {
                        $('body').css('background-image', '');
                        $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(180, 180, 180),rgb(88, 93, 106) 100%)');
                    } else if (swiperWinner.realIndex == 2) {
                        $('body').css('background-image', '');
                        $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(147, 113, 62),rgb(117, 60, 12) 100%)');
                    } else {
                        $('body').css('background-image', '');
                        $('body').css('background-image', 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)');
                    }
                },
            },
        });

        setTimeout(function () {
            swiperWinner.update();
            if (swiperWinner.activeIndex == 0) {
                $('body').css('background-image', '');
                $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(97, 95, 47),rgb(229, 183, 60) 100%)');
            } else if (swiperWinner.activeIndex == 1) {
                $('body').css('background-image', '');
                $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(180, 180, 180),rgb(88, 93, 106) 100%)');
            } else if (swiperWinner.activeIndex == 2) {
                $('body').css('background-image', '');
                $('body').css('background-image', 'radial-gradient(89.00% 48.00% at 50% 8%,rgb(147, 113, 62),rgb(117, 60, 12) 100%)');
            } else {
                $('body').css('background-image', '');
                $('body').css('background-image', 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)');
            }
        }, 500);
    }
})