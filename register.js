const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Зупиняємо стандартну поведінку форми

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Перевірка, чи співпадають паролі
        if (password !== confirmPassword) {
            alert("Паролі не співпадають!");
            return;
        }

        // Зберігаємо ім'я користувача та пароль в localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password); 

        alert("Реєстрація успішна!");
        window.location.href = "login.html";  // Перехід на сторінку входу
    });
}


