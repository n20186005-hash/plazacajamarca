"""Generate PWA icons for plazacajamarca.com from the brand arcade mark.

Renders the terracotta arch logo on a solid terracotta tile (the site's
--terracotta token) at 192px, 512px, and a 512px maskable variant with the
mark kept inside the 80% safe zone.
"""
from PIL import Image
import os

SRC = r"h:/GitHub/plazacajamarca/public/images/cajamarca-arcade-mark.png"
OUT = r"h:/GitHub/plazacajamarca/public/icons"
TERRACOTTA = (184, 79, 43, 255)  # #B84F2B

os.makedirs(OUT, exist_ok=True)
mark = Image.open(SRC).convert("RGBA")


def make(size, fill_ratio):
    canvas = Image.new("RGBA", (size, size), TERRACOTTA)
    m = mark.copy()
    m.thumbnail((int(size * fill_ratio), int(size * fill_ratio)))
    x = (size - m.width) // 2
    y = (size - m.height) // 2
    canvas.alpha_composite(m, (x, y))
    return canvas.convert("RGB")


make(192, 1.0).save(os.path.join(OUT, "icon-192.png"))
make(512, 1.0).save(os.path.join(OUT, "icon-512.png"))
make(512, 0.8).save(os.path.join(OUT, "icon-512-maskable.png"))

print("PWA icons written to", OUT)
