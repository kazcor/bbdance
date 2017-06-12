$(document).ready(function(){
    var h=$("#first").height();
    var h1=h+$("#instruktor").height();
    var h12=h1+$("#oferta").height();
    var h123=h12+$("#galeria").height();
    var h1234=h123+$("#osiagniecia").height();
    var h12345=h1234+$("#kontakt").height();
    $(".menu li").removeClass("pickhover");
    $("article div").removeClass("fadeIn");

$(window).scroll(function() {
    
    if ($(this).scrollTop() <h) {
       $("#background1").css("background-image","url(\"/tło.jpg\")");
    }
    if ($(this).scrollTop() > h&$(this).scrollTop()<h1) {

       $(".instruktor").addClass("pickhover");
        $("#intext, #inimg").addClass("fadeIn");
       $("#background1").css("background-image","url(\"/tło1.jpg\")");
    }
    else{$(".instruktor").removeClass("pickhover");}
    
        if ($(this).scrollTop() > h1&$(this).scrollTop()<h12) {
        $(".off").addClass("fadeIn");
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
      
     if ($(this).scrollTop() > h1234&$(this).scrollTop()<h12345) {
       $(".kontakt").addClass("pickhover");
      
    }
    else{$(".kontakt").removeClass("pickhover");}
       
      
  });
    
    //slider
   var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
    console.log("hejo");
}
    var right=document.querySelector("#right");
    right.addEventListener('click',function(){
        plusDivs(1);
    });
    
     var left=document.querySelector("#left");
    left.addEventListener('click',function(){
        plusDivs(-1);
    });

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
    
};
    //--slider
    
 $("#fun").fadeIn(700,function(){
   $("#passion").fadeIn(700,function(){
     $("#dance").fadeIn(900);
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
        
        simpleScrollTo($(this).attr('href'), 1000);
    });
}); 
});