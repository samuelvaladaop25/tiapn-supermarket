// Simulação de usuários
const users = {
    admin: "1234", // Usuário: admin, Senha: 1234
    user: "abcd",  // Usuário: user, Senha: abcd
};

// Função para verificar login
function isLoggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}

// Redirecionar se não estiver logado
function enforceLogin() {
    if (!isLoggedIn() && window.location.pathname !== "/pages/login.html") {
        window.location.href = "login.html";
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

    // Proteger páginas
    enforceLogin();

    // Formulário de login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (users[username] && users[username] === password) {
                sessionStorage.setItem("loggedIn", "true");
                window.location.href = "../index.html";
            } else {
                alert("Usuário ou senha incorretos!");
            }
        });
    }

    // Verificar links do menu
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", function (e) {
            if (!isLoggedIn()) {
                e.preventDefault();
                window.location.href = "login.html";
            }
        });
    });

    // Redirecionar na foto de perfil
    document.getElementById("profile-img").addEventListener("click", function () {
        window.location.href = "login.html";
    });
});
