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

async function fetchDBDNews() {
    const newsFeed = document.getElementById("news-feed");

    try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://nitter.net/DeadByBHVR/rss");
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            newsFeed.innerHTML = "";

            data.items.slice(0, 5).forEach(tweet => {
                const tweetElement = document.createElement("div");
                tweetElement.classList.add("tweet");
                tweetElement.innerHTML = `
                    <p>${tweet.title}</p>
                    <a href="${tweet.link}" target="_blank">Voir sur Twitter</a>
                `;
                newsFeed.appendChild(tweetElement);
            });
        } else {
            newsFeed.innerHTML = "Aucune actualité trouvée.";
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
        newsFeed.innerHTML = "Impossible de charger les actualités.";
    }
}

document.getElementById("twitch-login").addEventListener("click", function() {
    const clientId = "odb55mg5i3ohfkfl7rmuwcrmgc0i9m";
    const redirectUri = "https://projetdbd.netlify.app";
    const scope = "user:read:email";
    const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    window.location.href = authUrl;
});

function getTwitchUser(token) {
    fetch('https://api.twitch.tv/helix/users', {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Client-ID': 'odb55mg5i3ohfkfl7rmuwcrmgc0i9m'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.data.length > 0) {
            const user = data.data[0];
            document.getElementById("twitch-avatar").src = user.profile_image_url;
            document.getElementById("twitch-username").textContent = user.display_name;
            document.getElementById("twitch-user").style.display = "flex";
            document.getElementById("twitch-login").style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const twitchUserContainer = document.getElementById("twitch-user");
    const twitchAvatar = document.getElementById("twitch-avatar");
    const twitchUsername = document.getElementById("twitch-username");
    const twitchLoginButton = document.getElementById("twitch-login");

    const user = {
        username: "SpectralReid",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/example-profile-image.png"
    };

    function handleTwitchLogin() {
        if (user) {
            twitchUsername.textContent = user.username;
            twitchAvatar.src = user.avatar;
            twitchUserContainer.style.display = "flex";
            twitchLoginButton.style.display = "none";
        }
    }

    twitchLoginButton.addEventListener("click", handleTwitchLogin);
});