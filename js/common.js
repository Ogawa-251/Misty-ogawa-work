// ハンバーガーメニュー
$(function() {
    $('#toggle').on('click', function() {
      $('body').toggleClass('is-open');
      $('#main').toggleClass('overlay');
    });
    $(document).on('click','.overlay', function() {
      $('body').removeClass('is-open');
      $('#main').removeClass('overlay');
    });
  });



  // アコーディオンメニュー
  $(function(){
    $('.accordion_one .ac_header').click(function(){
      $(this).next('.ac_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });