// 아코디언 메뉴 타입 1

$(function(){

  function menuDisplayInit(){
    $('.acc-1depth-display').data({'open' : 'false'});
  }

  function menuDisplayOn( $depth1 ){
    $depth1.parent('.acc-1depth-item').siblings().children('.acc-2depth-display').removeClass('on');
    $depth1.parent('.acc-1depth-item').siblings().children('.acc-1depth-display').data({'open': 'false'});
    $depth1.next('.acc-2depth-display').addClass('on');
  }

  function menuDisplayoff( $depth1 ){
    $depth1.next('.acc-2depth-display').removeClass('on');
  }

  function menuArrowOn( $depth1 ){
    $depth1.parent('.acc-1depth-item').siblings().children('.acc-1depth-display').removeClass('on').data({'open': 'false'});
    $depth1 .addClass('on');
  }

  function menuArrowOff( $depth1 ){
    $depth1 .removeClass('on');
  }

  //초기화 함수 실행
  menuDisplayInit();

  $('.acc-1depth-display').on('click',function(){

    if( $(this).data('open')=='false'){

      menuArrowOn($(this));
      menuDisplayOn($(this));

      $(this).data({'open' : 'true'});

    } else {

      menuArrowOff($(this));
      menuDisplayoff($(this));

      $(this).data({'open' : 'false'});
    }

  });


});
// 아코디언 메뉴 타입 2

$(function(){

  function menuAnimateInit(){
    $('.animate-1depth-link').data({'open' : 'false'});

    $('.animate-2depth').each(function(index){

      $(this).data({
        'height' : $(this).height()
      }).css({
        height : 0
      });

    });
  }

  function menuAnimateOn( $depth1 ){
    $depth1.parent('.acc-1depth-item').siblings().children('.animate-2depth').stop().animate({
      height : 0
    });
    $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').data({'open': 'false'});
    $depth1.next('.animate-2depth').stop().animate({
      height : $depth1.next('.animate-2depth').data('height')
    });
  }

  function menuAnimateoff( $depth1 ){
    $depth1.next('.animate-2depth').stop().animate({
      height : 0
    });
  }

  function menuArrowAnimateOn( $depth1 ){
    $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').removeClass('on').data({'open': 'false'});
    $depth1.addClass('on')

  }

  function menuArrowAnimateOff( $depth1 ){
    $depth1.removeClass('on')

  }

  //초기화 함수 실행
  menuAnimateInit();

  $('.animate-1depth-link').on('click',function(){

    if( $(this).data('open')=='false'){

      menuArrowAnimateOn($(this));
      menuAnimateOn($(this));

      $(this).data({'open' : 'true'});

    } else {

      menuArrowAnimateOff($(this));
      menuAnimateOn($(this));

      $(this).data({'open' : 'false'});
    }

  });


});
/*
* 1.이벤트
*
* 2.기능 - 함수
*
* */


$(function(){

  // on 클래스 추가

  function tabOn( $tab, index ){

    $tab.siblings().removeClass('on');
    $tab.addClass('on');

    var $tabContent =  $('.tab-content').eq(index);

    $tabContent.siblings().removeClass('on');
    $tabContent.addClass('on');
  }

  $('.tab-menu-list').on('click',function(){

    var index = $(this).index('.tab-menu-list');

    tabOn($(this),index);

  });

});
/*
* 1.이벤트
*
* 2.기능 - 함수
*
* */


$(function(){

  // on 클래스 추가

  function tabOn( $tab, index ){

    $tab.siblings('.tab-paragraph').removeClass('on');
    $tab.addClass('on');

    var $tabContent =  $('.tab-paragraph').eq(index);

    $tabContent.siblings('.tab-paragraph').removeClass('on');
    $tabContent.addClass('on');
  }

  $('.tab-heading').on('click',function(){

    var index = $(this).index('.tab-heading');

    tabOn($(this),index);

  });

});