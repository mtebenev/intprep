/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 */
describe('Increasing triplet subsequence', () => {
  test('Case 1', () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
  });
  test('Case 2', () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
  });
  test('Case 3', () => {
    expect(increasingTriplet([5, 1, 5, 5, 2, 5, 4])).toBeTruthy();
  });
  test('Case 4', () => {
    expect(increasingTriplet([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBeFalsy();
  });
  test('Case 5', () => {
    expect(increasingTriplet([1, 3, 2, 1, 4, 1, 5])).toBeTruthy();
  });
});

function increasingTriplet(nums: number[]): boolean {
  let min = nums[0];
  let secondMinUpdatedAfterMin = Infinity;
  for(let val of nums) {
    if(val <= min) {
      min = val;
    } else if(val <= secondMinUpdatedAfterMin) {
      secondMinUpdatedAfterMin = val;
    } else {  // min < secondMinUpdatedAfterMin < val
      return true;
    }
  }
  return false;
}
