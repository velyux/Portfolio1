$(document).scroll(function() {
    $(".Tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        });
    });
window.addEventListener('load', function (event) {
        AOS.init();
      });


//     $(".Tab .Box").hide().eq(0).show();
//     $(".Tab li").click(function(){
//         $(this).addClass('on').siblings().removeClass('on');
//         $("#"+$(this).data('id')).fadeIn(1000)
//         .siblings('.Box').fadeOut(300);
//     });
//   });