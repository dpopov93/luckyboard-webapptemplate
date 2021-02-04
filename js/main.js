jQuery(document).ready(function($) {
    $(".message__btn-close").click(function(){
        $(".message").css("transform", "translateY(-120px)");
    });

    $(".app").click(function(){
        $(".message").css("transform", "translateY(120px)");
    });
});