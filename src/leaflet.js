import locationIcon from './images/icon-location.svg'
const myIcon = L.icon({
  iconUrl: locationIcon,
});

const createMap = (lat, long) => {
  let map = L.map('map').setView([lat, long], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 100,
      attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([lat, long], {icon: myIcon}).addTo(map);
}

export default createMap