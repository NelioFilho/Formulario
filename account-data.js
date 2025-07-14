document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender =
        document.querySelector('input[name="gender"]:checked')?.value ||
        document.querySelector('input[id="other"]:checked')?.value || null;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    const userData = {
        firstName,
        lastName,
        birthdate,
        email,
        gender,
        password,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Conta criada com sucesso!');
    window.location.href = 'index.html';
});