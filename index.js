var message;

new Vue({
  el: '#success-message',
  mounted: function () {
    var url = new URL(window.location);

    searchParams = new URLSearchParams(url.search);;
    message = searchParams.get('message');
  }
});
(function($) {
    $(window).load(function () {
      $.magnificPopup.open({
        items: {
            src: '<div class="white-popup">'+message+'<br> </div>',
            type: 'inline'
        },
        midClick: true
      }, 0);
    });
})(jQuery);
