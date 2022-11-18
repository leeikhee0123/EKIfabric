$(function () {
    $('.btn').hover(function () {
        $(this).stop(true).animate({
            opacity:1
        },200);
    }, function () {
        $(this).stop(true).animate({
            opacity:0.5
        },200);
    });

    $(function () {
        $('.slider_panel').append($('.slider_image').first().clone());
        $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
        var index=1;
        moveSlider(index);
        
        $('.left_control').click(function () {
            if(index > 1) {
                index--;
                moveSlider(index);
            }else {
                $('.slider_panel').css('left',-7700)
                index=10;
                moveSlider(index);
            }
        });
        $('.right_control').click(function () {
            if(index < 10) {
                index++;
                moveSlider(index);
            }else {
                $('.slider_panel').css('left',0);
                index=1;
                moveSlider(index);
            }
        });
        // 이미지 슬라이드 구현
        function moveSlider(index) {
            $('.slider_panel').stop(true).animate({
                left:-(index*700)
            },'slow');
        };
    });

});