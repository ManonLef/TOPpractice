// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity ("I am expecting an e-mail address!");
//     email.reportValidity();
//   } else {
//     email.setCustomValidity("");
//   }
// });

const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault;
  }
});

function showError() {
  if (email.validity.valueMissing) {
    //empty field
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    //not an email address
    emailError.textContent = "Entered value needs to be an e-mail address."
  } else if (email.validity.tooShort) {
    //data too short
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  //set styling
  emailError.className = "error active"
}