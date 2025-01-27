const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

let openFloat = parseFloat(disneyData["open"]) 		// 120.54
let highFloat = parseFloat(disneyData["high"])     	// 122.56
let lowFloat = parseFloat(disneyData["low"])       	// 120.54
let closeFloat = parseFloat(disneyData["close"])	// 121.09
let volumeFloat = parseFloat(disneyData["volume"])	// 90000

if (closeFloat > openFloat && volumeFloat > 100000) {
    console.log("Strong Bullish");
} else if (closeFloat > openFloat && volumeFloat < 100000) {
    console.log("Bullish")
}

if (closeFloat < openFloat && volumeFloat > 100000) {
    console.log("Strong Bearish")
} else if (closeFloat < openFloat && volumeFloat > 100000) {
    console.log("Bearish")
}

if (closeFloat === openFloat) {
    console.log("neutral")
}
