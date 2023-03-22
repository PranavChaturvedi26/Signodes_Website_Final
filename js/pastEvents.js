const iotron = document.querySelector("#iotron");
const equinox = document.querySelector(".equinox");
const logoComp = document.querySelector(".logoComp");

var iotronImages = new Array(
  "../assets/IOTRONpics/1.JPG",
  "../assets/IOTRONpics/2.JPG",
  "../assets/IOTRONpics/3.JPG",
  "../assets/IOTRONpics/4.JPG",
  "../assets/IOTRONpics/5.JPG",
  "../assets/IOTRONpics/6.JPG",
  "../assets/IOTRONpics/7.JPG"
);

var equinoxImg = new Array(
  "./assets/Equinoxpics/1.JPG",
  "./assets/Equinoxpics/2.JPG",
  "./assets/Equinoxpics/3.JPG",
  "./assets/Equinoxpics/4.JPG",
  "./assets/Equinoxpics/5.JPG",
  "./assets/Equinoxpics/6.JPG"
);
var logoMaking = new Array("./assets/LogoMakingPics/1.JPG");

function iotimg() {
  var length = iotronImages.length;
  var i = 0;
  function slider() {
    if (i > len - 1) {
      i = 0;
    }
    iotron.src = iotronImages[i];
    i++;
    setInterval(slider, 3000);
  }
  slider();
}
function equi() {
  var length = equinoxImg.length;
  var i = 0;
  function slider() {
    if (i > len - 1) {
      i = 0;
    }
    equinox.src = equinoxImg[i];
    i++;
    setInterval(slider, 3000);
  }
  slider();
}
var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 3000);
};

window.onload = function () {
  responsiveSlider();
};
iotimg();
equi();
