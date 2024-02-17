// Best time to Buy and Sell Stock

// you want to maximize your profit by choosing a single day to buy one stock
// and choosing a  different day in the future to sell that stock.
// Return the maximum profit, if you cannot actieve any profit, return 0.


// Solving using Greedy Algorithim
function maxprofit(prices) {
    let minbuyprice = prices[0] || 0;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minbuyprice) {
            minbuyprice = prices[i];
        }
        profit = Math.max(profit, prices[i] - minbuyprice)
    }
    return profit;
}

console.log(maxprofit([7,1,5,3,6,4]));
// console.log(maxprofit([7,6,4,3,1]));