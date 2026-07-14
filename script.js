// This handles the contact form submission

const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // simple check to make sure fields are not empty
  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all the fields.";
    formMsg.style.color = "red";
    return;
  }

  // Note: this is just a demo message.
  // To actually send the message, connect this form to a backend
  // or a service like Formspree / EmailJS.
  formMsg.textContent = "Thank you, " + name + "! Your message has been sent.";
  formMsg.style.color = "green";

  contactForm.reset(); // clear the form
});