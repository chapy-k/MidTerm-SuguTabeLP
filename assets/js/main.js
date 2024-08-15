'use strict';

{

    // menu
    $(function () {
        $('.header__btn').on('click', function () {
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function () {
            $('.nav').removeClass('active');
        });
    });

    // header__btn
    var elements = document.querySelectorAll('.header__btn');
    elements.forEach(function (element) {
        element.addEventListener('click', function () {
            this.classList.toggle('active');
            this.classList.toggle('fixed');
        });
    });

    // slick
    // windowsサイズに応じて変更
    $(function () {
        function initializeSlider() {
            if (window.outerWidth < 890) {
                if (!$('.slider--farmars').hasClass('slick-initialized')) {
                    $('.slider--farmars').slick({
                        arrows: true, // 前・次のボタンを表示する
                        dots: true, // ドットナビゲーションを表示する
                    });
                }
                if (!$('.slider--voice').hasClass('slick-initialized')) {
                    $('.slider--voice').slick({
                        arrows: true, // 前・次のボタンを表示する
                        dots: true, // ドットナビゲーションを表示する
                    });
                }
            } else {
                if ($('.slider--farmars').hasClass('slick-initialized')) {
                    $('.slider--farmars').slick('unslick');
                }
                if ($('.slider--voice').hasClass('slick-initialized')) {
                    $('.slider--voice').slick('unslick');
                }
            }
        }

        // slickの有効化もしくは無効化
        initializeSlider();

        // 画面幅の変更をチェック
        $(window).resize(function () {
            console.log('minmin');
            initializeSlider();
        });
    });

    // scrollTop
    $('.topBtn').on('click', function () {
        const position = 0;
        const speed = 600;
        $('html,body').animate({
            scrollTop: position
        }, speed);
    });

    // scrollTopをmainImgでfade out
    document.addEventListener('DOMContentLoaded', function () {
        const fadeButton = document.querySelector('.topBtn');
        const triggerElement = document.querySelector('.mainImg__container');

        function checkVisibility() {
            const rect = triggerElement.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                fadeButton.classList.add('hidden');
            } else {
                fadeButton.classList.remove('hidden');
            }
        }

        window.addEventListener('scroll', checkVisibility);
    });

    // fixed__trialBtnをfooterでfade out
    document.addEventListener('DOMContentLoaded', function () {
        const fadeButton = document.querySelector('.fixed__trialBtn');
        const triggerElement = document.querySelector('.trial__btn--trigger');

        function checkVisibility() {
            const rect = triggerElement.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                fadeButton.classList.add('hidden');
            } else {
                fadeButton.classList.remove('hidden');
            }
        }

        window.addEventListener('scroll', checkVisibility);
    });

    //  fade in delayあり
    document.addEventListener("scroll", function () {
        const fadeElements = document.querySelectorAll(".fade-in");

        fadeElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setTimeout(function () {
                    element.classList.add("visible");
                }, 500); // 100ミリ秒の遅延を追加
            }
        });
    });

    //  fade in delayあり
    document.addEventListener("scroll", function () {
        const fadeElements = document.querySelectorAll(".fade-in-nodelay");

        fadeElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setTimeout(function () {
                    element.classList.add("visible");
                }, 0); // 100ミリ秒の遅延を追加
            }
        });
    });

}