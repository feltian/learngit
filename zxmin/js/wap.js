
$(document).ready(function(){
    var deviceWidth=$(window).outerWidth();
    if(deviceWidth>750){
        $("html").css("font-size","100px");
    }else{
        $("html").css("font-size",deviceWidth/750*100+'px');
    }

     $(function(){
         $('#gotop').click(function(){
            $('html , body').animate({scrollTop: 0},'500');
         });
     });
     
});