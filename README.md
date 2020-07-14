# moz-offgrid-viz

To serve locally, install and use `light-server`:
```
npm install --global light-server
```

Then from the project directory simply run `light-server -s .` to get a localhost server.

Remove `?fresh=true` from map style URL before publishing.

## Get clusters as GeoJSON
Export clusters as GeoJSON from QGIS

## Convert GeoJSON to MBtiles

For clusters:
```
# -z highest level
# -Z lowest level
# -o output file
# -as drop as needed
# -l layer name
# -f force
tippecanoe -z16 -Z5 -o clusters.mbtiles -as -l clusters-v2 -f clusters.geojson

# increment the -v2 version number each time!
```

## Buffered inverted border outline
Uses [Natural Earth Admin 0](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) admin layer. Following steps in QGIS.

1. First need to create a square covering the earth. Use `Create layer from extent` with the admin layer for the whole earth.
2. Then filter the admin layer with `"SOV_A3" = 'MOZ'` and buffer by 0.2 degrees.
3. Then use vector `Difference` to subtract the buffered Mozambique from the big square.
4. Save as GeoJSON for loading in Mapbox Studio.
