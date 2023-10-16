function fadeAnime(){

$('.blurTrigger').each(function() {
    var elem = $(this);
    var elemPos = elem.offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
  
    if (scroll >= elemPos - windowHeight) {
      setTimeout(function() {
        elem.addClass('blur');
      }, 200); // n秒後にアニメーションを開始
    } else {
      elem.removeClass('blur');
    }
  });
  
}

$(window).scroll(function (){
  fadeAnime();
});

