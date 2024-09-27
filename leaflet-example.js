
var map = L.map('map').setView([21.249891343052767, 81.60505487700581], 13);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([21.249891343052767, 81.60505487700581]).addTo(map)
		.bindPopup('Hi User.<br> You are at NIT raipur.')
		.openPopup();
