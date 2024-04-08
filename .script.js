// Function to handle login form submission
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password from form inputs
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Validate username and password (for demo purposes, use hardcoded values)
    if (username === 'admin' && password === 'admin') {
        // Login successful, redirect to developer console page
        window.location.href = 'https://0bl1v10nf0rg0773n.github.io/dev.html';
    } else {
        // Display error message for invalid credentials
        const loginError = document.querySelector('#loginError');
        loginError.textContent = 'Invalid username or password. Please try again.';
    }
});
