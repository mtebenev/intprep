/**
 * https://leetcode.com/problems/fixed-point/
 * tags: easy, array
 */
describe('Fixed point', () => {
  test('Point 1', () => {
    expect(FixedPoint.fixedPoint([0])).toEqual(0);
  });
  test('Point 2', () => {
    expect(FixedPoint.fixedPoint([1])).toEqual(-1);
  });
  test('Point 3', () => {
    expect(FixedPoint.fixedPoint([0, 1])).toEqual(0);
  });
  test('Point 4', () => {
    expect(FixedPoint.fixedPoint([-10, -5, 0, 3, 7])).toEqual(3);
  });
  test('Point 5', () => {
    expect(FixedPoint.fixedPoint([])).toEqual(-1);
  });
});

class FixedPoint {
  public static fixedPoint(A: number[]): number {
    const result = this.searchR(A, 0, A.length - 1);
    return result === Number.POSITIVE_INFINITY ? -1 : result;
  }

  public static searchR(nums: number[], left: number, right: number): number {
    if(left > right) {
      return Number.POSITIVE_INFINITY;
    }
    if(left === right) {
      return nums[left] === left ? left : Number.POSITIVE_INFINITY;
    }

    const m = Math.floor((left + right) / 2);
    const mValue = nums[m] === m ? m : Number.POSITIVE_INFINITY;

    let lValue = Number.POSITIVE_INFINITY;
    let rValue = Number.POSITIVE_INFINITY;
    if(nums[m] >= m) {
      lValue = this.searchR(nums, left, m - 1);
    }
    if(nums[m] <= m) {
      rValue = this.searchR(nums, m + 1, right);
    }

    const result = Math.min(lValue, mValue, rValue);
    return result;
  }
}
