# moz-offgrid-viz

To serve locally, install and use `light-server`:
```
npm install --global light-server
```

Then from the project directory simply run `light-server -s .` to get a localhost server.

Remove `?fresh=true` from map style URL before publishing.

## Convert GeoJSON to MBtiles

For clusters:
```
tippecanoe -z16 -Z5 -o clusters.mbtiles --drop-densest-as-needed clusters.geojson
```

## Buffered inverted border outline
Uses [Natural Earth Admin 0](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) admin layer. Following steps in QGIS.

1. First need to create a square covering the earth. Use `Create layer from extent` with the admin layer for the whole earth.
2. Then filter the admin layer with `"SOV_A3" = 'MOZ'` and buffer by 0.2 degrees.
3. Then use vector `Difference` to subtract the buffered Mozambique from the big square.
4. Save as GeoJSON for loading in Mapbox Studio.
