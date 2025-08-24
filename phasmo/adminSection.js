const adminSectionHTML = `
    <section class="content">
    <div class="text left">
    <h2>Roue défis</h2>
    <a href="../AdminSection/RoueDefi/index.html" class="btn">Accéder</a>
    </div>
    <img src="../AdminSection/RoueDefi/Image/spinning.png" alt="Section Admin" class="site">
    </section>
`;

// Vérifier et injecter la section
document.addEventListener("DOMContentLoaded", () => {
    const role = localStorage.getItem("userRole");

    if (role === "Admin") {
        // Cherche où insérer la section (par ex. à la fin du contenu principal)
        const mainContent = document.getElementById("main-content");

        if (mainContent) {
            mainContent.insertAdjacentHTML("beforeend", adminSectionHTML);
        }
    }
});