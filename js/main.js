//start jquery
$(document).ready(function(){
   //scroll coding
   $(window).scroll(function(){
      if (this.scrollY > 20) {
         $('#navBar').addClass('sticky');
      } else {
         $('#navBar').removeClass('sticky');
      }
   });
});