$(window).scroll(function() {
let height = $(window).scrollTop();

if(height > 600){
  $('nav').removeClass('top');
  $('nav').width();
  $('nav').addClass('top-fix');
}else{
  $('nav').removeClass('top-fix');
  $('nav').width();
  $('nav').addClass('top');
}
});
