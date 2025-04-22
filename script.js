window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
});

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

    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const loading = document.getElementById('loading');
  const success = document.getElementById('success');
  const submitBtn = document.getElementById('submit-btn');

  // Show spinner
  loading.style.display = 'block';
  success.style.display = 'none';
  submitBtn.disabled = true;

  setTimeout(() => {
    loading.style.display = 'none';
    success.style.display = 'block';
    submitBtn.disabled = false;
    this.reset();
  }, 2500); // 2.5 seconds delay
});