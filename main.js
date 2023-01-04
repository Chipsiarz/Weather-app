apik = "3045dd712ffe6e702e3245525ac7fa38";

const cityInput = document.getElementById("cityInput");
const btn = document.getElementById("send");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const conditionIcon = document.getElementById("conditionIcon");
const conditionName = document.getElementById("conditionName");

apik = "3045dd712ffe6e702e3245525ac7fa38";

function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityInput.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      const nameValue = data["name"];
      const mainTemp = data["main"]["temp"];
      const weatherDesctiption = data["weather"]["0"]["description"];

      cityName.innerHTML = `${nameValue}`;
      temperature.innerHTML = `${convertion(mainTemp)} C`;
      if (weatherDesctiption == "clear sky") {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-brightness-high-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else if (weatherDesctiption == "overcast clouds") {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-cloud-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else if (weatherDesctiption == "drizzle") {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-cloud-drizzle-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else if (
        weatherDesctiption == "rain" ||
        "light rain" ||
        "shower rain"
      ) {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-cloud-hail-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else if (weatherDesctiption == "thunderstorm") {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-lightning-charge-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else if (weatherDesctiption == "snow") {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-cloud-snow-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else if (weatherDesctiption == "mist") {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-cloud-fog2-fill";
        conditionName.innerHTML = `${weatherDesctiption}`;
      } else {
        conditionIcon.className = "";
        conditionIcon.className = "bi bi-question-lg";
        conditionName.innerHTML = `${weatherDesctiption}`;
      }
      // condition.innerHTML = `${weatherDesctiption}`;
    })

    .catch((err) => alert("Wrong city name"));
});
