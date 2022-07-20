const ip = document.querySelector('.ip')
const location = document.querySelector('.location')
const timezone = document.querySelector('.timezone')
const isp = document.querySelector('.isp')
import createMap from './leaflet'

const locate = async (adress) => {
  let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_vaX1O20m0nZWgzFhUoJNWRUb5YDdt${adress ? '&ipAddress=' + adress : ''}`)
  let data = await response.json()
  
  ip.innerHTML = data.ip
  location.innerHTML = `${data.location.region} ${data.location.country}`
  timezone.innerHTML = `UTC ${data.location.timezone}`
  isp.innerHTML = data.isp

  createMap(data.location.lat, data.location.lng)
}

export default locate