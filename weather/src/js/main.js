require('@babel/polyfill');
import DarkSkyApi from "dark-sky-api";

const input = document.querySelectorAll(".weather__input");
const btn = document.querySelector(".weather__submit");

const result = document.querySelector(".weather__result");

window.onload = function () {
    btn.addEventListener("click", checkWeather);
    getPosition();

};

/*оотрисовка погоды*/
function createWeather(temp, appTemp, speed, pressure, type) {
    result.classList.add("weather__result-active");
    result.innerHTML = "";

    let imgPrecip = document.createElement("img");
    imgPrecip.src = `dist/img/${type}.png`;
    result.append(imgPrecip);

    let temperature = document.createElement("div");
    temperature.className = "weather__item";
    temperature.innerHTML = `Температура: ${temp} ℃`;
    result.append(temperature);

    let apparentTemp = document.createElement("div");
    apparentTemp.className = "weather__item";
    apparentTemp.innerHTML = `Ощущаемая температура: ${appTemp} ℃`;
    result.append(apparentTemp);

    let windSpeed = document.createElement("div");
    windSpeed.className = "weather__item";
    windSpeed.innerHTML = `Скорость ветра: ${speed} м/с`;
    result.append(windSpeed);

    let press = document.createElement("div");
    press.className = "weather__item";
    press.innerHTML = `Давление: ${pressure} мм рт. ст.`;
    result.append(press);

}

/*оотрисовка погоды*/

/*отрисовка ошибки*/
function createError() {
    result.classList.add("weather__result-active");
    result.innerHTML = "";

    let err = document.createElement("div");
    err.innerHTML = "Введите правильную широту и долготу!";
    result.append(err);
}

/*отрисовка ошибки*/

/*получение местоположения*/
function getPosition() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            input[0].value = position.coords.latitude;
            input[1].value = position.coords.longitude;
        }
    );
}

/*получение местоположения*/


function checkWeather() {
    if (!input[0].value.trim().length || !input[1].value.trim().length) {
        return;
    }

    let position = {
        latitude: input[0].value,
        longitude: input[1].value
    };


    let result = fetchDark(DarkSkyApi, position);
    result.then(items => {
        if (items === null) {
            createError();
            return;
        }
        console.log(result);
        createWeather(items.temperature, items.apparentTemperature, items.windSpeed, items.pressure,items.icon);
    });
}


