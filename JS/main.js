const hamburger = document.querySelector('.hamburger');
const popup = document.querySelector("#popup");

hamburger.addEventListener('click', function (){
    this.classList.toggle("is-active");
    document.querySelector("#navigation").classList.toggle("hide");
});

function sendEmail(){
    var greet = "Message sent"
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
