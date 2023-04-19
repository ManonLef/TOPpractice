const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email");
  } else {
    email.setCustomValidity("");
  }
});
