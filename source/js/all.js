$(function () {
  if (document.URL.match('tags')) {
    var url = location.href;
    $('.tag-list-item').each(function(index) {
      var tag = $(this).find('a').html();
      if (url.match(tag)) {
        $(this).find('a').css("backgroundColor","#1E88E5").css("color", "white");
      }
    });
  }
});