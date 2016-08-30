jQuery(document).ready(function ($) {
    
    /* отступ при наведении на последний элемент горизонтального меню */
    
    $('.last-item').mouseover(function () {
        $('.top-menu-buttons').addClass('alt');   
    });
    $('.last-item').mouseout(function () {
        $('.top-menu-buttons').removeClass('alt');   
    });
    
    /* анимация прозрачности изображений портфолио */
    
    $('.img-a').css('opacity', 0.5);
    $('.img-a').hover(function () {
            $(this).fadeTo ('normal', 1);
    },
        function () {
            $(this).fadeTo ('normal', 0.5);              
    });
    
      /* анимация прозрачности изображений соц. ссылок подвала */
    
    $('.footer-social a').css('opacity', 0.8);
    $('.footer-social a').hover(function () {
            $(this).fadeTo ('fast', 1);
    },
        function () {
            $(this).fadeTo ('fast', 0.8);              
    });
    

    
});