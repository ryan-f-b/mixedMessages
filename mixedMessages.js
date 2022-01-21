// Mixed Messages Project

// Setting arrays for the 3 separate parts of the joke
const messageArr1 = ["What do you call a one-eyed", "Did you hear what the albatross said to the", "What do you get if you cross a dead sloth and a", "What did the farmer say when confronted wih a", "Did you hear what the bank manager said when his bank got raided by the"];
const messageArr2 = ["cabinet", "little plush toy", "lame donkey", "toilet brush", "wailing ducklet"];
const messageArr3 = ["Steve Backley's Neckbeard", "I'm a radio", "Holy mackerel pudding", "Savage turnip", "Bruce Lee's wig"];

// Creating a function to generate a random number that will determine which element of each array is used in the joke
const randomNum = () => {
	let randomNum = Math.floor(Math.random() * 5);
	return randomNum;
};

// Assinging the function to a variable for each array
let jokePt1 = messageArr1[randomNum()];
let jokePt2 = messageArr2[randomNum()];
let jokePt3 = messageArr3[randomNum()];

// Creating the full joke with a function
const fullJoke = () => {
	return `${jokePt1} ${jokePt2}? ${jokePt3}! Ha ha ha!`
};

// Logging the function to the console
console.log(fullJoke());