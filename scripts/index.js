const Routes = {
  "/auth": {
    template: 'templates/auth.html',
    title: '',
    description: ''
  }
}

window.addEventListener('load', function(event) {

  const icon = document.querySelector('.icon-hook');
  
  icon.classList.add('active');
}, false);

const loginForm = document.forms.loginForm;
const inputValue = loginForm.elements.email;
const inputError = loginForm.querySelector(`.${ inputValue.id}-error`);

const showInputError = (element, errorMessage) => {
  element.classList.add('form__input_type_error');
  inputError.textContent = errorMessage;
  inputError.classList.add('form__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  inputError.classList.remove('form__input-error_active');
  inputError.textContent = "";
};

const isValid = (inputElement) => {
  if (inputElement.validity.typeMismatch) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

inputValue.addEventListener('change', () => { isValid(inputValue) }); 

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  window.history.pushState({}, '', '/auth');
  urlLocationHandler(inputValue);
})


const urlLocationHandler = async (inputElement) => {
  let html;
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    showInputError(inputElement, inputElement.validationMessage);
  }
  else {
    location.href=Routes['/auth'].template;
  }
}