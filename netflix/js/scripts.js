const inputs = document.querySelectorAll('form .field input');

inputs.forEach((input) => {
  input.addEventListener('blur', validateInput);
  input.addEventListener('input', validateInput);
});

function validateInput(e) {
  const states = ['valid', 'not-valid'];
  let classes;

  if (e.target.value.length === 0) {
    classes = states[1];
  } else {
    classes = states[0];
  }
  console.log(classes);

  e.target.nextElementSibling.classList.remove(...states);
  e.target.nextElementSibling.classList.add(classes);

  if (classes === 'not-valid') {
    if (e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
      const errorDiv = document.createElement('div');
      errorDiv.appendChild(document.createTextNode('this filed is mandatory'));
      errorDiv.classList.add('alert');

      e.target.parentElement.parentElement.insertBefore(
        errorDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  } else {
    if (e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
      e.target.parentElement.nextElementSibling.remove();
    }
  }
}
const togglePassword = document.querySelector('.toggle-password');
togglePassword.addEventListener('click', (e) => {
  const passwordInput = document.querySelector('#password');

  if (e.target.classList.contains('show')) {
    e.target.classList.remove('show');
    e.target.textContent = 'Hide';
    passwordInput.type = 'text';
  } else {
    e.target.classList.add('show');
    e.target.textContent = 'Show';
    passwordInput.type = 'password';
  }
});
