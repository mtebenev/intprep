/**
 * https://leetcode.com/problems/contains-duplicate/
 */
describe('Contains duplicate', () => {
  test('Case 1', () => {
    expect(containsDuplicate([1,2,3,1])).toBeTruthy();
    expect(containsDuplicate([1,2,3,4])).toBeFalsy();
  });
});

function containsDuplicate(nums: number[]): boolean {
  const numbers: any = {};
  for(let i = 0; i < nums.length; ++i) {
    if(numbers[nums[i].toString()] === undefined) {
      numbers[nums[i].toString()] = 1;
    } else {
      return true;
    }
  }

  return false;
}
