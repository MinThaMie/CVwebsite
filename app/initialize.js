(function($){
    document.addEventListener('DOMContentLoaded', () => {
        $(".circle").click(function(evt) {
            var elem = $(this);
            elem.toggleClass('fullSize');
        });
    });
})(window.jQuery);
