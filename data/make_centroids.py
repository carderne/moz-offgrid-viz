#!/usr/bin/env python

"""
Create a new layer with centroids of previous layer.

Arg 1: input file

e.g. ./make_centroids.py adm1.geojson
"""

import sys
from pathlib import Path
import json
import geopandas as gpd

path = Path(sys.argv[1])
outpath = path.parents[0] / f"{path.stem}_centroids.geojson"
gdf = gpd.read_file(path)

gdf.geometry = gdf.geometry.centroid
gdf.to_file(outpath, driver="GeoJSON")
