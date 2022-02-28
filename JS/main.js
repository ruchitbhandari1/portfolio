const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const popup = document.querySelector("#popup");
const navItems = document.querySelector(".ham-nav-items");

const openMenu = function () {
  // this.classList.toggle("is-active");
  open.classList.add("hide");
  close.classList.remove("hide");
  document.querySelector("#navigation").classList.remove("hide");
};
const closeMenu = function () {
  // this.classList.toggle("is-active");
  open.classList.remove("hide");
  close.classList.add("hide");
  document.querySelector("#navigation").classList.add("hide");
};

open.addEventListener("click", openMenu);

close.addEventListener("click", closeMenu);

navItems.addEventListener("click", closeMenu);

function sendEmail() {
  var greet = "Message sent";
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ruchitbhandari7@gmail.com",
    Password: "poavonlyswuofwzn",
    To: "ruchitbhandari1@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body:
      "Name:- " +
      document.getElementById("name").value +
      "<br>Email:- " +
      document.getElementById("email").value +
      "<br>Subject:- " +
      document.getElementById("subject").value +
      "<br>Message:- " +
      document.getElementById("message").value,
  }).then(() => {
    popup.classList.remove("hidden");
    popup.classList.add("anime");
    setTimeout(function () {
      popup.classList.add("hidden");
    }, 4000);
  });
}
