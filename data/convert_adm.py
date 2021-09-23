#!/usr/bin/env python

"""
Convert adm files to GeoJSON
and calculate centroids.

Arg 1: input directory
Arg 2: output directory

./convert_adm.py ../data/admin/ ./data
"""

import sys
import warnings
from pathlib import Path

import geopandas as gpd

path_in = Path(sys.argv[1])
path_out = Path(sys.argv[2])

for adm in ["adm1", "adm2", "adm3"]:
    print("Doing", adm)
    file_in = path_in / f"{adm}.gpkg"
    file_out = path_out / f"{adm}.geojson"
    centroids_out = path_out / f"{adm}_centroids.geojson"

    gdf = gpd.read_file(file_in)
    gdf.to_file(file_out, driver="GeoJSON")

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        gdf.geometry = gdf.geometry.centroid
    gdf.to_file(centroids_out, driver="GeoJSON")
