#!/bin/bash

for f in logos/*.png; do
    name=$(echo $f | sed -r "s/.+\/(.+)\..+/\1/");
    convert $f -resize 4000x400 "$name"_4.png
    convert $f -resize 4000x300 "$name"_3.png
    convert $f -resize 4000x200 "$name"_2.png
    convert $f -resize 4000x100 "$name"_1.png
done
