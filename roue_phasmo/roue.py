import random
from PIL import Image, ImageDraw, ImageFont
import io
import twitchio
from twitchio.ext import commands

objects = [
    {"name": "Projecteur D.O.T.S.", "image": "image/DOTS.png"},
    {"name": "Lecteur EMF", "image": "image/EMF.png"},
    {"name": "Livre d'écriture fantomatique", "image": "image/Livre.png"},
    {"name": "Spirit Box", "image": "image/SpiritBox.png"},
    {"name": "Thermomètre", "image": "image/Thermo.png"},
    {"name": "Lampe UV", "image": "image/UV.png"},
    {"name": "Caméra Vidéo", "image": "image/Cam.png"},
    {"name": "Crucifix", "image": "image/Crucifix.png"},
    {"name": "Lumière à feu", "image": "image/Lumi.png"},
    {"name": "Équipement de tête", "image": "image/3Fte3.png"},
    {"name": "Allumeur", "image": "image/Allumeur.png"},
    {"name": "Encens", "image": "image/Encens.png"},
    {"name": "Détecteur de mouvement", "image": "image/Mouvement.png"},
    {"name": "Microphone parabolique", "image": "image/Parabol.png"},
    {"name": "Sel", "image": "image/Sel.png"},
    {"name": "Médicament de santé mentale", "image": "image/Mentale.png"},
    {"name": "Capteur sonore", "image": "image/Sonore.png"},
    {"name": "Trépied", "image": "image/Pied.png"}
]

def create_random_image():
    obj = random.choice(objects)
    img = Image.open(obj["image"])

    img = img.rotate(random.randint(0, 360))

    width, height = img.size
    new_img = Image.new("RGB", (width + 20, height + 20), color="white")
    new_img.paste(img, (10, 10))

    draw = ImageDraw.Draw(new_img)
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except IOError:
        font = ImageFont.load_default()

    text = obj["name"]
    text_width, text_height = draw.textsize(text, font=font)
    text_postion = ((new_img.width - text_width) // 2, new_img.height - text_height - 5)
    draw.text(text_postion, text, fill="black", font=font)

    return new_img

bot = commands.Bot(
    token="oauth:av5fdnctau44pin8nrpgduqsqgofc0",
    client_id="gp762nuuoqcoxypju8c569th9wz7q5",
    client_secret="sb7gsi1j4tu7iauerqdhams6brudb3",
    prefix="!",
    initial_channels=["#spectralreid"],
)

@bot.command(name="photo")
async def photo(ctx):
    img = create_random_image()
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)

    await ctx.send("https://i.ibb.co/fdMTY35q/3Fte3.webp")
    await ctx.send("https://i.ibb.co/pBfmxytb/Allumeur.webp")
    await ctx.send("https://i.ibb.co/sdqDjMrQ/Cam.webp")
    await ctx.send("https://i.ibb.co/XrHbxHsZ/Crucifix.webp")
    await ctx.send("https://i.ibb.co/jvyzP0qk/DOTS.webp")
    await ctx.send("https://i.ibb.co/mVPFNGcD/EMF.webp")
    await ctx.send("https://i.ibb.co/67d0B0fQ/Encens.webp")
    await ctx.send("https://i.ibb.co/G39SFJLR/Livre.webp")
    await ctx.send("https://i.ibb.co/6c0LmhNV/Mentale.webp")
    await ctx.send("https://i.ibb.co/yFYy9thd/Mouvement.webp")
    await ctx.send("https://i.ibb.co/4wcSKqVF/Parabol.webp")
    await ctx.send("https://i.ibb.co/TqrTgMFT/Pied.webp")
    await ctx.send("https://i.ibb.co/6cZtt3DV/Sel.webp")
    await ctx.send("https://i.ibb.co/HfPNwHCN/Sonore.webp")
    await ctx.send("https://i.ibb.co/mVsC1dWZ/Spirit-Box.webp")
    await ctx.send("https://i.ibb.co/1YtcRMqF/Thermo.webp")
    await ctx.send("https://i.ibb.co/93f2Q6Ky/UV.webp")
    await ctx.send("https://i.ibb.co/Xx21FHGg/Lumi.webp")

@bot.event
async def event_ready():
    print(f"Le bot est maintenant connecté à Twitch en tant que {bot.nick}.")

if __name__ == "__main__":
    bot.run()