// Função para atualizar a data e hora
function updateDatetime() {
    const now = new Date();
    const datetime = now.toLocaleString();
    document.getElementById('current-datetime').textContent = `${datetime}`;

    // Determina se o supermercado está aberto ou fechado
    const statusText = document.getElementById('status-text');
    const statusDot = document.getElementById('status-dot');
    const hours = now.getHours();
    if ((hours >= 8 && hours < 18 && (now.getDay() >= 1 && now.getDay() <= 5)) || (hours >= 8 && hours < 14 && now.getDay() === 6)) {
        statusText.textContent = 'Aberto';
        statusDot.style.backgroundColor = 'green';
    } else {
        statusText.textContent = 'Fechado';
        statusDot.style.backgroundColor = 'red';
    }
}

// Função para verificar se o usuário está logado
function checkLoginStatus() {
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    const profileImg = document.getElementById('profile-img');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Se não estiver logado, esconde as opções do menu e redireciona ao clicar
    if (!loggedIn) {
        profileImg.src = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'; // Ícone de anônimo
        profileImg.style.backgroundColor = 'red'; // Cor vermelha se não estiver logado
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                alert('Faça login para acessar essa página.');
                window.location.href = 'index.html';
            });
        });
    } else {
        profileImg.style.backgroundColor = ''; // Remove a cor vermelha
    }
}

// Atualiza a data e hora a cada segundo
setInterval(updateDatetime, 1000);
checkLoginStatus();
