/**
 * https://leetcode.com/problems/permutations/
 * tags: backtracking, medium
 */
describe('Permutations', () => {
  test('Case 1', () => {
    const res = permute_backtrack([1, 2, 3]);
    expect(res).toContainEqual([1, 2, 3]);
    expect(res).toContainEqual([1, 3, 2]);
    expect(res).toContainEqual([2, 1, 3]);
    expect(res).toContainEqual([2, 3, 1]);
    expect(res).toContainEqual([3, 1, 2]);
    expect(res).toContainEqual([3, 2, 1]);
  });
});

/**
 * Backtrack version.
 */
function permute_backtrack(nums: number[]): number[][] {
  const result: number[][] = [];
  backtrack([], nums, result);
  return result;
}

function backtrack(sequence: number[], nums: number[], result: number[][]): void {
  if(sequence.length === nums.length) {
    result.push([...sequence]);
  } else {
    for(let i = 0; i < nums.length; ++i) {
      if(sequence.indexOf(nums[i]) === -1) {
        sequence.push(nums[i]);
        backtrack(sequence, nums, result);
        sequence.pop();
      }
    }
  }
}
