let apiKey = '013d0c0241ad4b4598451504251502';
let url = "http://api.weatherapi.com/v1/current.json?"
async function getWeather(){
  const city = document.querySelector('.City').value;
  const url =  `http://api.weatherapi.com/v1/current.json?key=013d0c0241ad4b4598451504251502&q=${city}&aqi=yes`;

  try{
    let response = await axios.get(url);
    let data = response.data;
    ;

    if (data) {
      const weatherResult = document.querySelector('.weather-result');
      weatherResult.innerHTML = ''; // Clear previous results

      const cityName = document.createElement('h2');
      cityName.textContent = data.location.name + ', ' + data.location.country;
      weatherResult.appendChild(cityName);

      const temp = document.createElement('p');
      temp.textContent = 'Temperature: ' + data.current.temp_c + '°C';
      weatherResult.appendChild(temp);

      const weather = document.createElement('p');
      weather.textContent = 'Weather: ' + data.current.condition.text;
      weatherResult.appendChild(weather);

      const humidity = document.createElement('p');
      humidity.textContent = 'Humidity: ' + data.current.humidity + '%';
      weatherResult.appendChild(humidity);

      const windSpeed = document.createElement('p');
      windSpeed.textContent = 'Wind Speed: ' + data.current.wind_kph + ' kph';
      weatherResult.appendChild(windSpeed);

      const aqi = document.createElement('p');
      aqi.textContent = 'Air Quality Index (AQI): ' + data.current.air_quality.pm2_5;
      weatherResult.appendChild(aqi);
    } else {
      document.querySelector('.weather-result').innerHTML = '<p>City not Found!</p>';
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
    document.querySelector('.weather-result').innerHTML = '<p>Failed to fetch weather data.</p>';
  }
}

// Add event listener to the button
document.querySelector('button').addEventListener('click', getWeather);