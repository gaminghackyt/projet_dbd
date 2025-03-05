window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    loadingScreen.style.animation = "fadeOut 90000s forwards";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 1000);
});

const clientId = "u9osn46jv4n143noqhgrb1ch0x350h";
const accessToken = "3spbf57rxhgru1mgr74semp420y5ny";
const userLogin = "spectralreid";

async function getUserId() {
    try {
        const response = await fetch(`https://api.twitch.tv/helix/users?login=${userLogin}`, {
            headers: {
                "Client-ID": clientId,
                "Authorization": `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        return data.data.length > 0 ? data.data[0].id : null;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'ID Twitch :", error);
        return null;
    }
}

async function checkTwitchLive() {
    try {
        const userId = await getUserId();
        if (!userId) {
            console.error("Impossible de récupérer l'ID du streamer.");
            return;
        }

        const twitchStatus = document.getElementById("twitch-status");
        const twitchPlayer = document.getElementById("twitch-player");

        const response = await fetch(`https://api.twitch.tv/helix/streams?user_id=${userId}`, {
            headers: {
                "Client-ID": clientId,
                "Authorization": `Bearer ${accessToken}`
            }
        });

        const data = await response.json();

        if (data.data.length > 0) {
            twitchStatus.textContent = "🔴 En LIVE sur Twitch !";
            twitchPlayer.src = `https://player.twitch.tv/?channel=${userLogin}&parent=${window.location.hostname}`;
        } else {
            const vodResponse = await fetch(`https://api.twitch.tv/helix/videos?user_id=${userId}&type=archive`, {
                headers: {
                    "Client-ID": clientId,
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            const vodData = await vodResponse.json();
            if (vodData.data.length > 0) {
                twitchStatus.textContent = "📼 Dernière rediffusion Twitch :";
                twitchPlayer.src = `https://player.twitch.tv/?video=${vodData.data[0].id}&parent=${window.location.hostname}`;
            } else {
                twitchStatus.textContent = "❌ Aucune rediffusion disponible.";
                twitchPlayer.innerHTML = "<p>Aucune vidéo disponible.</p>";
            }
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des infos Twitch :", error);
    }
}

window.addEventListener("load", checkTwitchLive);

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".container a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const href = this.href;

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    document.body.classList.remove("fade-out");
});