const formLogin = document.getElementById('form-login');

if (formLogin) {
  formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
      alert('Nenhum usuário cadastrado!');
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      window.location.href = 'home.html';
      
    } else {
      alert('Email ou senha incorretos.');
    }
  });
}