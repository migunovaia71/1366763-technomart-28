var buyButtons = document.querySelectorAll(".buy");
var modalCart = document.querySelector(".modal-cart");
var closeCart = modalCart.querySelector(".close-button");
var goonShoping = modalCart.querySelector(".goon-shoping");

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCart.classList.add("modal-show");
    });
});

closeCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});

goonShoping.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalCart.classList.contains("modal-show")) {
        evt.preventDefault();
        modalCart.classList.remove("modal-show");
      }
    }
  });

