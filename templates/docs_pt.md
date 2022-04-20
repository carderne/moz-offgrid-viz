[TOC]

# Como usar esta ferramenta
## Requisitos
A [visualização](/) foi desenhada para as últimas versões dos navegadores Firefox, Chrome e Edge, portanto, de forma a evitar erros na visualização, recomendamos o uso destes navegadores se disponiveis. A ferramenta requer que o JavaScript esteja ativado. O site não requer a criação de cookies, nem a criação de qualquer tipo de conta, e não há forma de rastreamento de usuários.

A visualização depende do carregamento de fontes de dados separadas e imagens de fundo do mapa. Passar alguns minutos usando a ferramenta provavelmente exigirá o download de cerca de 10 MB de dados, dependendo das diversas áreas em que estiver. Isso deve diminuir à medida que usa mais a ferramenta e os dados são guardados pelo seu navegador.

## Explorando os dados
Ao carregar a ferramenta, será saudado com uma janela semelhante à que é apresentada abaixo. Os filtros, controles e links de download estão no painel esquerdo, enquanto o mapa e todos os dados são exibidos na área principal à direita. O utilizador pode mover o mapa clicando e arrastando (ou usando as teclas de seta) e aumentar e diminuir o zoom com a roda do rato ou utilisando os botões ** + ** e ** - ** no canto inferior direito.

*Observação: quando este texto é visualizado <span style="text-decoration:underline;text-decoration-style:dotted;">pontilhado e sublinhado,</span> o utilizador pode passar o ponteiro do rato sobre ele para obter uma pequena caixa de ajuda!*

<figure>
<img load="lazy" src="/assets/docs-home.png" alt="Viz tool home screen">
<figcaption>Esta é a aparência da tela inicial, pronta para explorar Moçambique!</figcaption>
</figure>

Ao aumentar o zoom, mais detalhes sobre a localização e o tamanho de cada cluster serão mostrados. Pode clicar num cluster individual (destacado em roxo abaixo) e um pop-up no canto superior direito da tela exibirá um resumo das informações sobre esse cluster. Observe que a lista completa de dados acima foi excluída, mas esta pode ser acessada se o arquivos dos clusters for descarregada!

<figure>
<img load="lazy" src="/assets/docs-details.png" alt="Cluster information">
<figcaption>O conjunto de dados completo pode ser descarregado de forma a obter mais informações sobre cada cluster.</figcaption>
</figure>

## Filtros e camadas
Os filtros podem ser usados para controlar que clusters são exibidos, com base na população, distância da rede e densidade populacional. O seguinte vídeo oferece um exemplo de como utilizar esta funcionalidade!

<figure>
<video width="100%" height="500" controls>
<source src="/assets/docs-filters.mp4" type="video/mp4">
O seu navegador não suporta a tag de vídeo.
</fonte>
</video>
<figcaption>Os filtros podem ser usados de forma a identificar as necessidades energéticas e o potencial de locais e regiões específicas.</figcaption>
</figure>

A secção "Layers" tem filtros que permitem habilitar e desabilitar determinados layers.

<figure>
<video width="100%" height="500" controls>
<source src="/assets/docs-layers.mp4" type="video/mp4">
O seu navegador não suporta a tag de vídeo.
</fonte>
</video>
<figcaption>Explore and seleccione a combinação de layers mais apropriada.</figcaption>
</figure>

# Resumo
## Resumo do projeto
Este projeto foi desenvolvido para apoiar o sector de energia fora da rede (off-grid) em Moçambique. É também uma vitrine do valor que dados públicos, imagens de satélite e técnicas geoespaciais modernas podem trazer para o desenvolvimento deste sector.

O projeto consiste em dois componentes principais:

1. **Dados:** Combinando dados oficiais do governo com dados disponíveis publicamente (como população, nível urbano) e imagens de satélite brutas, de forma a criar um banco de dados de "clusters", variando de 50 a 100.000 pessoas, com informações anexadas sobre cada um, incluindo, entre outros, o número de famílias, estimativa da procura energética e níveis de poluição.

