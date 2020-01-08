/**
 * https://leetcode.com/problems/subsets/
 * tags: backtracking, medium
 */
describe('Subsets', () => {
  test('Case 1', () => {
    const res = subsets([1, 2, 3]);
    const expected = [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
    ];
    expected.forEach(x => {
      expect(res).toContainEqual(x);
    });
  });
});

/**
 * Backtrack version.
 */
function subsets(nums: number[]): number[][] {
  let result: number[][] = [[]];
  for(let i = 0; i < nums.length; ++i) {
    let len = result.length;
    for(let j = 0; j < len; ++j) {
      let subset = [...result[j], nums[i]];
      result.push(subset);
    }
  }

  return result;
}

