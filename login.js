document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    if (userType === 'admin' && username === 'Administrador' && password === '123') {
        localStorage.setItem('userType', 'admin');
        window.location.href = 'index.html';
    } else if (userType === 'normal' && username === 'Usuário' && password === '123') {
        localStorage.setItem('userType', 'normal');
        window.location.href = 'index.html';
    } else {
        document.getElementById('loginAlert').innerText = 'Usuário ou senha inválidos';
    }
});
