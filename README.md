# moz-offgrid-viz

To serve locally, install and use `light-server`:
```
npm install --global light-server
```

Then from the project directory simply run `light-server -s .` to get a localhost server.

Remove `?fresh=true` from map style URL before publishing.

## Localization
All manual edits should be made to `index_template.html`. Language files are in `./l10n`. (Currently `en.yaml` and `pt.yaml`.)

Run `./l10n/translate.py` to create the localized `index.html` files for each language. (English at root and others at e.g. `./pt/index.html`.)

## Convert to GeoJSON
Use the script to convert clusters to GeoJSON:
```bash
./data/convert_clusters.py ../data/clusters/clu-man-feat.gpkg ./data/clusters.geojson
```

Convert adm files and create centroids:
```bash
./data/convert_adm.py ../data/admin/ ./data/
```

## Create files for download
Need to use QGIS to manually convert clusters and adm files to CSV and KML.

## Convert GeoJSON to MBtiles
For clusters:
```
# -z highest level
# -Z lowest level
# -o output file
# -as drop as needed
# -l layer name
# -f force
tippecanoe -z16 -Z5 -o ./data/clusters.mbtiles -as -l clusters -f ./data/clusters.geojson
```

For adm layers:
```
tippecanoe -z11 -Z5 -o ./data/adm3.mbtiles -as -l adm3 -f ./data/adm3.geojson
```

For grid:
```
tippecanoe -z11 -Z5 -o ./data/grid.mbtiles -as -l grid -f ./data/grid.geojson
```

Use the replace functionality on Mapbox Studio to replace tilesets, rather than uploading new ones.

## Buffered inverted border outline
Uses [Natural Earth Admin 0](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) admin layer. Following steps in QGIS.

1. First need to create a square covering the earth. Use `Create layer from extent` with the admin layer for the whole earth.
2. Then filter the admin layer with `"SOV_A3" = 'MOZ'` and buffer by 0.2 degrees.
3. Then use vector `Difference` to subtract the buffered Mozambique from the big square.
4. Save as GeoJSON for loading in Mapbox Studio.

# TODO
- Add hover/click styling to clusters
- Check all cluster attributes
- Fix tooltip in clusters table
