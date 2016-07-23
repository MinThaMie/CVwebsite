(function($){
    document.addEventListener('DOMContentLoaded', () => {
        $(".clickable").click(function(evt) {
            var elem = $(this);
            if (!elem.hasClass('fullSize')){
                elem.addClass('fullSize');
                $(".mask").addClass('open');
            }
        });
        $(".mask").click(function(evt) {
            var elem = $(this);
            if (elem.hasClass("open")){
                elem.removeClass('open');
                $(".clickable.fullSize").removeClass('fullSize');
            }
        });

    });
})(window.jQuery);
