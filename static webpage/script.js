
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('form-message');

    // Simple validation
    if (!username || !email || !password) {
        messageElement.textContent = 'All fields are required!';
        return;
    }

    if (password.length < 6) {
        messageElement.textContent = 'Password must be at least 6 characters long!';
        return;
    }

    // If validation passes
    messageElement.textContent = 'Registration successful!';
    console.log('User Registered:', { username, email, password });
});