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