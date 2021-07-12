
//arrays for message parts
const weather = {
    temperature: ["cold", "hot", "warm", "scorching", "freezing", "cool", "chilly"],
    chance: ["high", "low", "moderate", "very high", "near zero"],
    precipitation: ["rain", "snow", "sleet", "hale", "frezzing rain", "acid rain", "meatballs"]
    
};

//generate random number with number as input
const generateARandomInteger = (number) => {
    return Math.floor(Math.random()*number);
}

//array for message components
let weatherReport = [];

//iterate through weather and add messages
for (let weatherType in weather) {
    let arrayIndex = generateARandomInteger(weather[weatherType].length);
    switch(weatherType) {
        case 'temperature':
            weatherReport.push(`It should be a ${weather[temperature][arrayIndex]} day today`)
            break
        case 'chance':
            weatherReport.push(` with a ${weather[chance][arrayIndex]} chance of`)
            break
        case 'precipitation':
            weatherReport.push(` ${weather[precipitation][arrayIndex]}. Hope you enjoy your day at the beach!`)
            break
    }
}