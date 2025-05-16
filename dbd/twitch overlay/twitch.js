const channelName = "spectralreid";
const chatBox = document.getElementById("chatBox");
const socket = new WebSocket("wss://irc-ws.chat.twitch.tv");
socket.onopen = function () {
    socket.send("PASS oauth:yp66str5klvjhtpksgxk8gtsnpwujz ");
    socket.send("NICK" + channelName);
    socket.send("JOIN #" + channelName);
};
socket.onmessage = function (event) {
    const message = event.data;
    if (message.includes("PRIVMSG")) {
        const parts = message.split(":");
        const userMessage = parts[parts.lenght -1];
        const username = message.split("!")[0].substring(1);
        addChatMessage(username, message);
    }
};

function addChatMessage(username, message) {
    const newMessage = document.createElement("div");
    newMessage.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showAlert(message) {
    const alertBox = document.getElementById("alertBox");
    alertBox.innerText = message;
    alertBox.style.display = "flex";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 5000);
};

setTimeout(() => {
    showAlert("Noveau follower !");
}, 3000);