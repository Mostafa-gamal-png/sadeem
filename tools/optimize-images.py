#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ضغط الصور وإنشاء مصغّرات لمعرض العملاء أو المشاريع.

الاستخدام:
    python3 tools/optimize-images.py clients  "مسار/صورة1.jpg" "مسار/صورة2.png" ...
    python3 tools/optimize-images.py projects "مسار/صورة.jpg" ...
    python3 tools/optimize-images.py hero     "مسار/صورة.jpg"

- النسخة الكبيرة تُحفظ في assets/img/<المجموعة>/ بعرض أقصى 1600 بكسل.
- المصغّرة تُحفظ في assets/img/<المجموعة>/thumbs/ بعرض أقصى 640 بكسل.
- لا يتم قص الصورة أبدًا؛ يُحافظ على نسبة الأبعاد كاملة حتى تظهر اللافتات والشعارات كاملة.
- في النهاية يُطبع مقطع جاهز للصق في js/data.js (مع ترك الاسم لتكتبه أنت).

يحتاج مكتبة Pillow:  pip install pillow
"""
import os
import sys
import re

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("ثبّت مكتبة Pillow أولًا:  pip install pillow")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAX_FULL = 1600
MAX_THUMB = 640
QUALITY = 82


def slug(name, index):
    base = os.path.splitext(os.path.basename(name))[0]
    base = re.sub(r"[^A-Za-z0-9]+", "-", base).strip("-").lower()
    return base or f"img-{index:02d}"


def save(im, path, max_w):
    im = im.copy()
    im.thumbnail((max_w, max_w * 2), Image.LANCZOS)
    im.save(path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    return im.size


def main():
    if len(sys.argv) < 3 or sys.argv[1] not in ("clients", "projects", "hero", "documents"):
        sys.exit(__doc__)
    group, files = sys.argv[1], sys.argv[2:]
    out_dir = os.path.join(ROOT, "assets", "img", group)
    thumb_dir = os.path.join(out_dir, "thumbs")
    os.makedirs(thumb_dir, exist_ok=True)
    snippets = []
    for i, src in enumerate(files, 1):
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        name = f"{slug(src, i)}.jpg"
        full = os.path.join(out_dir, name)
        thumb = os.path.join(thumb_dir, name)
        fw, fh = save(im, full, MAX_FULL)
        tw, th = save(im, thumb, MAX_THUMB)
        kb = os.path.getsize(full) // 1024
        print(f"✔ {name}: كبيرة {fw}x{fh} ({kb} KB) / مصغّرة {tw}x{th}")
        snippets.append(
            "  {\n"
            f'    name: "",  // اكتب اسم المنشأة كما يظهر في الصورة\n'
            f'    image: "assets/img/{group}/{name}",\n'
            f'    thumb: "assets/img/{group}/thumbs/{name}",\n'
            f'    alt: ""\n'
            "  },"
        )
    print("\n// الصق هذا داخل المصفوفة المناسبة في js/data.js:\n" + "\n".join(snippets))


if __name__ == "__main__":
    main()
