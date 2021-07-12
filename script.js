
//arrays for message parts
const weather = {
    temperature: ["cold", "hot", "warm", "scorching", "freezing", "cool", "chilly"],
    precipitation: ["rain", "snow", "sleet", "hale", "frezzing rain", "acid rain", "meatballs"],
    chance: ["high", "low", "moderate", "very high", "near zero"]
};

//generate random number with number as input
const generateARandomInteger = (number) => {
    return Math.floor(Math.random()*number);
}

//array for message components
let weatherReport = [];

//iterate through weather and add messages
for (let weatherType in weather) {

}