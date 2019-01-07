let output = document.getElementById("output");
let out = document.getElementById("out")
let flag = 1

const geolocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(rit, fileit);
        document.getElementById("button").value = "Get my geolocation again";
        document.getElementById("button").onclick = "window.location.reload();"; // reloads and executes the geolocation();
    } else {
        output.innerHTML = "Geolocation is not supported by this browser";
        output.style.display = "inherit";
    }
}

const rit = (position) => {
    let mylocation = `lat:${position.coords.latitude}<br>`;
    mylocation += `lng:${position.coords.longitude}<br><br>`;
    output.innerHTML = mylocation;
    my_preview = `https://www.google.com/maps/?q=${position.coords.latitude},${position.coords.longitude}`;
    preview.innerHTML = `<a target='_blank' href='${my_preview}>Google Maps!</a><br><br>`;
    let element = document.getElementById('osm-map');
    element.style = 'height:300px;';
    let map = L.map(element);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    let target = L.latLng(position.coords.latitude, position.coords.longitude);
    map.setView(target, 14);
    L.marker(target).addTo(map);
    output.style.display = "none";
    output.style.display = "inherit";
    out.style.display = "inherit";
}

const fileit = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Permission Denied, please give permission and try again";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Position information is unavailable please try after some time";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Request Timed out, please try again";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "Unknown Error please try again";
            break;
    }
}

const changeBodyBg = () => {
    const background = flag? 'black' : '#eee';
    const title = flag?'white': '#7c795d';
    const btn_value = flag? 'Light': 'Dark';
    const btn_back = flag? 'white' : 'black';
    const btn_clr = flag? 'black': 'white';

    
    document.body.style.background = background;
    document.getElementById("title").style.color = title;
    
    const btn = document.getElementById("myButton1");
    btn.value = btn_value;
    btn.style.background = btn_back;
    btn.style.color = btn_clr;
    flag=flag? 0:1;
}
