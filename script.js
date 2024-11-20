// Atualizar o status de aberto/fechado
function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda...
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    document.getElementById('current-datetime').innerText = ` - ${currentTime}`;

    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    let isOpen = false;

    // Verificar horários de funcionamento
    if ((day >= 1 && day <= 5 && hour >= 8 && hour < 18) || 
        (day === 6 && hour >= 8 && hour < 14)) {
        isOpen = true;
    }

    if (isOpen) {
        statusDot.className = 'dot green';
        statusText.innerText = 'Aberto';
    } else {
        statusDot.className = 'dot red';
        statusText.innerText = 'Fechado';
    }
}

// Redirecionar ao clicar na foto de perfil
document.getElementById('profile-img').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Atualizar status ao carregar a página
document.addEventListener('DOMContentLoaded', updateStatus);

// Atualizar o horário a cada minuto
setInterval(updateStatus, 60000);
