window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
});

const text = document.getElementById('circular-text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
const ele = document.querySelectorAll('span');
for(var i = 1;i<ele.length;i++){
  ele[i].style.transform="rotate("+i*16.5+"deg)";
}

var usernameInput = document.getElementById("name");

usernameInput.addEventListener("input", function() {
  usernameInput.setCustomValidity("");
});

usernameInput.oninvalid = function(event) {
  event.target.setCustomValidity("Would you mind sharing your name, please?");
};

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Simulate sending the form data to the server (you'd typically send this to a server using AJAX or fetch)
        setTimeout(function () {
            responseDiv.innerHTML = "Message sent successfully!";
            contactForm.reset();
        }, 1000); // Simulate a 1-second delay

    });
});
