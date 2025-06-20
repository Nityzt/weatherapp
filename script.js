  const apiKey = "c2f9fc5269092e8e8c632f1a42e9cb63";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        } else {
            var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "clouds.png";
    weatherIcon.style.animationName= "none";}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png";
    weatherIcon.style.animationName= "rotate";
    weatherIcon.style.animationDuration = "4s"
    weatherIcon.style.animationTimingFunction= "ease";
    weatherIcon.style.animationIterationCount="infinite";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png";
}

document.querySelector(".weather").style.display= "block";
document.querySelector(".error").style.display="none";
        }
       
    }  

    searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});



    checkWeather();