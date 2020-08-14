#!/usr/bin/env python

import sys
import re
from pathlib import Path

import yaml
from bs4 import BeautifulSoup

l10n = Path(sys.path[0])
root = l10n.parents[0]
template = root / "index_template.html"

langs = {
    "en": {"yml": l10n / "en.yaml", "out": root / "index.html"},
    "pt": {"yml": l10n / "pt.yaml", "out": root / "pt/index.html"},
}


for lang, files in langs.items():
    with open(template, "r") as f:
        soup = BeautifulSoup(f.read(), "lxml")

    text = yaml.safe_load(open(files["yml"]))
    out = files["out"]
    p = re.compile(r"{{.*?}}")
    tags = ["title", "h1", "h2", "p", "div", "span", "a"]

    # change = soup.find("span", {"id": lang})
    # change.contents[0].replace_with(change.text)

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
                    el.replace_with(text[var[0]][var[1]])

    out.parents[0].mkdir(exist_ok=True)
    print(f"writing to {out}")
    with open(out, "w") as f:
        f.write(str(soup.prettify()))
