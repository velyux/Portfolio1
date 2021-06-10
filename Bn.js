$(function() {
    $('header').vegas({
   slides: [
 { src: "imgs/ma1.png", delay: 4000 },
 { src: "imgs/ma2.png", delay: 4000 }, 
 { src: "imgs/ma4.png", delay: 4000 },
],  
animation: 'kenburns' 

});
});


new Swiper('.swiper3', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper3 .swiper-button-next ',
      prevEl: '.swiper3 .swiper-button-prev ',
    },
    loop: true,
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신
  });
  new Swiper('.swiper4', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper4 .swiper-button-next',
      prevEl: '.swiper4 .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    //탭 안의 스와이퍼 갱신
  });
  new Swiper('.swiper5', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper5 .swiper-button-next',
      prevEl: '.swiper5 .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    //탭 안의 스와이퍼 갱신
  });



  $(document).ready(function () {
    $(".tab ul li").click(function () {
      $(this).addClass('on').siblings().removeClass('on');
      $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
      // $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
      // 강제갱신하는 실행문 이었으나, L.50에서 옵션이 추가되면서 사용하지 않아도 됨.
    });
  });

  $(document).ready(function(){
    $(".but1").click(function(){
      $(".m1").slideToggle();
    });
    $(".but2").click(function(){
      $(".m2").slideToggle();
    });
  });
  $(document).ready(function(){
      // 탭메뉴 페이드박스 가로형
      $(".fadeTab .conBox").hide().eq(0).show();
      $(".fadeTab li").click(function(){
          $(this).addClass('on').siblings().removeClass('on');
          $("#"+$(this).data('id')).fadeIn(1000)
          .siblings('.conBox').fadeOut(300);
      });
  });

  
  
  var spot1 = $(".top").offset().top;
$("#up").click(function () {
  $("html, body").animate({
    scrollTop: spot1
  }, 500);
});


window.addEventListener('load', function (event) {
  AOS.init();
});

$(document).scroll(function() {
  // 스크롤에 따라 헤더가 숨기 - 변경가능
  var scroll = $(window).scrollTop();
    if (scroll > 300){
      $( ".top" ).addClass( "hideBar" );
    }
    else if (scroll < 299){
      $( ".top" ).removeClass( "hideBar" );
    }
});

//sub1page
