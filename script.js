let contentHolder = document.getElementById("contentHolder");

let textField = document.createElement("input");
textField.type = "text";
textField.setAttribute("id","textField");
contentHolder.appendChild(textField);
document.getElementById("textField").focus();
textField.placeholder = "Enter any city.."

let search = document.createElement("button");
search.setAttribute("id","search");
let searchText = document.createTextNode("Search");
search.appendChild(searchText);
contentHolder.appendChild(search);

let resultText = document.createElement("div");
resultText.setAttribute("id","resultText");
contentHolder.appendChild(resultText);

let temperatureDiv = document.createElement("div");
temperatureDiv.setAttribute("id","temperatureDiv");
resultText.appendChild(temperatureDiv);

let weatherDiv = document.createElement("div");
weatherDiv.setAttribute("id","weatherDiv");
resultText.appendChild(weatherDiv);

let weatherIconDiv = document.createElement("div");
weatherIconDiv.setAttribute("id","weatherIconDiv");
resultText.appendChild(weatherIconDiv);

let humidityDiv = document.createElement("div");
humidityDiv.setAttribute("id","humidityDiv");
resultText.appendChild(humidityDiv);

let windDiv = document.createElement("div");
windDiv.setAttribute("id","windDiv");
resultText.appendChild(windDiv);

textField = document.querySelector("#textField");
search = document.querySelector("#search");
resultText = document.querySelector("#resultText");
weatherDiv = document.querySelector("#weatherDiv");
temperatureDiv = document.querySelector("#temperatureDiv");
humidityDiv = document.querySelector("#humidityDiv");
windDiv = document.querySelector("#windDiv");
weatherIconDiv = document.querySelector("#weatherIconDiv")

let cityName = "";
textField.addEventListener("input", (e) => {
    cityName = e.target.value;
    console.log(cityName);
});

textField.addEventListener("keyup", function(keyPress) {
    if (keyPress.key === "Enter") {
        search.click();
    }
});

search.addEventListener("click", fetchingData);

function fetchingData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=eaa9e79b6db0e060c7d3bbad9e63d01b`)
    .then(response => response.json())
    .then(data => {
        let temp = data.main.temp;
        let iconCode = data.weather[0].icon;
        temperatureDiv.innerHTML = (temp - 273).toFixed(2) + "&#8451;";
        humidityDiv.innerHTML = "Humidity: " + data.main.humidity + "&#37"; 
        windDiv.innerHTML = "Wind speed: " + data.wind.speed + " m/s";
        weatherDiv.innerHTML = data.weather[0].main;
        weatherIconDiv.innerHTML = "<img src=http://openweathermap.org/img/wn/" + iconCode + ".png>";
        console.log(data);
    })
    .catch((err) => {
        err = "Enter a valid city name";
        alert(err)});
}; 