import irc.bot
import time

CLIENT_ID = 'gp762nuuoqcoxypju8c569th9wz7q5'
OAUTH_TOKEN = 'ud5nuhl9trae2u79sfebanxj3c2utm'
CHANNEL = '#spectralreid'

class Twitchbot(irc.bot.SingleServerIRCBot):
    def __init__(self, channel, oauth_token, client_id):
        self.client_id = client_id
        self.oauth_token = oauth_token
        self.channel = channel

        server = 'irc.chat.twitch.tv'
        port = 6667
        nickname = 'spectralBot'

        irc.bot.SingleServerIRCBot.__init__(self, [(server, port)], nickname, nickname)

    def on_welcome(self, c, e):
        print(f"Connecté à {self.channel}")
        c.join(self.channel)

    def on_pubmsg(self, c ,e):
        if e.argument[0].lower() == "!test":
            c.privmsg(self.channel, "test")

if __name__ == "__name__":
    bot = Twitchbot(CHANNEL, OAUTH_TOKEN, CLIENT_ID)
    bot.start()