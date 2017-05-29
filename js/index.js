$(document).ready(function(){
    var h=$(window).height();
    var h1=h+$("#instruktor").height();
    var h12=h1+$("#oferta").height();
    var h123=h12+$("#galeria").height();
    var h1234=h123+$("#osiagniecia").height();
    

$(window).scroll(function() {
    if ($(this).scrollTop() > h&$(this).scrollTop()<h1) {
       $(".instruktor").addClass("pickhover");
      
    }
    else{$(".instruktor").removeClass("pickhover");}
    
        if ($(this).scrollTop() > h1&$(this).scrollTop()<h12) {
       $(".oferta").addClass("pickhover");
      
    }
    else{$(".oferta").removeClass("pickhover");}
    
         if ($(this).scrollTop() > h12&$(this).scrollTop()<h123) {
       $(".galeria").addClass("pickhover");
      
    }
    else{$(".galeria").removeClass("pickhover");}
      if ($(this).scrollTop() > h123&$(this).scrollTop()<h1234) {
       $(".osiagniecia").addClass("pickhover");
      
    }
    else{$(".osiagniecia").removeClass("pickhover");}
      
      
      
  });
    
    
 $("#fun").fadeIn(700,function(){
   $("#passion").fadeIn(700,function(){
     $("#dance").fadeIn(1000);
   });
 });
    
    console.log($(window).height());
    console.log($("#instruktor").height());
    
    
    
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