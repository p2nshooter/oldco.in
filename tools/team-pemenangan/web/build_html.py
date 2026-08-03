#!/usr/bin/env python3
"""Menyusun aplikasi web Team Pemenangan menjadi satu berkas HTML offline.

Seluruh CSS, JavaScript, dan gambar ditanam ke dalam satu berkas sehingga bisa
dibuka langsung lewat klik ganda — tanpa server, tanpa internet, tanpa berkas
pendamping. Logo ditanam sebagai data URI dari aset yang sudah dibersihkan
latarnya oleh ../prepare_logos.py.

Pemakaian:
    python3 build_html.py [keluaran.html]
"""

from __future__ import annotations

import base64
import io
import mimetypes
import pathlib
import sys

HERE = pathlib.Path(__file__).parent
SRC = HERE / "src"
ASSETS = HERE.parent / "assets"

# ukuran tampil terbesar di aplikasi 200 px; 300 px sumber menjaga logo tetap
# tajam di layar hi-dpi maupun saat dicetak sebagai segel kartu
LOGO_MAKS = 300
POSTER_MAKS = 760


def data_uri(path: pathlib.Path, maks: int | None = None, mutu: int = 82) -> str:
    """Kembalikan data URI; gambar diperkecil bila melebihi `maks` piksel."""
    data = path.read_bytes()
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    if maks:
        try:
            from PIL import Image
            im = Image.open(io.BytesIO(data))
            if max(im.size) > maks:
                im.thumbnail((maks, maks), Image.LANCZOS)
                buf = io.BytesIO()
                if im.mode == "RGBA":
                    im.save(buf, "PNG", optimize=True)
                    mime = "image/png"
                else:
                    im.convert("RGB").save(buf, "JPEG", quality=mutu, optimize=True)
                    mime = "image/jpeg"
                data = buf.getvalue()
        except ImportError:
            pass                      # tanpa Pillow: pakai berkas apa adanya
    return f"data:{mime};base64," + base64.b64encode(data).decode("ascii")


def baca(nama: str) -> str:
    return (SRC / nama).read_text(encoding="utf-8")


def build(keluaran: pathlib.Path) -> pathlib.Path:
    emblem = ASSETS / "logo-emblem.png"
    if not emblem.exists():
        print(f"peringatan: {emblem} tidak ada — jalankan ../prepare_logos.py dulu",
              file=sys.stderr)
        logo = ""
    else:
        logo = data_uri(emblem, LOGO_MAKS)

    alt = ASSETS / "logo-emblem-alt.png"
    logo_alt = data_uri(alt, 240) if alt.exists() else logo

    css = baca("styles.css")
    tubuh = baca("index.html").replace("__LOGO_EMBLEM__", logo)
    js = "\n".join(baca(n) for n in
                   ("app-core.js", "app-views.js", "app-print.js", "app-data.js",
                    "app-main.js"))

    html = f"""<!doctype html>
<html lang="id" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="Aplikasi database anggota team pemenangan — offline, tersimpan di perangkat.">
<title>Team Pemenangan — Aplikasi Database Anggota</title>
<link rel="icon" href="{logo}">
<style>
{css}
</style>
</head>
<body>
{tubuh}
<script>
const LOGO_EMBLEM = "{logo}";
const LOGO_ALT = "{logo_alt}";
</script>
<script>
/* Berkas yang sama dipakai dua cara. Dibuka lewat klik ganda (file://) ia
   bekerja apa adanya. Diletakkan di alamat web (https), berkas pendamping
   manifest dan sw.js membuatnya bisa dipasang di layar utama HP dan tetap
   terbuka saat sinyal hilang. Keduanya hanya disentuh bila alamatnya http —
   di file:// permintaan itu pasti gagal dan cuma mengotori konsol. */
(function () {{
  if (!/^https?:$/.test(location.protocol)) return;
  var m = document.createElement('link');
  m.rel = 'manifest';
  m.href = 'manifest.webmanifest';
  document.head.appendChild(m);
  if ('serviceWorker' in navigator) {{
    window.addEventListener('load', function () {{
      navigator.serviceWorker.register('sw.js').catch(function () {{ /* biarkan */ }});
    }});
  }}
}})();
</script>
<script>
{js}
</script>
</body>
</html>
"""
    keluaran.write_text(html, encoding="utf-8")
    return keluaran


if __name__ == "__main__":
    arg = sys.argv[1] if len(sys.argv) > 1 else "Aplikasi_Team_Pemenangan.html"
    out = build(pathlib.Path(arg))
    kb = out.stat().st_size / 1024
    print(f"tersimpan: {out}  ({kb:.0f} KB)")