2. **Visualização:** Reunir os dados mencionados acima, com alguns filtros e controles simples e uma interface web moderna, para permitir que todos os usuários acessem e analisem os dados. Isto também serve como um ponto de entrada para o projecto e permite que o usuário descarregue todos os dados para análise em softwares SIG (Sistemas de Informação Geográfica) ou em uma folha de cálculos. 

Ambos são projectados para serem úteis a uma ampla variedade de actores: tomadores de decisão e técnicos governamentais, sector privado fora da rede (empresas e seus colaboradores), parceiros internacionais e locais.

Todos os processos utilizados na criação dos dados e sua visualização são licenciados e partilhados abertamente, para que outros se possam beneficiar deles. Estes processos estão armazenados no GitHub, em [moz-offgrid-data](https://github.com/GET-invest-Mozambique/moz-offgrid-data) e [moz-offgrid-viz](https://github.com/GET-invest-Mozambique/get-invest-mozambique.github.io). As fontes de todos os arquivos de entrada brutos estão indicadas, assim como as suas licenças.

Caso haja dúvidas, comentários ou sugestões sobre este projecto, por favor [entre em contato](mailto:rosario.loayza@giz.de)

# Metodologia
## Fontes de dados
A lista completa de fontes de dados usadas neste projeto é mostrada na tabela abaixo. Observe que quaisquer alterações serão feitas primeiro no [repositório GitHub] (https://github.com/carderne/moz-offgrid-data), portanto, procure lá a lista mais atualizada. Sempre que possível, as respectivas licenças são mostradas para cada conjunto de dados. Por favor, informe a equipa se algum link, nome ou licença estiver incorreto.

| Tipo | Fonte | Licença |
| ---- | ------ | ------- |
| População | [Facebook HRSL](https://data.humdata.org/dataset/highresolutionpopulationdensitymaps-moz) | Creative Commons Attribution International |
| População | [Worldpop](https://www.worldpop.org/geodata/summary?id=6404) | Creative Commons Attribution 4.0 International |
| População | [GHS-POP](https://ghsl.jrc.ec.europa.eu/download.php?ds=pop) | Creative Commons Attribution 4.0 International |
| Grau urbano | [GHS-SMOD](https://ghsl.jrc.ec.europa.eu/download.php?ds=smod) | Creative Commons Attribution 4.0 International |
| Rede | [gridfinder](https://zenodo.org/record/3628142) | Creative Commons Attribution 4.0 International |
| Rede | [Rede de transmissão](https://energydata.info/dataset/mozambique-electricity-transmission-network-2017) | Creative Commons Attribution 4.0 |
| Acesso espacial de electricidade | [GDESSA](https://data.mendeley.com/datasets/kn4636mtvg/4) | CC BY 4.0 |
| Estatísticas de electricidade | [EDM Master Plan 2018](https://portal.edm.co.mz/sites/default/files/documents/Reports/INTEGRATED%20MASTER%20PLAN%202018-2043.pdf#pdfjs.action=download) | |
| Distância a cidades | [JRC Global Accessibility Map](https://forobs.jrc.ec.europa.eu/products/gam/download.php) | Não especificado - mas a maioria dos dados da UE é CC BY 4.0 |
| GDP | [UNEP/DEWA/GRID-Geneva GDP 2010](https://preview.grid.unep.ch/index.php?preview=data&events=socec&evcat=1&lang=eng) | Licença da ONU, grátis para não comercial |
| Limites administrativos | [GADM](https://gadm.org/download_country_v3.html) | Gratuito para uso não comercial, sem redistribuição |
| Limites de administrativos | [Natural Earth Admin 0](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) | Domínio público |
| Compilação | [USAID RtM](https://dec.usaid.gov/dec/content/Detail_Presto.aspx?vID=47&ctID=ODVhZjk4NWQtM2YyMi00YjRmLTkxNjktZTcxMjM2NDBmY2Uy&rID=NTU5NDcy) | General USAID DEC license, Creative Commons Attribution-No Derivatives 4.0 International License |
| Luzes noturnas | [NOAA VIIRS](https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_MONTHLY_V1_VCMCFG) | Sem direitos autorais |
| NDVI | [Sentinel-2](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR) | Termos e Condições de Dados do Copernicus Sentinel (atribuição) |
| Emissões de NO2 | [Sentinel-5P](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_NO2) | Termos e Condições de Dados do Copernicus Sentinel (atribuição) |
| Recursos hidroelétricos | [African Small Hydro Potential](https://energydata.info/dataset/small-and-mini-hydropower-potential-in-sub-saharan-africa) | Creative Commons Attribution 4.0 |
| OpenStreetMap | [OpenStreetMap](https://download.geofabrik.de/africa.html) | Licença de Banco de Dados Aberto |
| OpenStreetMap | [HOT Feature Exports](https://data.humdata.org/search?organization=hot&q=mozambique) | Licença de banco de dados aberto (ODC-ODbL) |
| Assentamentos | [UN IOM Mozambique settlements](https://data.humdata.org/dataset/mozambique-settlement-shapefiles) | Não comercial, não redistribua |
| Assentamentos | [OCHA Main Cities](https://data.humdata.org/dataset/mozambique-main-cities) |   Creative Commons Attribution International |
| Saúde | [OCHA Health Facilities](https://data.humdata.org/dataset/mozambique-health-facilities) | Domínio público |
| Energia | [OCHA Energy Facilities](https://data.humdata.org/dataset/mozambique-energy-facilities) | Creative Commons Attribution International |
| Rios | [OCHA Stream Network](https://data.humdata.org/dataset/mozambique-rivers-and-stream-network) | Creative Commons Attribution International |
| Pobreza | [OPHI Poverty Rate](https://data.humdata.org/dataset/mozambique-poverty-rate) |     Creative Commons Attribution International |
| Acessibilidade| [USAID Power Africa surveys]() | |
| Limites de administrativos | [OCHA Admin Boundaries](https://data.humdata.org/dataset/mozambique-administrative-levels-0-3) | uso humanitário apenas |

## Cluster (Agrupamentos/Aglomerados)
A fim de tornar estes dados mais fáceis de interpretar para diferentes usuários, os dados acima são processados para criar agrupamentos individuais para cada assentamento. Ou seja, um agrupamento de casas e edifícios que representam um único povoamento. Como este processo é automatizado, eles nem sempre correspondem perfeitamente aos nomes e limites existentes desses locais. Este é um processo contínuo e comentários são bem-vindos sobre como melhorar os dados!

O ponto de partida para os clusters é o [High Resolution Settlement Layer] (https://data.humdata.org/dataset/highresolutionpopulationdensitymaps-moz), criado pelo Facebook. Estes dados de alta resolução sobre a população são fornecidos em formato matricial (raster): uma rede uniforme de células em que cada célula tem 30 metros de largura. Para a sua conversão em formato vetorial (ou seja, polígonos e formas para cada povoado), o algoritmo encontra células vizinhas com povoações e junta-as. Algumas outras operações são executadas para remover clusters que são demasiado grandes ou pequenos, ou unir aglomerados quando apropriado.

Uma vez produzidos os clusters, podemos-lhes atribuir os dados acima como atributos. Os dados da rede são utilizados  para calcular a distância de cada aglomerado à rede. Os dados do PIB são usados para calcular o PIB per capita em cada aglomerado. População, escolas e instalações de saúde são usadas para estimar a procura de energia. A seguinte tabela indica todos os atributos que foram adicionados aos aglomerados.

*Quando melhores dados se tornarem disponíveis, podemos melhorar esses atributos e adicionar novos!*

| Atributo              | Nome      | Unidade    | Fonte           |
| ---------              | ----      | ----    | ------           |
| Província               | adm1      |         | OCHA             |
| Código de província          | adm1_code |         | OCHA             |
| Distrito               | adm2      |         | OCHA             |
| Código do distrito          | adm2_code |         | OCHA             |
| Posto                  | adm3      |         | OCHA             |
| Código de Posto             | adm3_code |         | OCHA             |
|Povoação             | nome      |         | IOM Assentamentos  |
| Latitude               | lat       | deg     |                  |
| Longitude              | lon       | deg     |                  |
| Área                   | área      | km2     |                  |
| População             | pop       |         | HRSL             |
| Famílias             | hh        |         | HRSL             |
| Densidade populacional     | popd      | pop/km2 | HRSL             |
| Tipo urbano             | urban     |         | GHSL SMOD        |
| Cidade mais próxima           | cidade      |         | OCHA Cidades principais |
| Distância da cidade mais próxima  | cityd     | km      | OCHA Cidades principais |
| Tempo de viagem para a cidade    | viajem | horas   | JRC              |
| Instalações de saúde      | saúde    |         | OCHA             |
| Escolas                | escolas   |         | OSM              |
| Distância da rede          | rede      | km      | gridfinder/OSM   |
| Acesso à eletricidade     | elec      |         | gridfinder/OSM   |
| Indicador agrícola | agri      |         | NDVI             |
| Crescimento                | crescimento    |         | ML com imagem S2 |
| Emissões              | emissões |         | NO2              |
| NTL                    | ntl       |         | VIIRS            |
| GDP                    | gdp       | USD/cap | UNEP             |
| Taxa de pobreza           | pobreza   |         |                  |
| Mercados                | mercados   |         |                  |
| Torres de telecomunicações         | telecom   |         |                  |
| Acesso à eletricidade     | prov_elec |         | USAID            |
| Taxa de pobreza           | prov_pov  |         | OPHI             |
| Demanda                 | demanda    | kW      |                  |

O processo completo é descrito no [repositório] (https://github.com/carderne/moz-offgrid-data), incluindo instruções exatas e scripts necessários para produzir os aglomerados finais.

Além dos aglomerados, os dados mais relevantes são também agregados aos níveis de província, distrito e posto.

Os dados finais estão disponíveis para download na plataforma de visualização, mas também podem ser descarregados diretamente aqui:

- **Aglomerados:** [download CSV](/download/moz-clusters.csv) or [download KML](/download/moz-clusters.kml)
- **Postos:** [download XLSX](/download/moz-postos.xlsx) or [download KML](/download/moz-postos.kml)

# Programas do Cluster de Energia
## Energising Development 
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_ca_4.png" alt="Cooperacao alema" srcset="/assets/logo_ca_1.png 1x, /assets/logo_ca_2.png 2x, /assets/logo_ca_3.png 3x, /assets/logo_ca_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_nlmfa_4.jpg" alt="Ministry of Foreign Affairs of the Netherlands" srcset="/assets/logo_nlmfa_1.png 1x, /assets/logo_nlmfa_2.png 2x, /assets/logo_nlmfa_3.png 3x, /assets/logo_nlmfa_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_norad_4.png" alt="Norad" srcset="/assets/logo_norad_1.png 1x, /assets/logo_norad_2.png 2x, /assets/logo_norad_3.png 3x, /assets/logo_norad_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_sdc_4.png" alt="SDC" srcset="/assets/logo_sdc_1.png 1x, /assets/logo_sdc_2.png 2x, /assets/logo_sdc_3.png 3x, /assets/logo_sdc_4.png 4x"></div>
</div>
Energising Development (EnDev) é um programa global financiado pela Alemanha, Paises Baixos, Noruega e Suíça. A EnDev atua em mais de 20 países na África, Ásia e América Latina. A EnDev apóia os governos nacionais na criação de um ambiente que possibilite o fornecimento e a procura de energia sustentável - até ao consumidor final. Uma vez que alcançar o acesso universal à energia requer modelos de negócio rentáveis, o EnDev aborda a problemática da pobreza energética com uma perspectiva baseada no mercado, colocando o enfoque nas necessidades dos consumidores.

Desde 2006, a EnDev forneceu acesso à energia sustentável a mais de um milhão de pessoas em Moçambique por meio da densificação da rede, mini-redes, sistemas solares domésticos, fogões melhorados e densificação da rede. A EnDev apoiou a criação de um fundo de financiamento baseado em resultados: [FASER](https://www.faser.co.mz/) (Fundo de Acesso Sustentável as energias Renováveis em Moçambique) lançado em julho de 2019. Desde então, o fundo cresceu em termos de financiamento: o GBE aderiu em 2020 e a UE decidiu escalar o incentivo CovidPlus em 2021.

Na área de densificação da rede, a EnDev Moçambique está a trabalhar com a empresa estatal de eletricidade EdM para fornecer acesso à rede elétrica para famílias desfavorecidas. Mais informações estão disponíveis online: [Energizing Change - EnDev](https://endev.info/).

Implementado por:
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_giz_4.png" alt="GIZ" srcset="/assets/logo_giz_1.png 1x, /assets/logo_giz_2.png 2x, /assets/logo_giz_3.png 3x, /assets/logo_giz_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_endev_4.png" alt="Endev" srcset="/assets/logo_endev_1.png 1x, /assets/logo_endev_2.png 2x, /assets/logo_endev_3.png 3x, /assets/logo_endev_4.png 4x"></div>
</div>
<div class="gap"></div>

## Green People's Energy

<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_ca_4.png" alt="Cooperacao alema" srcset="/assets/logo_ca_1.png 1x, /assets/logo_ca_2.png 2x, /assets/logo_ca_3.png 3x, /assets/logo_ca_4.png 4x"></div>
</div>

A iniciativa Green People's Energy para a África (GBE) visa melhorar as condições para o fornecimento descentralizado de energia em certos países da África Subsaariana com a participação de cidadãos e empresas. Em Moçambique, o GBE está focado na promoção do uso produtivo de energias renováveis descentralizadas e na eletrificação de instituições sociais. O objetivo acima de tudo é o desenvolvimento económico, através do desenvolvimento das cadeias de valor locais e do emprego.

Ao aconselhar as empresas locais e ao promover centros de formação locais, a população local fica habilitada em assumir o desenvolvimento nas suas próprias mãos. Ao oferecer oportunidades de formação, o programa pretende capacitar os funcionários das empresas nos mercados de sistemas solares domésticos e fogões melhorados. A GBE Moçambique também apoia a capacitação no sector público. Ao aconselhar os actores estatais sobre o planeamento da electrificação rural, a segurança do investimento para os actores privados é melhorada para permitir uma electrificação mais eficiente e rápida das áreas rurais em Moçambique. Mais informações disponíveis online: [Green People’s Energy for Africa](https://gruene-buergerenergie.org/en/countries/mozambique/).

Implementado por:
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_giz_4.png" alt="GIZ" srcset="/assets/logo_giz_1.png 1x, /assets/logo_giz_2.png 2x, /assets/logo_giz_3.png 3x, /assets/logo_giz_4.png 4x"></div>
</div>
<div class="gap"></div>

## GET.invest

<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_promove_4.png" alt="ProMove" srcset="/assets/logo_promove_1.png 1x, /assets/logo_promove_2.png 2x, /assets/logo_promove_3.png 3x, /assets/logo_promove_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_eu_4.png" alt="EU" srcset="/assets/logo_eu_1.png 1x, /assets/logo_eu_2.png 2x, /assets/logo_eu_3.png 3x, /assets/logo_eu_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_ca_4.png" alt="Cooperacao alema" srcset="/assets/logo_ca_1.png 1x, /assets/logo_ca_2.png 2x, /assets/logo_ca_3.png 3x, /assets/logo_ca_4.png 4x"></div>
</div>
O GET.invest é um programa europeu de mobilização de investimentos em energias renováveis, apoiado pela União Europeia, Alemanha, Suécia, Paises Baixos e Áustria. Desde 2019, o programa opera uma janela de país em Moçambique financiado pela União Europeia e Alemanha, implementado pela Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ).

GET.invest Moçambique faz parte do PROMOVE ENERGIA - uma estratégia abrangente entre a UE e o Governo de Moçambique para fornecer às famílias e empresas em áreas rurais o acesso a energia sustentável e acessível. Mais informações estão disponíveis online em [GET.invest](https://www.get-invest.eu/).

Implementado por:
<div class="modal-logos-row">
<div class="logo"><img src="/assets/logo_giz_4.png" alt="GIZ" srcset="/assets/logo_giz_1.png 1x, /assets/logo_giz_2.png 2x, /assets/logo_giz_3.png 3x, /assets/logo_giz_4.png 4x"></div>
<div class="logo"><img src="/assets/logo_getinvest_4.png" alt="GET.invest" srcset="/assets/logo_getinvest_1.png 1x, /assets/logo_getinvest_2.png 2x, /assets/logo_getinvest_3.png 3x, /assets/logo_getinvest_4.png 4x"></div>
</div>
