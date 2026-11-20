"""Draws the Ultimate Shooter icon (dark tile, teal corner brackets, coral slash) and writes .ico + .png."""
import sys
from PIL import Image, ImageDraw

S = 1024
CORAL = (255, 90, 95, 255)
TEAL = (42, 212, 196, 255)


def draw(size_hint):
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # tile with a vertical gradient
    tile = Image.new("RGBA", (S, S))
    td = ImageDraw.Draw(tile)
    for y in range(S):
        t = y / S
        c = (int(30 - 12 * t), int(36 - 14 * t), int(48 - 18 * t), 255)
        td.line([(0, y), (S, y)], fill=c)
    mask = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=200, fill=255)
    img.paste(tile, (0, 0), mask)

    # teal corner brackets (thicker when the icon will be tiny)
    w = 64 if size_hint <= 32 else 46
    m, L = 170, 190
    for (x, y, dx, dy) in [(m, m, 1, 1), (S - m, m, -1, 1), (m, S - m, 1, -1), (S - m, S - m, -1, -1)]:
        d.rectangle([min(x, x + dx * L), min(y, y + dy * w), max(x, x + dx * L), max(y, y + dy * w)], fill=TEAL)
        d.rectangle([min(x, x + dx * w), min(y, y + dy * L), max(x, x + dx * w), max(y, y + dy * L)], fill=TEAL)

    # coral slash (parallelogram)
    cx, cy, h, bw, lean = S / 2, S / 2, 520, 170, 150
    d.polygon([
        (cx - bw / 2 + lean, cy - h / 2), (cx + bw / 2 + lean, cy - h / 2),
        (cx + bw / 2 - lean, cy + h / 2), (cx - bw / 2 - lean, cy + h / 2),
    ], fill=CORAL)
    return img


def main(out_ico, out_png):
    sizes = [16, 24, 32, 48, 64, 128, 256]
    frames = [draw(s).resize((s, s), Image.LANCZOS) for s in sizes]
    frames[-1].save(out_ico, format="ICO", sizes=[(s, s) for s in sizes], append_images=frames[:-1])
    draw(512).resize((512, 512), Image.LANCZOS).save(out_png)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
