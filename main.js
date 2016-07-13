/**
 * Created by Anne-Greeth on 4-7-2016.
 */
$().ready(function(){
    $(".circle").click(function(evt) {
        var elem = $(this);
        elem.toggleClass('fullSize');
    });
});