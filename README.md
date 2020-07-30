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

For adm layers:
```
tippecanoe -z11 -Z5 -o adm1.mbtiles -as -l adm1-v3 -f adm1.geojson
tippecanoe -z11 -Z5 -o adm2.mbtiles -as -l adm2-v3 -f adm2.geojson
tippecanoe -z11 -Z5 -o adm3.mbtiles -as -l adm3-v3 -f adm3.geojson
```

For grid:
```
tippecanoe -z11 -Z5 -o grid.mbtiles -as -l grid-v1 -f grid.geojson
```

## Buffered inverted border outline
Uses [Natural Earth Admin 0](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) admin layer. Following steps in QGIS.

1. First need to create a square covering the earth. Use `Create layer from extent` with the admin layer for the whole earth.
2. Then filter the admin layer with `"SOV_A3" = 'MOZ'` and buffer by 0.2 degrees.
3. Then use vector `Difference` to subtract the buffered Mozambique from the big square.
4. Save as GeoJSON for loading in Mapbox Studio.

## Create adm centroids
```
./make_centroids.py adm1.geojson
# same for others
```

# TODO

Create documentation with Sphinx/Jekyll.
