require('@babel/polyfill');
import DarkSkyApi from "dark-sky-api";

const input = document.querySelectorAll(".weather__input");
const btn = document.querySelector(".weather__submit");

const result = document.querySelector(".weather__result");

window.onload = () => {
    btn.addEventListener("click", checkWeather);
    getPosition();
};

/*запрос*/
let  getData = (position) => {
    DarkSkyApi.apiKey = "42500ceb4860e8b97ce6298bbbca1b7d";
    DarkSkyApi.units = 'us'; // default 'us'
    DarkSkyApi.language = 'en'; // default 'en'
    DarkSkyApi.postProcessor = (item) => { // default null;
        item.day = item.dateTime.format('ddd');
        return item;
    };

    return DarkSkyApi.loadCurrent(position)
        .then(item => {
            return item;
        })
        .catch(err => {
            return null;
        });
};
/*запрос*/

/*оотрисовка погоды*/
let createWeather = ({temperature, apparentTemperature, windSpeed, pressure, icon}) => {
    result.classList.add("weather__result-active");
    result.innerHTML = "";

    let imgPrecip = document.createElement("img");
    imgPrecip.src = `dist/img/${icon}.png`;
    result.append(imgPrecip);

    let temp = document.createElement("div");
    temp.className = "weather__item";
    temp.innerHTML = `Температура: ${temperature} °F`;
    result.append(temp);

    let apparentTemp = document.createElement("div");
    apparentTemp.className = "weather__item";
    apparentTemp.innerHTML = `Ощущаемая температура: ${apparentTemperature} °F`;
    result.append(apparentTemp);

    let speed = document.createElement("div");
    speed.className = "weather__item";
    speed.innerHTML = `Скорость ветра: ${windSpeed} м/с`;
    result.append(speed);

    let press = document.createElement("div");
    press.className = "weather__item";
    press.innerHTML = `Давление: ${pressure} мм рт. ст.`;
    result.append(press);
};
/*оотрисовка погоды*/

/*отрисовка ошибки*/
let createError = () => {
    result.classList.add("weather__result-active");
    result.innerHTML = "";

    let err = document.createElement("div");
    err.innerHTML = "Введите правильную широту и долготу!";
    result.append(err);
};
/*отрисовка ошибки*/

/*получение местоположения*/
let getPosition = () => {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            input[0].value = position.coords.latitude;
            input[1].value = position.coords.longitude;
        }
    );
};

/*получение местоположения*/
let checkWeather = () => {
    if (!input[0].value.trim().length || !input[1].value.trim().length) {
        return;
    }
    spinnerLoad();

    let position = {
        latitude: input[0].value,
        longitude: input[1].value
    };
    
    let resultPromise = getData(position);
    resultPromise.then(item => {
        if (item === null) {
            createError();
            return;
        }
        console.log(item);
        createWeather(item);
    });
};

let spinnerLoad = () => {
    result.classList.add("weather__result-active");
    result.innerHTML = "";

    let spinner = document.createElement("div");
    spinner.className = "loader";
    result.append(spinner);
};

