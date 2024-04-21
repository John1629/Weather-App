function getWeather() {
  const apiKey = "YOUR-API-KEY";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city");
    return;
  }

  const currentWeatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
  const forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}";

  fetch(currentWeatherUrl)
    .then((response) => responsej.son())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current weather data. Please try again.");
    });
}
