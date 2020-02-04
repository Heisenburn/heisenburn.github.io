

//increasing height of inner vertical line

$(document).ready(function(){
  $("#empyreanSVG").load("header.html");
   


 });
 
 var height = oheight = $("#verticalLine").height();
  $(document).scroll(function () {
    height = $(this).scrollTop() / ($(document).height() - $(window).height()) * oheight;
    $("#progressBar").css({
      'height': height,

    })
  });
 

 

 

 
   

 

  


  