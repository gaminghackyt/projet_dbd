const roles = {
    "UXjPKfkupkZUzG": "Modo",
    "tNFwTyijaNWNEr": "Admin"
};

function createAuthModal() {
    const overlay = document.createElement("div");
    overlay.id = "auth-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    overlay.innerHTML = `
        <div id="auth-box" style="background:#111; padding:20px; border-radius:12px; text-align:center; color:#fff; max-width:300px;">
            <h2>Connexion</h2>
            <input type="password" id="auth-input" placeholder="Entrez le code" style="padding:8px; width:90%; margin:10px 0;"/>
            <br>
            <button id="auth-submit" style="padding:8px 15px; margin:5px;">Valider</button>
            <button id="auth-cancel" style="padding:8px 15px; margin:5px;">Annuler</button>
            <p id="auth-error" style="color:red; display:none;">Code invalide</p>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("auth-submit").addEventListener("click", handleAuth);
    document.getElementById("auth-cancel").addEventListener("click", () => overlay.remove());
}

function handleAuth() {
    const input = document.getElementById("auth-input").value.trim();
    const errorMsg = document.getElementById("auth-error");

    if (roles[input]) {
        const role = roles[input];
        saveRole(role);
        showRole(role);
        document.getElementById("auth-overlay").remove();
    } else {
        errorMsg.style.display = "block";
    }
}

function saveRole(role) {
    localStorage.setItem("userRole", role);
}

function getSavedRole() {
    return localStorage.getItem("userRole");
}

function showRole(role) {
    const btnConnexion = document.querySelector(".formulaire");
    if (btnConnexion) btnConnexion.style.display = "none";

    const oldStatus = document.getElementById("role-status");
    if (oldStatus) oldStatus.remove();

    const statusDiv = document.createElement("div");
    statusDiv.id = "role-status";
    statusDiv.style.position = "fixed";
    statusDiv.style.top = "8px";
    statusDiv.style.right = "10px";
    statusDiv.style.background = "#222";
    statusDiv.style.padding = "8px 12px";
    statusDiv.style.borderRadius = "20px";
    statusDiv.style.color = "white";
    statusDiv.style.display = "flex";
    statusDiv.style.alignItems = "center";
    statusDiv.style.gap = "8px";
    statusDiv.style.zIndex = "9999";
    statusDiv.style.cursor = "pointer";
    statusDiv.style.transition = "all 0.3s ease";

    // Logo
    const logo = document.createElement("div");
    logo.textContent = role === "Modo" ? "M" : "A";
    logo.style.background = role === "Modo" ? "#4caf50" : "#f44336";
    logo.style.width = "24px";
    logo.style.height = "24px";
    logo.style.borderRadius = "50%";
    logo.style.display = "flex";
    logo.style.justifyContent = "center";
    logo.style.alignItems = "center";
    logo.style.fontWeight = "bold";
    logo.style.flexShrink = "0";

    // Texte
    const text = document.createElement("span");
    text.textContent = `Connecté en tant que ${role}`;
    text.style.whiteSpace = "nowrap";
    text.style.transition = "opacity 0.3s ease";

    statusDiv.appendChild(logo);
    statusDiv.appendChild(text);
    document.body.appendChild(statusDiv);

    // Après 3 secondes → réduire (garder que le logo)
    setTimeout(() => {
        text.style.opacity = "0";
        setTimeout(() => {
            text.style.display = "none";
            statusDiv.style.padding = "6px";
            statusDiv.style.borderRadius = "50%";
        }, 300);
    }, 3000);

    // Hover → ré-ouvrir
    statusDiv.addEventListener("mouseenter", () => {
        text.style.display = "inline";
        setTimeout(() => (text.style.opacity = "1"), 10);
        statusDiv.style.padding = "8px 12px";
        statusDiv.style.borderRadius = "20px";
    });

    // Mouse leave → refermer
    statusDiv.addEventListener("mouseleave", () => {
        text.style.opacity = "0";
        setTimeout(() => {
            text.style.display = "none";
            statusDiv.style.padding = "6px";
            statusDiv.style.borderRadius = "50%";
        }, 300);
    });

    // Menu contextuel
    const menu = document.createElement("div");
    menu.style.position = "absolute";
    menu.style.top = "40px";
    menu.style.right = "0";
    menu.style.background = "#333";
    menu.style.padding = "10px";
    menu.style.borderRadius = "8px";
    menu.style.display = "none";
    menu.style.flexDirection = "column";
    menu.style.gap = "6px";
    menu.style.boxShadow = "0 2px 6px rgba(0,0,0,0.4)";
    menu.style.zIndex = "10000";

    // Bouton déconnexion
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Déconnexion";
    logoutBtn.style.background = "#f44336";
    logoutBtn.style.color = "white";
    logoutBtn.style.border = "none";
    logoutBtn.style.padding = "6px 10px";
    logoutBtn.style.borderRadius = "6px";
    logoutBtn.style.cursor = "pointer";
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("userRole");
        location.reload();
    });

    // (OPTIONNEL) Accéder au profil (commenté)
    /*
    const profileBtn = document.createElement("button");
    profileBtn.textContent = "Mon profil";
    profileBtn.style.background = "#4caf50";
    profileBtn.style.color = "white";
    profileBtn.style.border = "none";
    profileBtn.style.padding = "6px 10px";
    profileBtn.style.borderRadius = "6px";
    profileBtn.style.cursor = "pointer";
    profileBtn.addEventListener("click", () => {
        window.location.href = "/profil.html?role=" + role;
    });
    menu.appendChild(profileBtn);
    */

    menu.appendChild(logoutBtn);
    statusDiv.appendChild(menu);

    // Toggle menu
    statusDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    // Fermer si clic ailleurs
    document.addEventListener("click", () => {
        menu.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const btnConnexion = document.querySelector(".formulaire");

    if (btnConnexion) {
        btnConnexion.addEventListener("click", (e) => {
            e.preventDefault();
            createAuthModal();
        });
    }

    const savedRole = getSavedRole();
    if (savedRole) {
        showRole(savedRole);
    }
});