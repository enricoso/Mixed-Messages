const itemsBox = {
    "scent": ["Jasmine", "Lavender", "Chamomile", "Eucalyptus", "Vanilla", "Peppermint", "Ginger", "Sandalwood", "Lemongrass", "Cedarwood"],
    "mood": ["Trust", "Acceptance", "Serenity", "Amazement", "Surprise", "Joy", "Apprehension", "Distraction", "Vigilance", "Ecstacy"],
    "color": ["Purple", "Green", "Yellow", "Red", "Orange", "Black", "White", "Pink", "Brown", "Blue"]
}
const randItem = function(item) {
    return Math.floor(Math.random(item.length) * 10)
}
const scentItem = itemsBox["scent"][randItem("scent")]
const moodItem = itemsBox["mood"][randItem("mood")]
const colorItem = itemsBox["color"][randItem("color")]

const data = new Date();
const gg = data.getDate();
const mm = data.getMonth();
const aaaa = data.getFullYear();

console.log(`Today is ${mm + 1}/${gg}/${aaaa}. Your favourite scent is ${scentItem}, your mood is "${moodItem}" and the color of the day is ${colorItem}. Have a nice day!`);




//console.log(randItem(itemsBox["color"]))
//console.log(itemsBox["color"][9])