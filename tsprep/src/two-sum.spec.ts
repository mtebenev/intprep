/**
 * https://leetcode.com/problems/two-sum/
 * tags: easy, array
 */
describe('Two sum', () => {
  test('Case 1', () => {
    expect(TwoSum.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});

class TwoSum {
  public static twoSum(nums: number[], target: number): number[] {
    const complementary: {[idx: number]: number} = {};

    for (let i = 0; i < nums.length; i++) {
      const comp = target - nums[i];
      if(complementary[comp] !== undefined) {
        return [complementary[comp], i];
      } else {
        complementary[nums[i]] = i;
      }
    }

    return [];
  }
}
