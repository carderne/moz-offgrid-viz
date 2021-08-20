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

# Programmes of the Energy Cluster
## Energising Development
Energising Development (EnDev) is global programme financed by Germany, the Netherlands, Norway, and Switzerland. EnDev works in more than 20 countries across Africa, Asia and Latin America. EnDev supports national governments to create an environment that enables supply and demand of sustainable energy – to the last mile. Because achieving universal access to energy requires profitable business models.

EnDev tackles energy poverty with a market-based approach putting the focus on consumers’ needs. Since 2006, EnDev has provided sustainable energy access to more than one million people in Mozambique through grid densification, village mini-grids based on hydropower plants, solar lanterns, solar home systems and improved cookstoves. EnDev supported the establishment of a results-based financing fund: [FASER](https://www.faser.co.mz/) (Fondo de Acesso sustentável as energias renováveis em Moçambique, Fund for Sustainable Access to Renewable Energies and Efficient Technologies) was launched in July 2019. Since then, the open basket fund grew in terms of funding: GBE joined in 2020 and the EU decided to scale-up the CovidPlus incentive in 2021.

In the area of grid densification, EnDev Mozambique is working with the national state-owned electricity utility EdM to provide access to the electricity grid for disadvantaged households. More information is available online: [Energising Change - EnDev](https://endev.info/).

Implemented by:
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_giz.png" alt="GIZ"></div>
<div class="logo"><img src="/assets/logo_endev.png" alt="Endev"></div>
</div>
<div class="gap"></div>

## Green People's Energy

<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_ca.png" alt="Cooperacao alema"></div>
</div>

The initiative Green People’s Energy for Africa (GBE) aims to improve the conditions for decentralised energy supply in selected sub-Saharan African countries with the participation of citizens and companies. In Mozambique, GBE focusses on promoting the productive use of decentralised renewable energies and the electrification of social institutions. The aim above all is economic development by increasing local value chains and employment.

By advising local businesses and promoting local training centers, local people are empowered to take development into their own hands. With offering training opportunities, the programme intents to capacitate the employees of the current and potential companies in the markets for solar home systems and improved cookstoves. GBE Mozambique also supports capacity building in the public sector. By advising state actors on rural electrification planning, investment security for private actors is improved to enable more efficient and faster electrification of rural areas in Mozambique. More information is available online: [Green People’s Energy for Africa](https://gruene-buergerenergie.org/en/countries/mozambique/).

Implemented by:
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_giz.png" alt="GIZ"></div>
</div>
<div class="gap"></div>

## GET.invest

<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_promove.png" alt="ProMove"></div>
<div class="logo"><img src="/assets/logo_eu.jpg" alt="EU"></div>
<div class="logo"><img src="/assets/logo_ca.png" alt="Cooperacao alema"></div>
</div>

GET.invest is a European programme that mobilises investment in renewable energy, supported by the European Union, Germany, Sweden, the Netherlands and Austria. Since 2019, the programme has been operating a country window in Mozambique funded by the European Union and Germany, implemented by the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ).

GET.invest Mozambique is part of PROMOVE ENERGIA – a comprehensive strategy between the EU and the Government of Mozambique to provide households and businesses in rural areas with access to sustainable and affordable energy. More information is available online at [GET.invest](https://www.get-invest.eu/).

Implemented by:
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_giz.png" alt="GIZ"></div>
<div class="logo"><img src="/assets/logo_getinvest.png" alt="GET.invest"></div>
</div>
