const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    
});

    var HoD = document.getElementById("HomeDiv");
    var AbD = document.getElementById("AboutDiv");
    var WoD = document.getElementById("WorkDiv");
    var ViD = document.getElementById("VisionDiv");
    var CoD = document.getElementById("ContactDiv");
    
    var HT = document.getElementById("HomeText");

    

// const About = document.querySelector('.wrap2');
// const Work = document.querySelector('.wrap3');
// const Vision = document.querySelector('.wrap4');
// const Contact = document.querySelector('.wrap5');
function warpfunction(){
    if(HoD.style.display == "none"){
        HoD.style.display = "block";
            AbD.style.display = "none";
            WoD.style.display = "none";
            ViD.style.display = "none";
            CoD.style.display = "none";
        }
        else if(HoD.style.display == "block"){
            HoD.style.display = "block";
            AbD.style.display = "none";
            WoD.style.display = "none";
            ViD.style.display = "none";
            CoD.style.display = "none";
        }
        
}
function warpfunction2(){
            if(AbD.style.display == "none"){
            HoD.style.display = "none";
            AbD.style.display = "block";
            WoD.style.display = "none";
            ViD.style.display = "none";
            CoD.style.display = "none";
        }
            else if(AbD.style.display == "block"){
            HoD.style.display = "none";
            AbD.style.display = "block";
            WoD.style.display = "none";
            ViD.style.display = "none";
            CoD.style.display = "none";
        }
        else{AbD.style.display ="none";}
}

function warpfunction3(){
    if(WoD.style.display == "none"){
        HoD.style.display = "none";
        AbD.style.display = "none";
        WoD.style.display = "block";
        ViD.style.display = "none";
        CoD.style.display = "none";
    }
    else if(WoD.style.display == "block"){
        HoD.style.display = "none";
        AbD.style.display = "none";
        WoD.style.display = "block";
        ViD.style.display = "none";
        CoD.style.display = "none";
    }
    else{WoD.style.display ="none";}
}

function warpfunction4(){
    if(ViD.style.display == "none"){
        HoD.style.display = "none";
        AbD.style.display = "none";
        WoD.style.display = "none";
        ViD.style.display = "block";
        CoD.style.display = "none";
    }
    else if(ViD.style.display == "block"){
        HoD.style.display = "none";
        AbD.style.display = "none";
        WoD.style.display = "none";
        ViD.style.display = "block";
        CoD.style.display = "none";
    }
    else{ViD.style.display ="none";}
}

function warpfunction5(){
    if(CoD.style.display == "none"){
        HoD.style.display = "none";
        AbD.style.display = "none";
        WoD.style.display = "none";
        ViD.style.display = "none";
        CoD.style.display = "block";
    }
    else if(CoD.style.display == "block"){
        HoD.style.display = "none";
        AbD.style.display = "none";
        WoD.style.display = "none";
        ViD.style.display = "none";
        CoD.style.display = "block";
    }
    else{CoD.style.display ="none";}
}

// <!-- 여기부터는 복붙이고 충돌하는 부분만 수정했습니다.-->
    // <!-- https://myhappyman.tistory.com/13 -->
var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
  var sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}


// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active1", "");
  }

  slides[n].style.display = "block";
  dots[n].className += "active1";
}