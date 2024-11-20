// Função para verificar login
function isLoggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}

// Função para redirecionar se não estiver logado
function enforceLogin() {
    if (!isLoggedIn()) {
        window.location.href = "pages/login.html";
    }
}

// Atualizar status de aberto/fechado
function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda...
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    document.getElementById("current-datetime").innerText = ` - ${currentTime}`;

    const statusDot = document.getElementById("status-dot");
    const statusText = document.getElementById("status-text");

    let isOpen = false;

    if ((day >= 1 && day <= 5 && hour >= 8 && hour < 18) || 
        (day === 6 && hour >= 8 && hour < 14)) {
        isOpen = true;
    }

    statusDot.className = `dot ${isOpen ? "green" : "red"}`;
    statusText.innerText = isOpen ? "Aberto" : "Fechado";
}

// Ações ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    updateStatus();

    // Verificar links do menu
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", function (e) {
            if (!isLoggedIn()) {
                e.preventDefault();
                window.location.href = "pages/login.html";
            }
        });
    });

    // Redirecionar na foto de perfil
    document.getElementById("profile-img").addEventListener("click", function () {
        window.location.href = "pages/login.html";
    });
});

// Formulário de login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "../index.html";
        });
    }
});
