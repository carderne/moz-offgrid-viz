mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w';
let maxBounds = [
  [15, -35],
  [55, -5]
];
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/carderne/ckbw6t28y0a4e1iqqzk28d5vd',
  center: [35, -18],
  zoom: 5,
  maxZoom: 14,
  minZoom: 5,
  maxBounds: maxBounds
});

map.on('load', () => {
  map.addControl(new mapboxgl.NavigationControl());
});

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

let modalRoot = get('modal-root');
let modal = query('.modal');
let toggleSatellite = get('toggle-satellite');

modalRoot.addEventListener('click', rootClick);
modal.addEventListener('click', modalClick);
toggleSatellite.addEventListener('change', toggleLayer);

function toggleLayer(e) {
  toggleMap = {
    'toggle-satellite': 'mapbox-satellite'
  }
  vis = e.target.checked ? 'visible' : 'none';
  map.setLayoutProperty(toggleMap[e.target.id], 'visibility', vis);
}

function rootClick() {
  modalRoot.classList.remove('visible');
}

function openModal() {
  modalRoot.classList.add('visible');
}

function modalClick(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}
