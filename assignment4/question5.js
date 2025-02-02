const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let disneyData_SumClosing = 0;
    for (let i = 0; i < disneyData.length; i++) {
        disneyData_SumClosing += parseFloat(disneyData[i]["close"]);
    }
let disneyData_AvgClosing = disneyData_SumClosing / disneyData.length;
console.log("Average closing price of Disney is", disneyData_AvgClosing.toFixed(2));

// Is there a step I missed? Somehow I kept getting 123.00 instead of 123.01. 