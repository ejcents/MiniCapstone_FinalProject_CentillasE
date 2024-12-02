document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleMessage = document.getElementById('toggleMessage');
    const toggleToLogin = document.getElementById('toggleToLogin');
    const loginFormSubmit = document.getElementById('loginFormSubmit');
    const registerFormSubmit = document.getElementById('registerFormSubmit');
    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Handle Login Tab Click
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        toggleMessage.innerHTML = `Don't have an account? <a href="#" id="toggleToRegister">Register here</a>`;
    });

    // Handle Register Tab Click
    registerTab.addEventListener('click', () => {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        toggleMessage.innerHTML = `Already have an account? <a href="#" id="toggleToLogin">Login here</a>`;
    });

    // Handle Login / Register Toggle Message
    toggleMessage.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'toggleToLogin') {
            loginTab.click();
        } else if (event.target && event.target.id === 'toggleToRegister') {
            registerTab.click();
        }
    });

    // Handle Login Form Submission
    loginFormSubmit.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email && password) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            loginErrorMessage.textContent = 'Please fill out both fields.';
        }
    });

    // Handle Register Form Submission
    registerFormSubmit.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        if (email && password) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert('Registration successful! You can now login.');
            loginTab.click(); // Switch to login form
        } else {
            registerErrorMessage.textContent = 'Please fill out both fields.';
        }
    });
});
