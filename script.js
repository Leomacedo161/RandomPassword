document.getElementById('generate-btn').addEventListener('click', generateRandomPassword);

function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    const minLength = 8; // Minimum password length
    const maxLength = 16; // Maximum password length
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value)
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        alert('Please generate a password first!');
    }
}
