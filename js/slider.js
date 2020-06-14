var previousButton = document.querySelector(".previous");
var nextButton = document.querySelector(".next");
var sliders = document.querySelector(".sliders");

previousButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  var currentSlide = sliders.querySelector(".slide-current");
  var previousSlide = currentSlide.previousElementSibling;
  if (!previousSlide) {
    previousSlide = sliders.querySelector(".slide:last-child");
  } 
  currentSlide.classList.remove("slide-current");
  previousSlide.classList.add("slide-current");

});

nextButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  var currentSlide = sliders.querySelector(".slide-current");
  var nextSlide = currentSlide.nextElementSibling;
  if (!nextSlide) {
    nextSlide = sliders.querySelector(".slide:first-child");
  } 
  currentSlide.classList.remove("slide-current");
  nextSlide.classList.add("slide-current");
});