const form = document.querySelector('form');
const inputEl = document.querySelector('input');
const errorMessage = document.getElementById('required');
const emailSubmit = document.getElementById('email-submit');
const dismissBtn = document.getElementById('dismiss');

const main = document.getElementById('main');
const message = document.getElementById('message');

const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!regex.test(inputEl.value)) {
    errorMessage.classList.remove('hidden');
    inputEl.classList.add('error');
  } else {
    main.classList.add('hidden');
    message.classList.remove('hidden');
    emailSubmit.innerText = inputEl.value;
  }
});

dismissBtn.addEventListener('click', () => {
  main.classList.remove('hidden');
  message.classList.add('hidden');
});
