document.addEventListener('DOMContentLoaded', function () {
    // Перевіряємо, чи є збережені дані в localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        // Заповнюємо поля форми за допомогою збережених значень
        document.getElementById('username').value = savedUsername;
        document.getElementById('password').value = savedPassword;
    }

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Перевірка введених даних
            if (username === savedUsername && password === savedPassword) {
                alert("Вхід успішний!");
                window.location.href = "index.html";  // Перехід на головну сторінку
            } else {
                alert("Невірне ім'я користувача або пароль!");
            }
        });
    }
});
