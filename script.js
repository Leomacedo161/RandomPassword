document.getElementById('generate-btn').addEventListener('click', generateRandomPassword);

function generateRandomPassword() {
    const length = document.getElementById('password-length').value;
    const maxLength = 100;

    if (length > maxLength) {
        alert(`Password length cannot exceed ${maxLength} characters!`);
        return; 
    }

    let characters = '';

    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    
    if (includeLowercase) characters += lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    if (characters === '') {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    const passwordField = document.getElementById('password');
    passwordField.value = password;
    passwordField.classList.add('shake');
    setTimeout(() => passwordField.classList.remove('shake'), 500);
}

function updateLengthDisplay(value) {
    const maxLength = 100;
    if (value > maxLength) {
        document.getElementById('password-length-input').value = maxLength;
        document.getElementById('password-length').value = maxLength;
    } else {
        document.getElementById('password-length-input').value = value;
    }
}

function updateRangeDisplay(value) {
    const maxLength = 100; 
    if (value > maxLength) {
        document.getElementById('password-length-input').value = maxLength;
        document.getElementById('password-length').value = maxLength;
    } else {
        document.getElementById('password-length').value = value;
    }
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        alert('Please generate a password first!');
    }
}
