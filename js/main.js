$(function(){
  $('.toggle_button').on('click', function(){
    $(this).toggleClass('active');
    $('.gnav').slideToggle('200');
  })
})
