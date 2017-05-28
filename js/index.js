$(document).ready(function(){

$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()&$(this).scrollTop()<2*$(window).height()) {
       $(".instruktor").addClass("pickhover");
      
    }
    else{$(".instruktor").removeClass("pickhover");}
    
        if ($(this).scrollTop() > 2*$(window).height()&$(this).scrollTop()<3*$(window).height()) {
       $(".oferta").addClass("pickhover");
      
    }
    else{$(".oferta").removeClass("pickhover");}
    
         if ($(this).scrollTop() > 3*$(window).height()&$(this).scrollTop()<4*$(window).height()) {
       $(".galeria").addClass("pickhover");
      
    }
    else{$(".galeria").removeClass("pickhover");}
      if ($(this).scrollTop() > 4*$(window).height()&$(this).scrollTop()<5*$(window).height()) {
       $(".osiagniecia").addClass("pickhover");
      
    }
    else{$(".osiagniecia").removeClass("pickhover");}
      
      
      
  });
    if($(window).width()>768){
       alert($(window).width());
    $("#intext").css("height",$("#inimg").css("height"));
    }
    
 $("#fun").fadeIn(700,function(){
   $("#passion").fadeIn(700,function(){
     $("#dance").fadeIn(1000);
   });
 });
    
    
    
    
    
     function simpleScrollTo(element, speed) {
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: $(element).offset().top}, speed, function() {
        document.location.hash = $(element).attr('id');
    });
}
  
$(function() {
    $('.menu a,#menu a,h2 a').click(function (e) {
        e.preventDefault();
        
        simpleScrollTo($(this).attr('href'), 700);
    });
}); 
});