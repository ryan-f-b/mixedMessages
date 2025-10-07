const person = ['Shane Long', 'Steve Backley', 'Steve Sidwell', 'Barry Venison', 'Ellie Simmonds'];
const adjective = ['silly', 'weird', 'funny', 'controversial', 'prolific'];
const location = ['playground', 'cinema', 'pool hall', 'pub', 'football stadium'];

const randomiser = () => {
    return Math.floor(Math.random() * 5);
}

const mixedMessage = () => {
    console.log(`${person[randomiser()]} was very ${adjective[randomiser()]} in the ${location[randomiser()]}!`);
}

mixedMessage();