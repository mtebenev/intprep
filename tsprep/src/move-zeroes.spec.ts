/**
 * https://leetcode.com/problems/move-zeroes/
 * tags: easy, array
 */
describe('Move zeroes', () => {
  test('Case 1', () => {
    const arr = [0, 1, 0, 3, 12];
    MoveZeroes.moveZeroes(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });
});

class MoveZeroes {
  public static moveZeroes(nums: number[]): void {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] === 0) {
        zeroCount++;
      } else {
        nums[i - zeroCount] = nums[i];
      }
    }
    for (let i = 0; i < zeroCount; i++) {
      nums[nums.length - 1 - i] = 0;
    }
  }
}
