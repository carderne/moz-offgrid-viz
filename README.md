# moz-offgrid-viz

Remove `?fresh=true` from map style URL before publishing.

## Convert GeoJSON to MBtiles

For clusters:
```
tippecanoe -z16 -Z5 -o clusters.mbtiles --drop-densest-as-needed clusters.geojson
```
