const form = document.querySelector(".login-form");
const email = form.firstElementChild;
const password = form.nextSibling;
const button = form.lastElementChild;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mailFormEl = formElements.email.value;
  const passwordFormEl = formElements.password.value;

  if (mailFormEl === "" || passwordFormEl === "") {
    alert("You didn't enter email or password");
  }

  const formData = {
    email: mailFormEl,
    password: passwordFormEl,
  };
  console.log(formData);
  
  form.reset();
}
