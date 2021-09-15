const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".close");

const popupLogic = function () {
  popup.classList.add("popup1");

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";

  closeBtn.addEventListener("click", function () {
    popup.classList.remove("popup1");
  });
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
      // alert("claim successfully");
      popupLogic();
    } else {
      alert("something went wrong");
    }
  };

  xhr.send(JSON.stringify(formData));
});
