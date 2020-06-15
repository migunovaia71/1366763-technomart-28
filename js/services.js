var servicesTabs = document.querySelectorAll(".services-tab");

servicesTabs.forEach(function(servicesTab) {
  servicesTab.addEventListener("click", function (evt) {
    evt.preventDefault();

    var previousService = document.querySelector(".services-current");
    previousService.classList.remove("services-current");

    var previousTab = document.querySelector(".current-tab");
    previousTab.classList.remove("current-tab");
    servicesTab.classList.add("current-tab");

    var currentSlideService = servicesTab.nextElementSibling;
    currentSlideService.classList.add("services-current");
  });
});

