
$( document ).ready(function() {
   

  window.scrollTo(0, -100);


//increasing height of inner vertical line


if(screen.width >= 768){
 
  var height = oheight = $("#verticalLine").height();
   $(document).scroll(function () {
     height = $(this).scrollTop() / ($(document).height() - $(window).height()) * oheight;
     $("#progressBar").css({
       'height': height,
 
     })
   });
  
  }

});





 

 
   

 

  


  