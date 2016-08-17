var map = new L.Map('map');
map.setView([52.52111, 13.40988], 16, false);

new L.TileLayer('https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png', {
  attribution: 'Map tiles &copy; <a href="http://mapbox.com">MapBox</a>',
  maxZoom: 18,
  maxNativeZoom: 20
}).addTo(map);

var osmb = new OSMBuildings(map).date(new Date('2015-07-15 10:00:00'));
osmb.load();

//************************************************************

var wallColor, roofColor, shadows = true;

function setStyle(el, type) {
  if (type === 'wallColor') {
    wallColor = el.style.backgroundColor;
  }
  if (type === 'roofColor') {
    roofColor = el.style.backgroundColor;
  }
  if (type === 'shadows') {
    shadows = el.checked;
  }

  osmb.style({ wallColor:wallColor, roofColor:roofColor, shadows:shadows });
}
