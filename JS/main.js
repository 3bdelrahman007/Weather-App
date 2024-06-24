const baseUrl = `https://api.weatherapi.com/v1/forecast.json`;
const apiKey = `546d15cd3c6b44b3a65124550241206`;
let searchLocation = document.getElementById('search');
let submit = document.getElementById('Submit');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(e){
        const lat = e.coords.latitude;
        const lon = e.coords.longitude;
        getWeather(`${lat},${lon}`)
    })
}

searchLocation.addEventListener('change', function(){
    getWeather(searchLocation.value)
})

searchLocation.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        getWeather(searchLocation.value)
    }
})

submit.addEventListener('click', function(){
    getWeather(searchLocation.value)
})

async function getWeather(location){
    try {
        document.getElementById('rowData').innerHTML = `<svg class="pl mx-auto" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#000"></stop>
                <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
            <mask id="mask1">
                <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
            </mask>
            <mask id="mask2">
                <rect x="28" y="28" width="104" height="104" fill="url(#grad)"></rect>
            </mask>
        </defs>
        
        <g>
            <g class="pl__ring-rotate">
                <circle class="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
            </g>
        </g>
        <g mask="url(#mask1)">
            <g class="pl__ring-rotate">
                <circle class="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
            </g>
        </g>
        
        <g>
            <g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
            </g>
        </g>
        <g mask="url(#mask1)">
            <g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
                <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
            </g>
        </g>
        
        <g>
            <g transform="translate(64,28)">
                <g class="pl__arrows" transform="rotate(45,16,52)">
                    <path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                    <path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
                </g>
            </g>
        </g>
        <g mask="url(#mask2)">
            <g transform="translate(64,28)">
                <g class="pl__arrows" transform="rotate(45,16,52)">
                    <path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                    <path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
                </g>
            </g>
        </g>
        </svg>`
        let response = await fetch(`${baseUrl}?key=${apiKey}&q=${location}&days=3`)
        let data = await response.json()
        displayWeather(data)
        displayforecast(data)

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a Valid Location or Check Your Internet Connection",
        });
        searchLocation.value = '';
        document.getElementById('rowData').innerHTML = ''
    }
}

function displayWeather(data){
    let dataArr = data.forecast.forecastday;
    let weatherBox = ``;
    let date = new Date(dataArr[0].date);
    let day = date.toLocaleDateString('en-us', {weekday : 'long'});
    let days = date.getDate();        
    let monthIndex = date.getMonth();
    let months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let month = months[monthIndex];

    weatherBox += `
                <div class="col-md-4 p-0">
                    <div class="box">
                        <div class="box-header d-flex justify-content-between p-3">
                            <span>${day}</span>
                            <span>${days} ${month}</span>
                        </div>
                        <div class="box-content py-5 px-3">
                            <p class="fs-3">${data.location.country}</p>
                            <p class="fs-4">${data.location.name}</p>
                            <p class="display-3 fw-bold">${dataArr[0].day.avgtemp_c}<sup>o</sup>C</p>
                            <img src="https:${dataArr[0].day.condition.icon}" alt="">
                            <p class="main-color">${dataArr[0].day.condition.text}</p>
                        </div>
                        <div class="box-footer d-flex align-items-center gap-4 pb-5 px-3">
                            <div class="umbrella">
                                <img src="images/icon-umberella.png" alt="">
                                <span>${data.current.humidity}</span>
                            </div>
                            <div class="wind">
                                <img src="images/icon-wind.png" alt="">
                                <span>${dataArr[0].day.maxwind_kph}km/h</span>
                            </div>
                            <div class="compass">
                                <img src="images/icon-compass.png" alt="">
                                <span>${data.current.wind_dir}</span>
                            </div>
                        </div>
                    </div>
                </div>
`
console.log(data);
    document.getElementById('rowData').innerHTML = weatherBox;
}

function displayforecast(data){
    let dataArr = data.forecast.forecastday;
    let weatherBox = ``;

    for (let i = 1; i < dataArr.length; i++) {
        
        let date = new Date(dataArr[i].date);
        let day = date.toLocaleDateString('en-us', {weekday : 'long'});

        weatherBox += `
                    <div class="col-md-4 p-0">
                        <div class="box text-center">
                            <div class="box-header p-3">
                                <span>${day}</span>
                            </div>
                            <div class="box-content py-5 px-3">
                                <img class='pb-4' src="https:${dataArr[i].day.condition.icon}" alt="">
                                <p class="display-3 fw-bold">${dataArr[i].day.avgtemp_c} <sup>o</sup>C</p>
                                <p class="main-color">${dataArr[i].day.condition.text}</p>
                            </div>
                        </div>
                    </div>
    `
    }
    document.getElementById('rowData').innerHTML += weatherBox;
}