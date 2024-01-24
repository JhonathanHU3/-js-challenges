const form = document.querySelector('.form');
const passwordDiv = document.querySelector('#generatedPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const passwordLength = document.querySelector('.password-length').value;

    if(passwordLength < 0 || passwordLength == 0) return;

    passwordDiv.innerHTML = generatePassword(passwordLength);
    passwordDiv.style.display = 'block';
})

function generatePassword(passwordLength) {
    if(passwordLength === 0) return '';
    passwordLength--;
    const generatedPassword = s[getRandomNumber()] + generatePassword(passwordLength);
    return generatedPassword;
}

const s = 'abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ1234567890!@#$%¨&*(),.<>;:~][}{^´`\'-=+/"_?|\\'

function getRandomNumber() {
    return Math.floor(Math.random() * 98);
}