const submitBtn = document.getElementById('submit-btn');
const dismissBtn = document.getElementById('dismiss-btn');
const formContainer = document.getElementById('form-container');
const submitContainer = document.getElementById('submit-container');
const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z]+)\.([a-zA-Z]{2,5})$/;

document.getElementById('submit-btn').addEventListener('click', validateEmail);

function validateEmail(){
  const email = document.getElementById('email');

  if(!re.test(email.value)){
    document.getElementById('valid-email').innerHTML="Valid email required";
  }else{
    submitContainer.style.display = 'block';
    formContainer.style.display = 'none';
  }
}

dismissBtn.addEventListener(('click'), () => {
  formContainer.style.display = 'flex';
  submitContainer.style.display = 'none';
})
