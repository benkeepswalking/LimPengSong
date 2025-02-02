const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let amdPrices_Sum = 0;
for (let i = 0; i < amdPrices.length; i++) {
    amdPrices_Sum += amdPrices[i];
}
let amdPrices_SMA = amdPrices_Sum / amdPrices.length;

function findAboveSMA() {
    let AboveSMA = 0;
    for (let value of amdPrices) {
        if (value > amdPrices_SMA) {
            AboveSMA += 1;
        }
    }
    console.log("Number of days AMD was above the 7-day SMA is:", AboveSMA)
}
findAboveSMA();