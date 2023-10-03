const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("emailErrorMessage");
const dismissBtn = document.getElementById("dismiss-btn");
const formContainer = document.getElementById("form-container");
const submitContainer = document.getElementById("submit-container");


submitBtn.addEventListener('click', () => {

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("err");
    message.style.display = "block";
  }
  else{
    formContainer.style.display = 'none';
    submitContainer.style.display = 'flex';
    emailInput.classList.remove("err");
    message.style.display = "none";
  }
})

dismissBtn.addEventListener(('click'), () => {
  formContainer.style.display = 'grid';
  submitContainer.style.display = 'none';
})
