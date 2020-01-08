/**
 * https://leetcode.com/problems/house-robber/
 * tags: easy, dynamic programming
 * Explanation how to improve from the basic solution:
 * https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
 */
describe('House robber', () => {
  test('Case 1', () => {
    expect(HouseRobber.rob([1, 2, 3, 1])).toEqual(4);
  });
  test('Case 2', () => {
    expect(HouseRobber.rob([2, 7, 9, 3, 1])).toEqual(12);
  });
  test('Case 3', () => {
    expect(HouseRobber.rob([2, 1, 2, 6])).toEqual(8);
  });
});

class HouseRobber {

  public static rob(nums: number[]): number {
    return this.robIterativeVars(nums);
  }

  // Step 1: simple recursive
  public static robRecursive(nums: number[]): number {
    return this.robR(nums, nums.length - 1);
  }

  private static robR(nums: number[], i: number): number {
    if(i < 0) {
      return 0;
    }

    const rPrev = this.robR(nums, i - 1);
    const rPrevPrev = this.robR(nums, i - 2) + nums[i];
    const result = Math.max(rPrev, rPrevPrev);

    return result;
  }

  // Step 2: recursive with memoization
  public static robRecursiveMemo(nums: number[]): number {
    const memo = Array.from(Array(nums.length + 1).keys()).map(k => -1);
    return this.robRMemo(nums, memo, nums.length - 1);
  }

  private static robRMemo(nums: number[], memo: number[], i: number): number {
    if(i < 0) {
      return 0;
    }

    if(memo[i] >= 0) {
      return memo[i];
    }

    const rPrev = this.robRMemo(nums, memo, i - 1);
    const rPrevPrev = this.robRMemo(nums, memo, i - 2) + nums[i];
    const result = Math.max(rPrev, rPrevPrev);
    memo[i] = result;

    return result;
  }

  // Step 3: iterative
  public static robIterative(nums: number[]): number {
    if(nums.length == 0) return 0;
    const memo = Array.from(Array(nums.length + 1).keys()).map(k => -1);
    memo[0] = 0;
    memo[1] = nums[0];
    for(let i = 1; i < nums.length; i++) {
      const val = nums[i];
      memo[i + 1] = Math.max(memo[i], memo[i - 1] + val);
    }
    return memo[nums.length];
  }

  // Step 4: iterative + 2 variables
  public static robIterativeVars(nums: number[]): number {
    if(nums.length == 0) {
      return 0;
    }
    let prevPrev = 0;
    let prev = 0;

    for(let i = 0; i < nums.length; i++) {
      let newMax = Math.max(prev, prevPrev + nums[i]);
      prevPrev = prev;
      prev = newMax;
    }
    return prev;
  }
}
