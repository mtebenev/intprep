/**
 * https://leetcode.com/problems/maximum-subarray/
 * tags: easy, dynamic programming
 * TODO: Ohhh! Look at other solutions.
 */
describe('Maximum subarray', () => {
  test('Sample 1', () => {
    expect(MaximumSubarray.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  test('Sample 2', () => {
    expect(MaximumSubarray.maxSubArray([-1])).toEqual(-1);
  });

  test('Sample 3', () => {
    expect(MaximumSubarray.maxSubArray([-2, -1])).toEqual(-1);
  });

  test('Sample 4', () => {
    expect(MaximumSubarray.maxSubArray([1, 2])).toEqual(3);
  });
});

class MaximumSubarray {
  public static maxSubArray(nums: number[]): number {
    return this.divideAndConquer(nums);
  }

  private static bruteForce(nums: number[]): number {
    let max = nums[0];
    for(let i = 0; i < nums.length; i++) {
      let current = nums[i];
      if(current > max) {
        max = current;
      }
      for(let j = i + 1; j < nums.length; j++) {
        current += nums[j];
        if(current > max) {
          max = current;
        }
      }
    }
    return max;
  }

  private static divideAndConquer(nums: number[]): number {
    return this.divideAndConquerHelper(nums, 0, nums.length - 1);
  }
  private static divideAndConquerHelper(nums: number[], left: number, right: number): number {
    if(left === right) {
      return nums[left];
    }

    const p = Math.floor((left + right) / 2);

    const leftSum = this.divideAndConquerHelper(nums, left, p);
    const rightSum = this.divideAndConquerHelper(nums, p + 1, right);
    const crossSum = this.divideAndConquerCrossSum(nums, left, right, p);
    return Math.max(Math.max(leftSum, rightSum), crossSum);
  }

  private static divideAndConquerCrossSum(nums: number[], left: number, right: number, p: number): number {
    if(left === right) {
      return nums[left];
    }

    let leftSubsum = Number.NEGATIVE_INFINITY;
    let currSum = 0;
    for(let i = p; i > left - 1; --i) {
      currSum += nums[i];
      leftSubsum = Math.max(leftSubsum, currSum);
    }

    let rightSubsum = Number.NEGATIVE_INFINITY;
    currSum = 0;
    for(let i = p + 1; i < right + 1; ++i) {
      currSum += nums[i];
      rightSubsum = Math.max(rightSubsum, currSum);
    }

    return leftSubsum + rightSubsum;
  }
}
