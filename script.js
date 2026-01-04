//your JS code here. If required.


const inputs = document.querySelectorAll('.code');

// Focus on first input on load
inputs[0].focus();

inputs.forEach((input, index) => {

  // Move forward on typing
  input.addEventListener('input', (e) => {
    if (e.target.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace behavior
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
      }
      input.value = '';
    }
  });

});
