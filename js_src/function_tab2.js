/*
* 1.�̺�Ʈ
*
* 2.��� - �Լ�
*
* */


$(function(){

  // on Ŭ���� �߰�

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