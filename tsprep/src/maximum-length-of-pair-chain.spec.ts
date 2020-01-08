/**
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 * TODO Greedy
 */
describe('Maximum length of pair chain', () => {
  test('Case 1', () => {
    expect(findLongestChain([[1, 2], [2, 3], [3, 4]])).toEqual(2);
  });
});

function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => {
    return (a[0] - b[0]);
  });

  const counters = new Array(pairs.length);

  let result = 1;
  counters[0] = 1;
  for(let i = 1; i < pairs.length; ++i) {
    let maxCount = 0;
    for(let j = 0; j < i; ++j) {
      if(pairs[j][1] < pairs[i][0]) {
        if(counters[j] > maxCount) {
          maxCount = counters[j];
        }
      }
    }
    counters[i] = maxCount + 1;
    result = Math.max(counters[i], result);
  }

  return result;
}

