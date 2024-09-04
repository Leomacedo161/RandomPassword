document.getElementById('generate-btn').addEventListener('click', generateRandomPassword);

function generateRandomPassword() {
    const length = document.getElementById('password-length').value; // Get the value range (1-100)
    let characters = '';

    // Check witch checkboxes are checked
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    // Define the character types to include in the password
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    
    // Gather the character types to include in the password
    if (includeLowercase) characters += lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    // Veify if at least one character type is selected
    if (characters === '') {
        alert('Please select at least one character type!');
        return;
    }

    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Show the password
    const passwordField = document.getElementById('password');
    passwordField.value = password;
    passwordField.classList.add('shake');
    setTimeout(() => passwordField.classList.remove('shake'), 500);
}

// Update the password length display
function updateLengthDisplay(value) {
    document.getElementById('length-display').textContent = value;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                alert('Password copied to clipboard!');
                const audio = new Audio('sounds/success.mp3');
                audio.play();
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        alert('Please generate a password first!');
    }
}
