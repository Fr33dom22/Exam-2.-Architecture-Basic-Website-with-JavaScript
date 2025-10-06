const map = L.map("world-map", {
  scrollWheelZoom: false,
}).setView([40.6819, -73.8461], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
  maxZoom: 19,
}).addTo(map);

const customMarker = L.divIcon({
  className: "custom-marker",
  html: `
    <svg width="42" height="42">
      <use href="./images/symbol-defs.svg#icon-map-marker"></use>
    </svg>
  `,
  iconSize: [42, 42],
  iconAnchor: [21, 42],
});

L.marker([40.6819, -73.8461], { icon: customMarker }).addTo(map);

const container = map.getContainer();

let lastWheelTime = 0;

container.addEventListener(
  "wheel",
  function (e) {
    if (!e.ctrlKey) return;

    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTime < 50) return;
    lastWheelTime = now;

    if (e.deltaY < 0) {
      map.zoomIn();
    } else {
      map.zoomOut();
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.key === "=") map.zoomIn();
  if (e.key === "-") map.zoomOut();
});
