var scrollDocument = function(){
    $(window).scroll(function() {
        if($(window).width() > 992){
            if ($(document).scrollTop() > 50) { 
                $(".headerBlue").css("height", "80px");
                $(".headerBlue").css("top", "0");
                $(".headerBlue").css("padding-top", "17px");
                $(".imagen_logoMinsa").attr("src","img/logo_minsa_small.jpg");
                $(".contentInfo").css("padding-top", "120px")
                $(".tittleHeader").css("font-size", "20px")
                $(".subTittleHeader").css("font-size", "15px")
                $("#menuListGroup").addClass("positionFixed")
                $(".contentWhite").css("margin-top", "108px")
            } else if ($(document).scrollTop() < 50) {
                $(".headerBlue").css("height", "220px");
                $(".headerBlue").css("padding-top", "75px");
                $(".imagen_logoMinsa").attr("src","img/logo_minsa_big.jpg"); 
                $(".contentInfo").css("padding-top", "280px")
                $(".tittleHeader").css("font-size", "2.5rem")
                $(".subTittleHeader").css("font-size", "20px")
                $("#menuListGroup").removeClass("positionFixed")
                $(".contentWhite").css("margin-top", "10px")
            }
        } 
    });
}
var toggleFixed = function() {
   adjustWidth();
   $("#menuListGroup").toggleClass("positionFixed");
}
var adjustWidth = function(){
    var parentwidth = $("#contentMenu").width();      
    $("#menuListGroup").toggleClass("positionFixed").width(parentwidth);
}
var resize = function(){
    $(window).resize(
        function() {
            adjustWidth();
    })
}
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();
    scrollDocument();
    toggleFixed();
    adjustWidth();
    resize();
})