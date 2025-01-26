const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

let low = bacData[0]    // 190.15
let high = bacData[1]   // 194.21
let open = bacData[2]   // 191.07
let close = bacData[3]  // 192.44
let volume = bacData[4] // 129000

if (close > open && volume > 100000) {
    console.log("Strong Bullish");
} else if (close > open && volume < 100000) {
    console.log("Bullish")
}

if (close < open && volume > 100000) {
    console.log("Strong Bearish")
} else if (close < open && volume > 100000) {
    console.log("Bearish")
}

if (close === open) {
    console.log("neutral")
}


