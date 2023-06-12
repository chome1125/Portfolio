$(function () {
  /* 스크롤 이벤트 */
  $('#cont02').css('opacity','0')
  $('#cont03').css('opacity','0')
  $('#cont04').css('opacity','0')
  $('#cont05').css('opacity','0')
  $(window).scroll(function(){
    console.log(window.scrollY)

    if(window.scrollY >= 700){
      $('#cont02').css('opacity','1')
      $('#cont02').css('transition','0.8s')
    }if(window.scrollY < 700){
      $('#cont02').css('opacity','0')
      $('#cont02').css('transition','0.8s')
    }if(window.scrollY >= 2000){
      $('#cont03').css('opacity','1')
      $('#cont03').css('transition','0.8s')
    }
    if(window.scrollY < 2000){
      $('#cont03').css('opacity','0')
      $('#cont03').css('transition','0.8s')
    }
    if(window.scrollY >= 3100){
      $('#cont04').css('opacity','1')
      $('#cont04').css('transition','0.8s')
    }
    if(window.scrollY < 3100){
      $('#cont04').css('opacity','0')
      $('#cont04').css('transition','0.8s')
    }
    if(window.scrollY >= 3400){
      $('#cont05').css('opacity','1')
      $('#cont04').css('transition','0.8s')
    }
    if(window.scrollY < 3500){
      $('#cont05').css('opacity','0')
      $('#cont05').css('transition','0.8s')
    }
  })

  /* 포트폴리오 탭메뉴 */
  let list = $("#cont03 li");
  let portfolioPage = $(".content");

  list.click(function () {
    let index = $(this).index();

    list.removeClass("on");
    $(this).addClass("on");
    portfolioPage.removeClass("on");
    portfolioPage.eq(index).addClass("on");
    // portfolioPage.fadeOut();
    // portfolioPage.eq(index).fadeIn();
  });

  /* 디자인 탭메뉴 */
  let list2 = $("#cont04 li");
  let snsDesign = $(".boxs");


  list2.click(function () {
    let index = $(this).index();

    list2.removeClass("on");
    $(this).addClass("on");
    snsDesign.removeClass("on");
    snsDesign.eq(index).addClass("on");

  });

  /* 디자인 슬라이드 */
  let leftArrow = $(".arrow").eq(0);
  let rightArrow = $(".arrow").eq(1);
  let count = 1;

  leftArrow.click(function () {
    count--;
    if (count == 1) {
      $(".container").css("transform", "translateX(0px)");
      $(".container").css("transition", "1s");
    } else if (count <= 0) {
      count = 1;
    }

    console.log(count);
  });

  rightArrow.click(function () {
    count++;
    if (count == 2) {
      $(".container").css("transform", "translateX(-1462.5px)");
      $(".container").css("transition", "1s");
    } else {
      count = 2;
    }
  });

  /* 디자인 탭메뉴 */
  let modalImageBox = $('#cont04>figure')
  let modalImage = $('#cont04>figure img');
  let item = $('.boxs .slideCont div');
  
  modalImageBox.click(function(){
      $(this).css('display','none')
  })

  item.click(function(){
    let thisImg = $(this).find('img').attr('src')
    
    modalImage.attr('src', thisImg)
    modalImageBox.css('display','block')
    if(item.index() >=8 ){
      console.log(123)
    }

  })
  
});
