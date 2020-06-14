var mapImg = document.querySelector(".map-img");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".close-button");

mapImg.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMap.classList.remove("modal-show");
      }
    }
  });