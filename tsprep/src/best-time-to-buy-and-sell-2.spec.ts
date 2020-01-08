/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
describe('Best Time to Buy and Sell Stock 2', () => {
  test('Case 1', () => {
    expect(maxProfit2([7,1,5,3,6,4])).toEqual(7);
  });
  test('Case 2', () => {
    expect(maxProfit2([1,2,3,4,5])).toEqual(4);
  });
  test('Case 3', () => {
    expect(maxProfit2([7,6,4,3,1])).toEqual(0);
  });
});

function maxProfit2(prices: number[]): number {
  if(prices.length === 0) {
    return 0;
  }

  let totalProfit = 0;
  let currentMin = prices[0];

  for(let i = 1; i < prices.length; ++i) {
    if(prices[i] < prices[i - 1]) { // Price goes down, sell.
      totalProfit += prices[i - 1] - currentMin;
      currentMin = prices[i];
    } else if(i === prices.length - 1) {
      totalProfit += prices[i] - currentMin; // Sell before finish
    }
  }

  return totalProfit;
}
