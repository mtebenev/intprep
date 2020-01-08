/**
 * https://leetcode.com/problems/single-number/
 * tags: easy, array
 */
describe('Single number', () => {
  test('Case 1', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
  });

  test('Case 2', () => {
    expect(singleNumber([4,1,2,1,2])).toEqual(4);
  });

  test('Case 3', () => {
    expect(singleNumber([1, 1, 2])).toEqual(2);
  });
});

function singleNumber(nums: number[]): number {
  nums.sort();
  let result = nums[0];
  for(let i = 1; i <= nums.length; i += 2) {
    if(i < nums.length && nums[i] !== nums[i - 1]) {
      return nums[i - 1];
    } else if(i == nums.length && nums[i - 1] !== nums[i - 2]) {
      return nums[i - 1];
    }
  }

  return result;
}
