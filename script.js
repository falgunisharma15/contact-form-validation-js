document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Input elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = 'Invalid email format.';
    isValid = false;
  }

  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    // Optionally reset form
    name.value = '';
    email.value = '';
    message.value = '';
  }
});
