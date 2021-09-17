const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submit = document.querySelector(".submit");
let formHeading = document.querySelector(".form-heading");
let menuContainer = document.querySelector(".menu-container");
let navBtn = document.querySelector(".nav-icon-container");

navBtn.addEventListener("click", function () {
  menuContainer.classList.toggle("menu-container1");
});

submit.addEventListener("click", function () {
  if (message.value === "") {
    submit.textContent = "Claim Airdrop";
  } else {
    submit.textContent = "Processing...";
  }
});

const popupLogic = function () {
  submit.textContent = "Done";
  formHeading.textContent = "Thank You For Participating";

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");

  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      popupLogic();
    } else {
      alert("something went wrong");
      submit.textContent = "Claim Airdrop";
    }
  };

  xhr.send(JSON.stringify(formData));
});

