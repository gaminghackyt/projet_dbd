document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("https://formspree.io/f/xyzegdqv", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response-message").innerText = "Message envoyé avec succès !";
        this.reset();
    })
    .catch(error => {
        document.getElementById("response-message").innerText = "Erreur lors de l'envoi du message.";
    });
});
