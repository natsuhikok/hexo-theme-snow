$(function () {
  //////////////////////////////////////////
  // Active tags
  //////////////////////////////////////////
  if (document.URL.match('tags')) {
    var url = location.href;
    $('.tag-list-item').each(function(index) {
      var tag = $(this).find('a').html();
      if (url.match(tag)) {
        $(this).find('a').css("backgroundColor","#1E88E5").css("color", "white");
      }
    });
  }

  //////////////////////////////////////////
  // Auto pager
  //////////////////////////////////////////
  var $nextLink = $('a.js-autopager-next');
  $.autopager({
    content: 'div.js-autopager-posts',
    link: 'a.js-autopager-next',
    autoLoad: false,

    start: function(current, next){
      $nextLink.css('display', 'none');
    },

    load: function(current, next){
      $nextLink.css('display', 'block');
      var nextPage = $(this).attr('data-next-page');
      if( nextPage == 0 ){
        $nextLink.hide();
      }
    }
  });
  $nextLink.click(function(){
    $.autopager('load');
    return false;
  });


  //////////////////////////////////////////
  // toggle MENU
  //////////////////////////////////////////
  var toggleMenu = function ($btn, $menu) {
    var flag = false;
    $btn.click(function () {
      if (flag === false) {
        $menu.slideDown();
        $btn.removeClass('side--mobileBtn_open').addClass('side--mobileBtn_close');
        flag = true;
      } else {
        $menu.slideUp();
        $btn.removeClass('side--mobileBtn_close').addClass('side--mobileBtn_open');
        flag = false;
      }
    });
  };
  toggleMenu($('.js-toggle-btn'),$('.js-toggle-menu'));
});