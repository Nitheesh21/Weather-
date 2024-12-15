const API_Key = "d08f0187ddca7d95f5d544766be18602";


async function checkWeather(city) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    console.log(API_URL);
    const response = await fetch(API_URL + `&appid=${API_Key}`);
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;

 
    document.querySelector('.weather-image').innerHTML = `<img src="./${data.weather[0].main.toLowerCase()}.png" class="weather-icon" />`;
    

    document.querySelector('.temperature').innerHTML = data.main.temp.toFixed(0) + '°C';
    
    document.querySelector('.humidity').innerHTML = data.main.humidity.toFixed(0);

    document.querySelector('.wind').innerHTML = data.wind.speed.toFixed(0);
}



document.querySelector('.search-icon').addEventListener('click', () => {
    const city = document.querySelector('.city-input').value.trim();
    if (city) {
        // Check if the city is "jonkler"
        if (city.toLowerCase() === "jonkler") {
            document.querySelector('body').innerHTML = `
            <video width="640" height="360" autoplay>
            <source src="./videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>`;
        } else {
            // If it's not "freaky", call checkWeather
            checkWeather(city);
        }
    } else {
        alert("Please enter a valid city name!");
    }
    console.log(city);
})

document.querySelector('.city-input').addEventListener('keydown', (event) => {
    const city = document.querySelector('.city-input').value.trim();
    if (event.key === 'Enter') {    
        if (city) {
            // Check if the city is "jonkler"
            if (city.toLowerCase() === "jonkler") {
                document.querySelector('body').innerHTML = `
                <video width="640" height="360" autoplay>
                <source src="./videoplayback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>`;
            } else {
                // If it's not "freaky", call checkWeather
                checkWeather(city);
            }
        } else {
            alert("Please enter a valid city name!");
        }
        console.log(city);
    }
    console.log(city);
})
