/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
describe('Best Time to Buy and Sell Stock', () => {
  test('Case 1', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
  });
  test('Case 2', () => {
    expect(maxProfit([2,4,1])).toEqual(2);
  });
});

function maxProfit(prices: number[]): number {
  if(prices.length === 0) {
    return 0;
  }

  let min = prices[0];
  let maxProfit = 0;
  for(let i = 1; i < prices.length; ++i) {
    if(prices[i] < min) {
      min = prices[i];
    } else if(prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }

  return maxProfit;
}
