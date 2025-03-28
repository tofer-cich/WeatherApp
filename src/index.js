import "./styles.css";

//Visual Crossing API key: J5J5VJ42NVS4UF64H9RXGTGPA

//Example usage: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Minneapolis?key=J5J5VJ42NVS4UF64H9RXGTGPA

async function getWeather(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=J5J5VJ42NVS4UF64H9RXGTGPA`, {mode: 'cors'});
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cityData = await response.json();
        // console.log(cityData);
        const weather = extractWeather(cityData);
        console.log(weather.address);
        return weather;
    } catch (error) {
        console.error("Failed to fetch weather:", error);
        return null;
    }
}

function extractWeather(cityObject) {
    // console.log(cityObject.resolvedAddress);
    //This is the information we want from the API call
    const weatherItems = {
        address: cityObject.resolvedAddress,
        temp: cityObject.currentConditions.temp,
        humidity: cityObject.currentConditions.humidity,
    };
    // console.log(weatherItems);
    return weatherItems;
}

getWeather(55125);