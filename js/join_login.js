// $(function () {
//     function anim() {
//         $('#bigLogo>img').animate({top:50}, 1000, function(){
//             $('#bigLogo>img').animate({top:-50}, 1000, function(){
//                 $('#bigLogo>img').animate({top:50}, 1000, function(){
//                     anim();
//                 });
//             });
//         });
//     }
//     anim();
// });
$(function () {
    $("#bigLogo>img").each(function setAnim(){
        $("#bigLogo>img").
            animate({top:25},1500).
            animate({top:-25},1500).
            animate({top:25},1500,setAnim());
    });
});


// $(document).ready(function(){    

//     $('body').animate({backgroundColor:'#ffcc00'}).wait(500)
//              .animate({backgroundColor:'#eeeeee'}).wait(500)
//              .animate({backgroundColor:'#3b5998'}).wait(500)
// });
   


   