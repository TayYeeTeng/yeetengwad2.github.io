// OpenWeatherMaps API key - Key in your own below
// NEVER SAVE API keys this way - you must save them securely (e.g. environment variable)
const weather_api_key = '';

function get_weather() {
    console.log("[START] get_weather()");

    // Task 0
    // Add an input field called city in HTML
    // the user will key in a city name ('Moscow')
    // Here, retrieve the user input

    let city = document.getElementById('city').value;

    // Task 1
    // Call weather API (the endpoint we just explored in Postman)
    // Using Axios

    // Do not retype Axios code
    // COPY from the previous exercise

    // Javascript DOM
    // Update the content of <div id='info'>
    // with 
    // City: Pyongyang
    // Temperature (Celsius): 24.7 degrees
    // Humidity: 56%

    // let api_endpoint_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcfa7d7e6574f4585a5b484413fb6352&units=metric`;
    let api_endpoint_url = `https://api.openweathermap.org/data/2.5/weather`;
    
    axios.get(api_endpoint_url, {
        params: {
            q : city,
            appid : "dcfa7d7e6574f4585a5b484413fb6352",
            units : "metric"
        }
    })
    .then(response => {
        // if i reach this point, it means the API call was successful
        // and the API response is inside 'response'
        
        var temp = response.data.main.temp;
        var humidity = response.data.main.humidity;

        var info = document.getElementById('info');
        info.innerText = "";

        var para = document.createElement('p'); // <p></p>
        var paraTxt = document.createTextNode('City: ' + city); // City: city
        para.appendChild(paraTxt); // <p>City: city</p>
        info.appendChild(para); // <div><p>City: city</p></div>

        var para = document.createElement('p');
        var paraTxt = document.createTextNode('Temperature (Celsius): ' + temp + "°C");
        para.appendChild(paraTxt);
        info.appendChild(para);

        var para = document.createElement('p');
        var paraTxt = document.createTextNode('Humidity: ' + humidity + "%");
        para.appendChild(paraTxt);
        info.appendChild(para);
    })
    .catch(error => {
        console.log(error.message);
    });

    console.log("[END] get_weather()");
}
