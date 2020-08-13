/* global mapboxgl */

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

let modalRoot = get("modal-root");
let modal = query(".modal");
let about = get("about");
let clusterExit = get("cluster-exit");
let modalExit = get("modal-exit");

let filters = {
  clustersPop: get("range-pop"),
  clustersGrid: get("range-grid"),
  gridSource: get("toggle-grid"),
};

let toggles = {
  clusters: get("toggle-clusters"),
  adm3: get("toggle-adm3"),
  satellite: get("toggle-satellite"),
};

let formatter = new Intl.NumberFormat("en-US");

about.onclick = openModal;
modalRoot.onclick = rootClick;
modal.onclick = modalClick;
modalExit.onclick = rootClick;
clusterExit.onclick = closeClusterInfo;

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/carderne/ckbw6t28y0a4e1iqqzk28d5vd?fresh=true",
  center: [35, -18],
  zoom: 5,
  minZoom: 5,
  maxZoom: 16,
  maxBounds: [
    [15, -35],
    [55, -5],
  ],
});

// Any code that needs to interact with map elements must only
// be activated once the Mapbox map has loaded.
map.on("load", () => {
  // Scale and navigation controls
  map.addControl(
    new mapboxgl.ScaleControl({
      maxWidth: 200,
      unit: "metric",
    }),
    "bottom-right"
  );
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

  // Layer toggles
  for (let key in toggles) {
    toggles[key].onchange = toggleLayer;
  }
  toggleLayer();

  // Call function when range slider value changes
  for (let key in filters) {
    filters[key].oninput = filterUpdate;
  }
  filterUpdate();

  map.setPaintProperty("clusters", "fill-opacity", [
    "case",
    ["boolean", ["feature-state", "hover"], false],
    1,
    0.5,
  ]);

  // Style cursor when entering/leaving clusters
  map.on("mouseenter", "clusters", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "clusters", () => {
    map.getCanvas().style.cursor = "";
  });

  // Open info box when click on a cluster
  // And close info box when click anywhere else
  map.on("click", "clusters", showClusterInfo);
  map.on("click", (e) => {
    if (e.defaultPrevented === false) {
      closeClusterInfo();
    }
  });
});

function filterUpdate() {
  map.setFilter("clusters", [
    "all",
    [">=", "pop", parseFloat(filters.clustersPop.value)],
    [">=", "grid", parseFloat(filters.clustersGrid.value)],
  ]);

  let gridFilter = filters.gridSource.checked ? null : ["==", "source", "osm"];
  map.setFilter("grid", gridFilter);
}

function showClusterInfo(e) {
  e.preventDefault();
  query(".cluster").style.display = "block";

  let props = e.features[0].properties;
  props = {
    id: props.fid,
    village: props.village,
    adm3: props.adm3,
    adm2: props.adm2,
    adm1: props.adm1,
    pop: formatter.format(props.pop.toFixed(0)),
    hh: props.hh.toFixed(0),
    popd: props.popd.toFixed(0),
    area: props.area.toFixed(2),
    ntl: props.ntl.toFixed(2),
    gdp: props.gdp.toFixed(2),
    grid: props.grid.toFixed(2),
    elec: props.elec,
    travel: props.travel.toFixed(0),
    city: props.city,
    cityd: props.cityd.toFixed(0),
    urban: props.urban.toFixed(0),
    health: props.health,
    school: props.school,
    lat: props.lat,
    lng: props.lng,
    ndvi: props.ndvi,
    no2: props.no2,
  };

  for (let key in props) {
    let cell = get("cluster-" + key);
    if (cell !== null) {
      cell.textContent = props[key];
    }
  }
}

function closeClusterInfo() {
  query(".cluster").style.display = "none";
}

function toggleLayer() {
  let toggleMap = {
    "toggle-clusters": ["clusters"],
    "toggle-adm3": ["adm3", "adm3-label"],
    "toggle-satellite": ["mapbox-satellite"],
  };

  for (let key in toggles) {
    let layers = toggleMap[toggles[key].id];
    let vis = toggles[key].checked ? "visible" : "none";
    layers.forEach((layer) => {
      map.setLayoutProperty(layer, "visibility", vis);
    });
  }
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

queryAll(".range-wrap").forEach((wrap) => {
  let range = wrap.querySelector(".range");
  let bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  let val = range.value;
  let min = range.min ? range.min : 0;
  let max = range.max ? range.max : 100;
  let newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;

  let pc = 100 - parseInt((100 * val) / max);
  range.style.background =
    "linear-gradient(to left, #15BE69 0%, #15BE69 " +
    pc +
    "%, #fff " +
    pc +
    "%, white 100%)";
}
