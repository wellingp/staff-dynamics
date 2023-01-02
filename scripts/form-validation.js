
//Declare variables.

let form = document.getElementById('contact-form');

let fullname = document.getElementById('name');
let email = document.getElementById('email');
let service = document.getElementById('service');
let message = document.getElementById('message');

let fullnameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let serviceError = document.getElementById('service-error');
let messageError = document.getElementById('message-error');

let formSuccess = document.getElementById('form-success');

let errorLabels = document.getElementsByClassName('error-labels');

fullname.value = '';
email.value = '';
service.value = '';
message.value = '';

fullnameError.textContent = '';
emailError.textContent = '';
serviceError.textContent = '';
messageError.textContent = '';

formSuccess.textContent = '';

//Check for empty on anything.
form.addEventListener('submit', (event) => {
   if ((fullname.value && email.value && service.value && message.value) == ''){
      event.preventDefault();
   }
});

//Empty errors
form.addEventListener('submit', () => {
   if (fullname.value == ''){
      fullnameError.textContent = 'Please fill in your name!';
   } else { fullnameError.textContent = '' };

   if (email.value == ''){
      emailError.textContent = 'Please fill in your email!'
   } else { emailError.textContent = '' };

   if (service.value == ''){
      serviceError.textContent = 'Please select a service!'
   } else { serviceError.textContent = '' };

   if (message.value == ''){
      messageError.textContent = 'Please include a message!'
   } else { messageError.textContent = '' };
});

for(i = 0 ; i < errorLabels.length ; i++){
   errorLabels[i].classList.toggle('red-text');
}

//Form Success Message

form.addEventListener('submit', () => {
   formSuccess.style.fontWeight = 'bold';
   formSuccess.style.color = '#d6e6be';
   formSuccess.textContent = 'Form Submitted!'
});