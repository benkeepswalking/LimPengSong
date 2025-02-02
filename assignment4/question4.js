const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let msftData_SumClosing = 0;
	for (let i = 0; i < msftData.length; i++) {
		msftData_SumClosing += msftData[i][3];
	}
let msftData_AvgClosing = msftData_SumClosing / msftData.length
console.log("Average closing price of MSFT is", msftData_AvgClosing.toFixed(2))