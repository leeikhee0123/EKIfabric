
// $(function () {
//     $('.board h2 a').hover(function () {
//         $(this).css('background','linear-gradient(to bottom, #000 0%, #6667ab 100%)');
//     },function () {
//         $(this).css('background','linear-gradient(to bottom, #fff 0%, #6667ab 100%)');
//     });
// });
$(function () {
    let name=['#BirdChild','#FlowerGarden','#Bourgeoisie','#InGyeongbokgung','#MysticArchtecturalCraft','#Thenandnowt','#TwinRose'];
    let index;
    // 이미지 슬라이드 다운
    $('.patternTMI').click(function () {
        index=$(this).index();
        imgSlideDown(index, this);
    });
    function imgSlideDown(index) {
        $('.board section ul').css('display','none');
        $(name[index]).find('ul').slideDown(2000);
        $('.board h2 a').css({
            color: '#000',
            border: '1px solid #0e1a3b',
            background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
        });
        $(name[index]).find('h2>a').css({
            color: '#fff',
            border: '1px solid #6667ab',
            background: '#000'
        });
        $(name[index]).css({zIndex:10});
    }
    // $('.board #BirdChild').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#BirdChild ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#BirdChild h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
    // $('.board #FlowerGarden').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#FlowerGarden ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#FlowerGarden h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
    // $('.board #Bourgeoisie').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#Bourgeoisie ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#Bourgeoisie h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
    // $('.board #InGyeongbokgung').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#InGyeongbokgung ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#InGyeongbokgung h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
    // $('.board #MysticArchtecturalCraft').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#MysticArchtecturalCraft ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#MysticArchtecturalCraft h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
    // $('.board #Thenandnowt').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#Thenandnowt ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#Thenandnowt h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
    // $('.board #TwinRose').click(function () {
    //     $('.board section ul').css('display','none');
    //     $('#TwinRose ul').slideDown(2000);
    //     $('.board h2 a').css({
    //         color: '#000',
    //         border: '1px solid #0e1a3b',
    //         background: 'linear-gradient(to bottom, #fff 0%, #6667ab 100%)'
    //     });
    //     $('#TwinRose h2 a').css({
    //         color: '#fff',
    //         border: '1px solid #6667ab',
    //         background: '#000'
    //     });
    //     $('#BirdChild').css({zIndex:10});
    // });
});



// 로딩시 자동 실행
window.onload = function () {
    $('.board #BirdChild ul').slideDown(2000);
    $('#BirdChild h2 a').css({
        color: '#fff',
        border: '1px solid #6667ab',
        background: '#000'
    });
    $('#BirdChild').css({zIndex:10});
}
