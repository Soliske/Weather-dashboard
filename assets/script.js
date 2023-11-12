// HTML element var by IDs //
var searchInputEl = document.getElementsByClassName("search-bar");
var searchButtonEl = document.getElementsByClassName("search-button")

// Function that retrieves the weather //
let weather = {
    apiKey: "b79ca2075dc30fbde3e7044a167b6a51",
    function: fetchWeather(city){
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="
            + city
            + "&limit=5&appid="
            + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
// Function that displays the weather //
function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
}
};
