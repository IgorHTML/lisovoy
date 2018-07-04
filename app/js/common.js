$(function() {



  

$(document).click(function(event) {
    if ($(event.target).closest(".main-menu").length) return;
    if($(window).width() < 992) {
      $(".main-menu").slideUp();
      $(".hamburger").removeClass("is-active");
    } else {
      return;
    };
    event.stopPropagation();
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".main-menu").slideToggle();
    return false;
  });


  // maskedinput
  $('[name=phone]').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: true,
    showMaskOnFocus: true,
  });
  
  // img not drag
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

  (function($) {
$(function() {

  $('.checkbox').styler();

});
})(jQuery);


  $("form").submit(function() { //Change 
    var th = $(this); 
    $.ajax({ 
      type: "POST", 
url: "mail.php", //Change 
data: th.serialize() 
}).done(function() { 
  $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn(); 
  setTimeout(function() { 
    $(th).find('.success').removeClass('active').fadeOut(); 
    th.trigger("reset"); 
    $.fancybox.close(); 
  }, 2000); 
}); 
return false; 
});


$(function(){
    // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-nav a').click(function(){                         // При клике на вкладку
    $('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})