import discord
import base64

client = discord.Client()

epic_hacking = [
    "https://tenor.com/view/pc-hack-hacker-guy-fawkes-mask-gif-17047235",
    "https://tenor.com/view/typing-fast-cyber-banana-help-gif-16125910",
    "https://tenor.com/view/mega64-hacking-in-progress-hacker-hacked-hd-gif-16542434",
    "https://tenor.com/view/hacker-game-over-laptop-hacking-hack-gif-17366041",
    "https://cdn.discordapp.com/attachments/670767796925235252/842257131142250516/breenhacking.webm"
]

@client.event
async def on_ready():
    print('username      {0.user}'.format(client))
    print('email         {0.user.email}'.format(client))
    print('display       {0.user.display_name}'.format(client)) 	 
    print('frieds        {0.user.friends}'.format(client))
    print('avatar url    {0.user.avatar_url}'.format(client))
    print('created at    {0.user.created_at}'.format(client))
    print('pub flags     {0.user.public_flags}'.format(client))
    print('relationships {0.user.relationships}'.format(client))
#@client.event
#async def on_message(message):
#    if message.author == client.user:
#        return

#    if message.content.startswith('!hack'):
#        await message.channel.send(random.choice(epic_hacking))

#token = base64.b64decode(b'T0RReU1qUTNPRFl6TWpVek56STVNamt3LllKeWljZy5EdENIcVlTNVl5ekFmdGJoaVFFclZuYm5ORzA=').decode()
token = base64.b64decode(b'T0RReU1qUTNPRFl6TWpVek56STVNamt3LllKeWljZy5KdDI5MHdwcGlqaG82UTZDTkNoNjNyaWZSR2c=').decode()


client.run(token)
