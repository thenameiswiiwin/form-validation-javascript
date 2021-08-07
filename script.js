const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const errors = document.querySelector('.errors');
const errorsList = document.querySelector('.errors-list');

form.addEventListener('submit', (e) => {
	const errorMessages = [];
	clearErrors();

	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const passwordConfirmationValue = passwordConfirmation.value.trim();

	if (usernameValue.length < 6) {
		errorMessages.push('Ensure the username is at least 6 characters long');
	}
	if (passwordValue.length < 10) {
		errorMessages.push('Ensure the password is at least 10 characters long');
	}
	if (passwordConfirmationValue !== passwordValue) {
		errorMessages.push('Ensure the password and confirmation password match');
	}
	if (!terms.checked) {
		errorMessages.push('Ensure the terms checkbox is checked');
	}
	if (errorMessages.length > 0) {
		e.preventDefault();
		showErrors(errorMessages);
	}
});

function clearErrors() {
	while (errorsList.child[0] != null) {
		errorsList.removeChild(errorsList.children[0]);
	}
	errors.classList.remove('show');
}

function showErrors(errorMessages) {
	errorMessages.forEach((errorMessage) => {
		const list = document.createElement('li');
		list.innerText = errorMessage;
		errorsList.appendChild(list);
	});
	errors.classList.add('show');
}
