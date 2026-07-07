const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");

const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");

const API_KEY = "8d329e2a64289303064ea29ebca362bc";

searchBtn.addEventListener("click", async () => {

    const city = cityInput.value;
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try{

        const response = await fetch(url);
        if(!response.ok){
            throw new Error("データを受け取れませんでした")
        }
        const data = await response.json();

        console.log(data);

        cityName.textContent = data.name;
        temp.textContent = `${data.main.temp}℃`;
        weather.textContent = data.weather[0].description;

    }

    catch(error){

        cityName.textContent = "";
        temp.textContent = "";
        weather.textContent = error.message;

    }
});
