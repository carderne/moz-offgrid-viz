/* global mapboxgl */

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

let modalRoot = get("modal-root");
let modal = query(".modal");
let toggleClusters = get("toggle-clusters");
let toggleSatellite = get("toggle-satellite");
let about = get("about");

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w";
let maxBounds = [
  [15, -35],
  [55, -5],
];
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/carderne/ckbw6t28y0a4e1iqqzk28d5vd?fresh=true",
  center: [35, -18],
  zoom: 7,
  maxZoom: 14,
  minZoom: 5,
  maxBounds: maxBounds,
});

map.on("load", () => {
  map.addControl(
    new mapboxgl.ScaleControl({
      maxWidth: 200,
      unit: "metric",
    }),
    "top-right"
  );
  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  modalRoot.onclick = rootClick;
  modal.onclick = modalClick;
  toggleClusters.onchange = toggleLayer;
  toggleSatellite.onchange = toggleLayer;
  about.onclick = openModal;

  // Style cursor when entering/leaving clusters
  map.on("mouseenter", "clusters-poly", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "clusters-poly", () => {
    map.getCanvas().style.cursor = "";
  });

  map.on("click", "clusters-poly", showClusterInfo);
  map.on("click", (e) => {
    if (e.defaultPrevented === false) {
      query(".cluster").style.display = "none";
    }
  });
});

function showClusterInfo(e) {
  e.preventDefault();
  query(".cluster").style.display = "block";

  let props = e.features[0].properties;
  props = {
    id: props.fid,
    village: props.village_name,
    adm3: props.adm3_posto,
    adm2: props.adm2_district,
    adm1: props.adm1_province,
    pop: props.pop.toFixed(0),
    hh: props.households.toFixed(0),
    popd: props.pop_density.toFixed(0),
    area: props.area.toFixed(2),
    ntl: props.ntl.toFixed(2),
    gdp: props.gdp.toFixed(2),
    grid: props.gridfinder.toFixed(2),
    elec: props.electrified,
    travel: props.travel.toFixed(0),
    city: props.nearest_city,
    cityd: props.city_dist.toFixed(0),
    urban: props.urban_level.toFixed(0),
    health: props.health_sites,
    school: props.schools,
    lat: props.lat,
    lng: props.long,
  };

  for (let key in props) {
    get("cluster-" + key).textContent = props[key];
  }
}

function toggleLayer(e) {
  let toggleMap = {
    "toggle-satellite": ["mapbox-satellite"],
    "toggle-clusters": ["clusters-poly", "clusters-line"],
  };
  let layers = toggleMap[e.target.id];
  let vis = e.target.checked ? "visible" : "none";
  layers.forEach((layer) => {
    map.setLayoutProperty(layer, "visibility", vis);
  });
}

function rootClick() {
  modalRoot.classList.remove("visible");
}

function openModal() {
  modalRoot.classList.add("visible");
}

function modalClick(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
