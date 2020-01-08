/**
 * https://leetcode.com/problems/missing-number/
 * tags: easy, array
 * Note: there's an elegant solution with XOR
 */
describe('Missing number', () => {
  test('Case 1', () => {
    expect(MissingNumber.missingNumber([3, 0, 1])).toEqual(2);
  });
  test('Case 2', () => {
    expect(MissingNumber.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
  });
});

class MissingNumber {
  public static missingNumber(nums: number[]): number {
    let sum = Array.from(Array(nums.length + 1).keys()).reduce((p, c) => p + c);
    for (let i = 0; i < nums.length; i++) {
      sum -= nums[i];
    }

    return sum;
  }
}
