[TOC]

# Summary
## Project summary
This project was developed to support the off-grid energy sector in Mozambique. It is also a showcase of the value that open data, satellite imagery, and modern geospatial techniques can bring to development.

The project consists of two core components:

1. **Data:** Combining official government data with openly shared data (such as population, urban level) and raw satellite imagery, to create a database of "settlements", ranging from 50 to 100,000 people, with attached information about each, from number of households, to estimated electricity demand and pollution levels.

2. **Visualization:** Bringing together the above data, together with some simple filtering and controls and a modern web-map interface, to allow all users to access and investigate the data. This also serves as an entry-point to the project, and allows users to download all data for analysis in GIS or spreadsheet software.

Both of these are designed to be useful to a wide variety of people: government decision-makers and experts, off-grid companies and their staff, along with the local and international communities of stakeholders and citizens.

All processes used in creating this data and visualization are openly licensed and shared, so that others may benefit from them. They live on GitHub, in [moz-offgrid-data](https://github.com/carderne/moz-offgrid-data) and [moz-offgrid-viz](https://github.com/carderne/moz-offgrid-viz). The sources for all raw input files are linked, along with their various licenses.

If you have questions, comments, or suggestions about this project, please [get in touch.](#get-in-touch)

# Methodology
## Data sources
The full list of data sources used in this project is shown in the table below. Note that any changes will first be made in the [GitHub repository](https://github.com/carderne/moz-offgrid-data), so please look there for the most up-to-date list. Wherever possible, the respective licenses are shown for each dataset. Please let the team know if any links, names or licenses are incorrect.

| Type | Source | License |
| ---- | ------ | ------- |
| Population | [Facebook HRSL](https://data.humdata.org/dataset/mozambique-high-resolution-population-density) | Creative Commons Attribution International |
| Population | [Worldpop](https://www.worldpop.org/geodata/summary?id=6404) | Creative Commons Attribution 4.0 International |
| Population | [GHS-POP](https://ghsl.jrc.ec.europa.eu/download.php?ds=pop) | Creative Commons Attribution 4.0 International |
| Urban degree | [GHS-SMOD](https://ghsl.jrc.ec.europa.eu/download.php?ds=smod) | Creative Commons Attribution 4.0 International |
| Grid | [gridfinder](https://zenodo.org/record/3628142) | Creative Commons Attribution 4.0 International |
| Grid | [Transmission network](https://energydata.info/dataset/mozambique-electricity-transmission-network-2017) | Creative Commons Attribution 4.0 |
| Spatial electricity access | [GDESSA](https://data.mendeley.com/datasets/kn4636mtvg/4) | CC BY 4.0 |
| Electricity statistics | [EDM Master Plan 2018](https://portal.edm.co.mz/sites/default/files/documents/Reports/INTEGRATED%20MASTER%20PLAN%202018-2043.pdf#pdfjs.action=download) | |
| Distance to cities | [JRC Global Accessibility Map](https://forobs.jrc.ec.europa.eu/products/gam/download.php) | Not specified - but most EU data is CC BY 4.0 |
| GDP | [UNEP/DEWA/GRID-Geneva GDP 2010](https://preview.grid.unep.ch/index.php?preview=data&events=socec&evcat=1&lang=eng) | UN license, Free for non-commercial |
| Admin boundaries | [GADM](https://gadm.org/download_country_v3.html) | Free for non-commercial use, noredistribution |
| Admin boundaries | [Natural Earth Admin 0](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) | Public domain |
| Compilation | [USAID RtM](https://dec.usaid.gov/dec/content/Detail_Presto.aspx?vID=47&ctID=ODVhZjk4NWQtM2YyMi00YjRmLTkxNjktZTcxMjM2NDBmY2Uy&rID=NTU5NDcy) | General USAID DEC license, Creative Commons Attribution-No Derivatives 4.0 International License |
| Night time lights | [NOAA VIIRS](https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_MONTHLY_V1_VCMCFG) | No copyright |
| NDVI | [Sentinel-2](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR) | Copernicus Sentinel Data Terms and Conditions (attribution) |
| NO2 emissions | [Sentinel-5P](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_NO2) | Copernicus Sentinel Data Terms and Conditions (attribution) |
| Hydropower resources | [African Small Hydro Potential](https://energydata.info/dataset/small-and-mini-hydropower-potential-in-sub-saharan-africa) | Creative Commons Attribution 4.0 |
| OpenStreetMap | [OpenStreetMap](https://download.geofabrik.de/africa.html) | Open Data Commons Open Database License |
| OpenStreetMap | [HOT Feature Exports](https://data.humdata.org/search?organization=hot&q=mozambique) | Open Database License (ODC-ODbL) |
| Settlements | [UN IOM Mozambique settlements](https://data.humdata.org/dataset/mozambique-settlement-shapefiles) | Non-commercial, no redistribute |
| Settlements | [OCHA Main Cities](https://data.humdata.org/dataset/mozambique-main-cities) |   Creative Commons Attribution International |
| Health | [OCHA Health Facilities](https://data.humdata.org/dataset/mozambique-health-facilities) | Public domain |
| Energy | [OCHA Energy Facilities](https://data.humdata.org/dataset/mozambique-energy-facilities) | Creative Commons Attribution International |
| Rivers | [OCHA Stream Network](https://data.humdata.org/dataset/mozambique-rivers-and-stream-network) | Creative Commons Attribution International |
| Poverty | [OPHI Poverty Rate](https://data.humdata.org/dataset/mozambique-poverty-rate) |     Creative Commons Attribution International |
| Affordability | [USAID Power Africa surveys]() | |
| Admin boundaries | [OCHA Admin Boundaries](https://data.humdata.org/dataset/mozambique-administrative-levels-0-3) | humanitarian use only |

## Clustering
In order to make this data easier to interpret for different users, the data above are processed to create individual "clusters" for each settlement. That is, a cluster of houses and buildings that represent a single village or town. As this process is automated, these do not always match up perfectly with existing names and boundaries. This is an ongoing process, and feedback is welcome on how to improve the data!

The starting point for the clusters is the [High Resolution Settlement Layer](https://data.humdata.org/dataset/mozambique-high-resolution-population-density), created by Facebook. This provides high resolution information on population in a raster format: a uniform grid of cells where each cell is 30 metres wide. To convert this into vector format (i.e., polygons and shapes for each settlement), the algorithm finds neighbouring populated cells, and merges these together. Some other operations are then performed to remove clusters that are too small or large, or join clusters where necessary.

Once these bare clusters are prepared, we can any and all of the above datasets to them as attributes. Grid data is used to calculate the distance from each cluster to the grid. GDP data is used to calculate the GDP/capita in each cluster. Population, schools and health facilities are used to estimate energy demand. The table below shows all attributes that have already been added to the clusters.

*As better data becomes available, we can improve on these attributes and add new ones!*

| Attribute              | Name      | Unit    | Source           |
| ---------              | ----      | ----    | ------           |
| Province               | adm1      |         | OCHA             |
| Province code          | adm1_code |         | OCHA             |
| District               | adm2      |         | OCHA             |
| District code          | adm2_code |         | OCHA             |
| Posto                  | adm3      |         | OCHA             |
| Posto code             | adm3_code |         | OCHA             |
| Settlement             | name      |         | IOM Settlements  |
| Latitude               | lat       | deg     |                  |
| Longitude              | lon       | deg     |                  |
| Area                   | area      | km2     |                  |
| Population             | pop       |         | HRSL             |
| Households             | hh        |         | HRSL             |
| Population density     | popd      | pop/km2 | HRSL             |
| Urban type             | urban     |         | GHSL SMOD        |
| Nearest city           | city      |         | OCHA Main Cities |
| Nearest city distance  | cityd     | km      | OCHA Main Cities |
| Travel time to city    | travel    | hours   | JRC              |
| Health facilities      | health    |         | OCHA             |
| Schools                | schools   |         | OSM              |
| Grid distance          | grid      | km      | gridfinder/OSM   |
| Electricity access     | elec      |         | gridfinder/OSM   |
| Agricultural indicator | agri      |         | NDVI             |
| Growth                 | growth    |         | ML with S2 image |
| Emissions              | emissions |         | NO2              |
| NTL                    | ntl       |         | VIIRS            |
| GDP                    | gdp       | USD/cap | UNEP             |
| Poverty rate           | poverty   |         |                  |
| Markets                | markets   |         |                  |
| Telecom towers         | telecom   |         |                  |
| Electricity access     | prov_elec |         | USAID            |
| Poverty rate           | prov_pov  |         | OPHI             |
| Demand                 | demand    | kW      |                  |

The full process is outlined in the [repository](https://github.com/carderne/moz-offgrid-data), including exact instructions and scripts needed to arrive at the final clusters files.

In addition to these clusters, the more important data are also aggregated to province, district and posto levels.

The final data is available to download from the visualization platform, but can also be downloaded directly here:

- **Clusters:** [download CSV](/download/moz-clusters.csv) or [download KML](/download/moz-clusters.kml)
- **Postos:** [download XLSX](/download/moz-postos.xlsx) or [download KML](/download/moz-postos.kml)

# Visualization
## Requirements
The [visualization](/) was designed for modern Firefox, Chrome and Edge browsers. We recommend to use one of these if available. The tool requires JavaScript to be enabled. The site does not require cookies, or any kind of account to be created, and there is no form of user-tracking used.

The visualization relies on loading the separate data sources and map background imagery. Spending a few minutes using the tool will probably require around 10 MB of data to be downloaded, depending on many different area you look it. This should decrease as you use the tool more and the data is saved inside your browser.

## Exploring the data
When you load the tool, you will be greeted with a screen similar to the one below. The filters, controls and download links are in the left panel, while the map and all data are displayed in the main area on the right. You can move around the map by clicking and dragging (or using the arrow keys) and you can zoom in and out by scrolling, or using the **+** and **-** buttons in the bottom right.

*Note: wherever you see text that is <span style="text-decoration:underline;text-decoration-style:dotted;">dotted-underlined,</span> you can hover on it to get a small help box!*

<figure>
<img load="lazy" src="/assets/docs-home.png" alt="Viz tool home screen">
<figcaption>This is what the home screen looks like, ready to explore Mozambique!</figcaption>
</figure>

If you zoom in, you will see much more detail about the location and size of each cluster. You can click on an individual cluster (highlighted in purple below) and a pop-up in the top-right of the screen will display a summary of information about that cluster. Note that the full list of data from above is excluded, but can be access if you download the cluster files!

<figure>
<img load="lazy" src="/assets/docs-details.png" alt="Cluster information">
<figcaption>Remember that you can download the full dataset to get more information.</figcaption>
</figure>

## Filters and layers
The filters can be used to control which clusters are displayed, based on population, grid distance, and population density. Please see the video below for an example!

<figure>
<video width="100%" height="500" controls>
<source src="/assets/docs-filters.mp4" type="video/mp4">
Your browser does not support the video tag.
</source>
</video>
<figcaption>You can use the filters to find the most promising and needy markets.</figcaption>
</figure>

The "Layers" section has toggles that enable and disable certain layers. You can experiment with these to see how they work!

<figure>
<video width="100%" height="500" controls>
<source src="/assets/docs-layers.mp4" type="video/mp4">
Your browser does not support the video tag.
</source>
</video>
<figcaption>Explore and choose the most useful combination of layers.</figcaption>
</figure>

# Contact
## Get in touch
Please get in touch
