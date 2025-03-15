const { TwitchClient } = require('@twitch-apis/client');
const { ChatClient } = require('@twitch-apis/irc');

const clientId = 'gp762nuuoqcoxypju8c569th9wz7q5';
const clientSecret = 'sb7gsi1j4tu7iauerqdhams6brudb3';
const oauthToken = 'oauth:av5fdnctau44pin8nrpgduqsqgofc0';
const channelName = 'spectralreid';

const client = new TwitchClient({
  clientId,
  clientSecret
});

const chatClient = new ChatClient({
  username: 'PhotoSurprise',
  oauthToken,
  channels: [channelName]
});

chatClient.connect().then(() => {
  console.log(`Le bot est maintenant connecté à ${channelName}`);
});

chatClient.on('message', (channel, user, message) => {
  if (message.toLowerCase() === '!photo') {
    console.log(`Commande !photo reçue!`);
    const imageUrl = 'https://i.ibb.co/fdMTY35q/3Fte3.webp';
    chatClient.say(channel, "Voici une photo surprise !");
  }
});

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/pBfmxytb/Allumeur.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/XrHbxHsZ/Crucifix.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/sdqDjMrQ/Cam.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/jvyzP0qk/DOTS.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/mVPFNGcD/EMF.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/67d0B0fQ/Encens.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/G39SFJLR/Livre.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/6c0LmhNV/Mentale.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/yFYy9thd/Mouvement.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/4wcSKqVF/Parabol.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/TqrTgMFT/Pied.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/6cZtt3DV/Sel.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/HfPNwHCN/Sonore.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/mVsC1dWZ/Spirit-Box.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/1YtcRMqF/Thermo.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/93f2Q6Ky/UV.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });

chatClient.on('message', (channel, user, message) => {
    if (message.toLowerCase() === '!photo') {
      console.log(`Commande !photo reçue!`);
      const imageUrl = 'https://i.ibb.co/Xx21FHGg/Lumi.webp';
      chatClient.say(channel, `Voici une photo surprise ! ${imageUrl}`);
    }
  });