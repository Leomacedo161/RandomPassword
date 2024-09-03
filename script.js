function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    const minLength = 8; // comprimento mínimo da senha
    const maxLength = 16; // comprimento máximo da senha
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById('password').value = password;
}


function copyToClipboard() {
    const password = document.getElementById('password');
    navigator.clipboard.writeText(password.value).then(() => {
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

