// Função para atualizar a data e hora
function updateDatetime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const datetime = now.toLocaleString();
    document.getElementById('current-datetime').textContent = `${datetime}`;
    
    // Determina se o supermercado está aberto ou fechado
    const statusText = document.getElementById('status-text');
    const statusDot = document.getElementById('status-dot');
    if ((hours >= 8 && hours < 18 && (now.getDay() >= 1 && now.getDay() <= 5)) || 
        (hours >= 8 && hours < 14 && now.getDay() === 6)) {
        statusText.textContent = 'Aberto';
        statusDot.classList.add('open');
        statusDot.classList.remove('closed');
    } else {
        statusText.textContent = 'Fechado';
        statusDot.classList.add('closed');
        statusDot.classList.remove('open');
    }
}

// Chama a função a cada segundo
setInterval(updateDatetime, 1000);
