var contactsButton = document.querySelector(".contacts-button");
var modalForm = document.querySelector(".modal-form");
var closeButton = modalForm.querySelector(".close-button");
var userName = modalForm.querySelector(".user-name");
var feedbackForm = modalForm.querySelector(".feedback-form");
var userEmail = modalForm.querySelector(".user-email");
var userText = modalForm.querySelector(".form-textarea");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal-show");

    if (storageName) {
        userName.value = storageName;
        userEmail.focus();
      } else {
        userName.focus();
      }

      if (storageName && storageEmail) {
        userName.value = storageName;
        userEmail.value = storageEmail;
        userText.focus();
      } else {
        userName.focus();
      }
});

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.remove("modal-show");
    modalForm.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!userEmail.value || !userText.value) {
        evt.preventDefault();
        modalForm.classList.remove("modal-error");
        modalForm.offsetWidth = modalForm.offsetWidth;
        modalForm.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("email", userEmail.value);
        localStorage.setItem("name", userName.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalForm.classList.contains("modal-show")) {
        evt.preventDefault();
        modalForm.classList.remove("modal-show");
        modalForm.classList.remove("modal-error");
      }
    }
  });