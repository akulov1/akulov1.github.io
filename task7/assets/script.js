
// создание слайдера
function createSlick(number){
    $('.slider').not('.slick-initialized').slick({
        arrows:true,
		dots:true,
		slidesToShow:number,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
    });
}

// вычисление количества картинок для показа
function calculateNumberOfSlidesToShow(){
    var sliderWidth = $('.slider').width();
    var slidesToShow = 0;
    switch (true) {
        case (sliderWidth < 767):
            slidesToShow = 1;
            break;
        case (sliderWidth < 991):
            slidesToShow = 2;
            break;
        case (sliderWidth < 1199):
            slidesToShow = 3;
            break;
        case (sliderWidth > 1200):
            slidesToShow = 3;
            break;
    }

    return slidesToShow;
}

// перезагружаем слайдер по изменене размера окна
function reloadSlick () {
    $('.slider').slick('unslick');
    slidesToShow = calculateNumberOfSlidesToShow();
    createSlick(slidesToShow);
}

// вызываем каждый раз по ресайзу
jQuery(window).on("resize", reloadSlick);



jQuery(document).ready(function () {

    // инициализация слайдера по загрузке страницы
    if ($('.slider').length) {
        setTimeout(function () {
            slidesToShow = calculateNumberOfSlidesToShow();
            createSlick(slidesToShow);
        }, 300);
    }


});