const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let amdPrices_Max = amdPrices[0];
function findMax() {
    for (let num of amdPrices) {
        if (num > amdPrices_Max) {
            amdPrices_Max = num
        } 
    }    
}
findMax(amdPrices_Max);
console.log("AMD 52-week high is", amdPrices_Max);