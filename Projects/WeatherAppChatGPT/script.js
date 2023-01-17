// Your API key
const API_KEY = 'your_api_key';

// Get weather data
function getWeather(location) {
  // Fetch the weather data from the OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      // Display the weather data
      document.getElementById("city").innerHTML = data.name;
      document.getElementById("temperature").innerHTML = data.main.temp;
      document.getElementById("description").innerHTML = data.weather[0].description;
      document.getElementById("weather-info").style.display = "block";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Handle form submission
document.getElementById("location-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let location = document.getElementById("location-input").value;
  getWeather(location);
});
