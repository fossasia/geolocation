var output = document.getElementById("output");
var out = document.getElementById("out")
function geolocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(rit,fileit);
    }
    else {
        output.innerHTML = "Geolocation is not supported by this browser";
        output.style.display = "inherit";
    }
}

function rit(position) {
    var mylocation = "lat: " + position.coords.latitude +"<br>";
    mylocation += "lng: " + position.coords.longitude+"<br><br>";
    output.innerHTML = mylocation;
    output.style.display = "none";
    output.style.display = "inherit";
    out.style.display = "inherit";
    document.getElementById("button").value="Get my geolocation again";
}

function fileit(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML="Permission Denied, please give permission and try again";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML="Position information is unavailable please try after some time";
            break;
        case error.TIMEOUT:
            output.innerHTML ="Request Timed out, please try again";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML="Unknown Error please try again";
            break;
    }
}