// Geolocation Function
const output = document.getElementById("output");

const geolocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(rit, fileit);
		document.getElementById("action").innerHTML = "Get Location Again";
		document.getElementById("action").onclick = "window.location.reload();"; // reloads and executes the geolocation();
	} else {
		output.innerHTML = "Geolocation is not supported by this browser";
		output.style.display = "inherit";
	}
};

const rit = (position) => {
	document.getElementById("lat").value = position.coords.latitude;
	document.getElementById("lng").value = position.coords.longitude;
	my_preview = `https://www.google.com/maps/?q=${position.coords.latitude},${position.coords.longitude}`;
	preview.innerHTML = `<a target='_blank' href='${my_preview}>Google Maps!</a><br><br>`;
	let element = document.getElementById("osm-map");
	element.style = "height:300px;";
	let map = L.map(element);
	L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);
	let target = L.latLng(position.coords.latitude, position.coords.longitude);
	map.setView(target, 14);
	L.marker(target).addTo(map);
	document.getElementById("out").style.display = "inherit";
	document.getElementById("data").style.display = "inherit";
};

const fileit = (error) => {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			output.innerHTML = "Permission denied, please give permission and try again";
			output.style.display = "inherit";
			break;
		case error.POSITION_UNAVAILABLE:
			output.innerHTML = "Position information is unavailable, please try after some time";
			output.style.display = "inherit";
			break;
		case error.TIMEOUT:
			output.innerHTML = "Request timed out, please try again later";
			output.style.display = "inherit";
			break;
		case error.UNKNOWN_ERROR:
			output.innerHTML = "Unknown error occured, please try again later";
			output.style.display = "inherit";
			break;
	}
};
