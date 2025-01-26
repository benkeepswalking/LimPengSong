const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
let openFloat = parseFloat(disneyData["open"])
let highFloat = parseFloat(disneyData["high"])
let lowFloat = parseFloat(disneyData["low"])
let closeFloat = parseFloat(disneyData["close"])
console.log((openFloat - highFloat + lowFloat - closeFloat).toFixed(2))