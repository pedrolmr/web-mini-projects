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
}
