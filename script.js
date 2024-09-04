document.getElementById('generate-btn').addEventListener('click', generateRandomPassword);

function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    const minLength = 8; 
    const maxLength = 16; 
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
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
