jQuery(document).ready(function($) {
    
    /************************************/
    /* Functions for Popup info message */
    
    /* Timer for Message */
    var showMessageTimer;
    
    /* Shows message width %textMessage% */
    /* When timer is out message is close by closeMessage() */
    function showMessage(textMessage) {
        $(".message__text").text(textMessage);
        $(".message").css("transform", "translateY(6rem)");
        $(".app").css("transform", "translateY(25px)");
        showMessageTimer = window.setTimeout(function(){closeMessage();}, 2500);
    }
    
    /* Close message and stop timer */
    function closeMessage() {
        window.clearTimeout(showMessageTimer);
        $(".message").css("transform", "translateY(-6rem)");
        $(".app").css("transform", "translateY(-25px)");
    }
    
    /* END: Functions for Popup info message */
    /*****************************************/
    
    /**********************/
    /* Main program logic */
    
    /* Message:on button close clicked */
    $(".message__btn-close").click(function(){
        closeMessage();
    });

    /* On App component clicked */
    $(".app").click(function(){
        showMessage("Hello");
    });
    
    /* END: Main program logic */
    /***************************/
});