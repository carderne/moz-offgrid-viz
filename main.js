/* global mapboxgl */

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

let modalRoot = get("modal-root");
let modal = query(".modal");
let about = get("about");

let filters = {
  pop: get("range-pop"),
  grid: get("range-grid"),
};

let toggles = {
  clusters: get("toggle-clusters"),
  grid: get("toggle-grid"),
  satellite: get("toggle-satellite"),
};

about.onclick = openModal;
modalRoot.onclick = rootClick;
modal.onclick = modalClick;

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/carderne/ckbw6t28y0a4e1iqqzk28d5vd?fresh=true",
  center: [35, -18],
  zoom: 5,
  maxZoom: 16,
  minZoom: 5,
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
    "top-right"
  );
  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  // Layer toggles
  for (let key in toggles) {
    toggles[key].onchange = toggleLayer;
  }

  // Call function when range slider value changes
  for (let key in filters) {
    filters[key].oninput = filterUpdate;
  }

  // Style cursor when entering/leaving clusters
  map.on("mouseenter", "clusters-poly", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "clusters-poly", () => {
    map.getCanvas().style.cursor = "";
  });

  // Open info box when click on a cluster
  // And close info box when click anywhere else
  map.on("click", "clusters-poly", showClusterInfo);
  map.on("click", (e) => {
    if (e.defaultPrevented === false) {
      query(".cluster").style.display = "none";
    }
  });
});

function filterUpdate() {
  let valFilter = [
    "all",
    [">=", "pop", parseFloat(filters.pop.value)],
    [">=", "grid", parseFloat(filters.grid.value)],
  ];

  map.setFilter("clusters-poly", valFilter);
  //map.setFilter("clusters-line", filters);
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
    pop: props.pop.toFixed(0),
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
  };

  for (let key in props) {
    get("cluster-" + key).textContent = props[key];
  }
}

function toggleLayer(e) {
  let toggleMap = {
    "toggle-clusters": ["clusters-poly", "clusters-line"],
    "toggle-grid": ["gridfinder"],
    "toggle-satellite": ["mapbox-satellite"],
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
