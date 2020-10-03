#!/usr/bin/env python

import re
from pathlib import Path

import yaml
from bs4 import BeautifulSoup
import markdown

templates = Path(__file__).resolve().parents[0]
root = templates.parents[0]


def parse_index():
    template = templates / "index_template.html"
    langs = {
        "en": {"yml": templates / "index_en.yaml", "out": root / "index.html"},
        "pt": {"yml": templates / "index_pt.yaml", "out": root / "pt/index.html"},
    }

    for lang, files in langs.items():
        with open(template, "r") as f:
            soup = BeautifulSoup(f.read(), "lxml")

        text = yaml.safe_load(open(files["yml"]))
        out = files["out"]

        change = soup.find("a", {"id": "lang"})
        change["href"] = "/pt/" if lang == "en" else "/"
        change.string = "Português" if lang == "en" else "English"

        change = soup.find("a", {"id": "help"})
        change["href"] = "/docs/" if lang == "en" else "/pt/docs/"

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
                            m.group()
                            .replace("{{", "")
                            .replace("}}", "")
                            .strip()
                            .split(".")
                        )
                        el.replace_with(text[var[0]][var[1]])

        out.parents[0].mkdir(exist_ok=True)
        print(f"writing to {out}")
        with open(out, "w") as f:
            f.write(str(soup.prettify()))


def parse_docs():
    template = templates / "docs_template.html"
    langs = {
        "en": {"md": templates / "docs_en.md", "out": root / "docs/index.html"},
        "pt": {"md": templates / "docs_pt.md", "out": root / "pt/docs/index.html"},
    }

    for lang, files in langs.items():
        with open(template) as f:
            soup = BeautifulSoup(f.read(), "lxml")

        with open(files["md"]) as f:
            text = f.read()

        md = markdown.Markdown(extensions=["toc", "tables"])
        html = md.convert(text)
        parsed = BeautifulSoup(html, "html.parser")

        change = soup.find("a", {"id": "lang"})
        change["href"] = "/pt/docs/" if lang == "en" else "/docs/"
        change.string = "Português" if lang == "en" else "English"

        change = soup.find("a", {"id": "tool"})
        change["href"] = "/" if lang == "en" else "/pt/"
        change.string = "To the tool" if lang == "en" else "À plataforma!"

        for a in parsed.div.find_all("a"):
            id = a["href"][1:]
            for h in parsed.find_all("h1"):
                if id == h["id"]:
                    span = parsed.new_tag("span")
                    span.string = a.text
                    a.replace_with(span)

        for div in parsed.find_all("div", {"class": "toc"}):
            soup.find("nav", {"id": "toc"}).append(div.ul)
            div.decompose()

        content = parsed.new_tag("div")
        content.append(parsed)
        soup.find("main", {"id": "content"}).append(content)

        out = files["out"]
        out.parents[0].mkdir(exist_ok=True)
        print(f"writing to {out}")
        with open(files["out"], "w") as f:
            f.write(str(soup.prettify()))


if __name__ == "__main__":
    parse_index()
    parse_docs()
