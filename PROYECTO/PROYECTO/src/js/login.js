
  document.getElementById('loginBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');


    if (email === '' || password === '') {
     message.style.color = 'red';
      message.textContent = '¡Correo o contraseña incorrectos!';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.style.color = 'red';
      message.textContent = '¡Correo electrónico no válido!';
      return;
    }

    message.style.color = 'green';
    message.textContent = 'Iniciando sesión...';

    setTimeout(() => {
      window.location.href = 'index.html'; 
    }, 1000);
  });

   

    



