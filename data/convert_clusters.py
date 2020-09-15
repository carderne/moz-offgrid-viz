#!/usr/bin/env python

"""
Sanitise clusters GeoJSON before uploading to Mapbox.
Will overwrite file.

Arg 1: input file
Arg 2: output file

./data/convert_clusters.py ../data/clusters/clu-man-feat.gpkg ./data/clusters.geojson
"""

import sys
from pathlib import Path
import json
import geopandas as gpd

path_in = Path(sys.argv[1])
path_out = Path(sys.argv[2])


def clean(clu):
    i32 = "int32"
    f32 = "float32"
    ob = "object"
    clu["fid"] = clu.index
    clu = clu.astype(
        {
            "fid": i32,
            "pop": i32,
            "ntl": f32,
            "travel": f32,
            "gdp": i32,
            "area": f32,
            "lon": f32,
            "lat": f32,
            "grid": f32,
            "adm3": ob,
            "adm2": ob,
            "adm1": ob,
            "adm1_code": ob,
            "adm2_code": ob,
            "adm3_code": ob,
            "name": ob,
            "urban": i32,
            "city": ob,
            "cityd": i32,
            "hh": i32,
            "popd": i32,
            "elec": i32,
            "health": i32,
            "schools": i32,
            "prov_elec": i32,
            "prov_pov": i32,
            "agri": i32,
            "emissions": i32,
            "demand": i32,
            "score": i32,
            "cat": i32,
        },
        errors="ignore",
    )
    clu = clu.drop(columns=["index"], errors="ignore")
    return clu


gdf = gpd.read_file(path_in)
gdf = clean(gdf)
gdf.to_file(path_out, driver="GeoJSON")

# Manually round GeoJSON properties
# (Tried with GeoPandas but wasn't properly respected in GeoJSON export)
print("Rounding")
rounders = {
    "ntl": 2,
    "travel": 1,
    "grid": 1,
    "area": 1,
    "lon": 3,
    "lat": 3,
}
with open(path_out) as f:
    gj = json.load(f)
for i, feat in enumerate(gj["features"]):
    for col, dig in rounders.items():
        gj["features"][i]["properties"][col] = round(feat["properties"][col], dig)
with open(path_out, "w") as f:
    json.dump(gj, f)

# To get it back to one feature per line (json library messes this up
print("Saving")
gpd.read_file(path_out).to_file(path_out, driver="GeoJSON")

print(gpd.read_file(path_out).sample().T)
