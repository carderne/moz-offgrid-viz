#!/usr/bin/env python

import sys
import re
from pathlib import Path

import yaml
from bs4 import BeautifulSoup

l10n = Path(sys.path[0])
root = l10n.parents[0]
blank = l10n / "index_nolang.html"

langs = {
    "en": {
        "yml": l10n / "en.yaml",
        "out": [root / "index.html", root / "en/index.html"],
    },
    "pt": {"yml": l10n / "pt.yaml", "out": [root / "pt/index.html"]},
}

with open(blank, "r") as f:
    doc = f.read()
    soup = BeautifulSoup(doc, "lxml")

for lang, files in langs.items():
    text = yaml.safe_load(open(files["yml"]))
    out_files = files["out"]
    p = re.compile(r"{{.*?}}")
    tags = ["title", "h1", "h2", "p", "div", "span", "a"]

    for t in tags:
        res = soup.find_all(t)
        for r in res:
            el = r.find(text=True, recursive=False)
            if el is not None and len(el) > 1:
                m = p.search(el)
                if m:
                    var = (
                        m.group().replace("{{", "").replace("}}", "").strip().split(".")
                    )
                    msg = text[var[0]][var[1]]
                    el.replace_with(msg)

    for out in out_files:
        out.parents.mkdir(exist_ok=True)
        with open(out, "w") as f:
            f.write(str(soup))
