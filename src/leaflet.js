import locationIcon from './images/icon-location.svg'
const myIcon = L.icon({
  iconUrl: locationIcon,
});
let map = L.map('map').setView([0, 0], 10);

const createMap = (lat, long) => {
  map.remove()
  map = L.map('map').setView([lat, long], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 100,
      attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([lat, long], {icon: myIcon}).addTo(map);
}

export default createMap