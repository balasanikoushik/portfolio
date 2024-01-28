const items = document.querySelectorAll(".accordion button");

window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
});

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

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
