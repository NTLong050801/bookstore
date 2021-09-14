

 
var slideIndex = 0;//khai báo hàm hiển thi slide
showSlides();  
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  //chuyển slide tiếp
  setTimeout(showSlides, 3000); 
 
}

    function opentrang(evt, opentrang) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("content8bottom");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      
      document.getElementById(opentrang).style.display = "grid";
      evt.currentTarget.className += " actived";
    }   
  