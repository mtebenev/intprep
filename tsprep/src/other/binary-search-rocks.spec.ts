describe('Binary search rocks', () => {
  test('Exact search 1', () => {
    expect(BinarySearchRocks.exactSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toEqual(4);
  });
  test('Exact search 2', () => {
    expect(BinarySearchRocks.exactSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toEqual(-1);
  });

  test('Bisect left 1', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(BinarySearchRocks.bisectLeft(arr, 3)).toEqual(2);
  });

  test('Bisect right 1', () => {
    const arr = [1, 2, 3, 3, 4, 5, 6];
    expect(BinarySearchRocks.bisectRight(arr, 3)).toEqual(4);
  });

  test('Index left', () => {
    const arr = [1, 2, 3, 3, 5, 6, 7];
    expect(BinarySearchRocks.index(arr, 3)).toEqual(2);
    expect(BinarySearchRocks.index(arr, 4)).toEqual(-1);
  });

  test('Find less than', () => {
    const arr = [1, 2, 3, 3, 5, 6, 7];
    expect(BinarySearchRocks.findLt(arr, 3)).toEqual(1);
    expect(BinarySearchRocks.findLt(arr, 4)).toEqual(3);
    expect(BinarySearchRocks.findLt(arr, 10)).toEqual(6);
  });

  test('Find less or equal', () => {
    const arr = [1, 2, 3, 3, 5, 6, 7];
    expect(BinarySearchRocks.findLe(arr, 4)).toEqual(3);
  });

  test('Find leftmost value greater than x', () => {
    const arr = [1, 2, 3, 3, 5, 6, 7];
    expect(BinarySearchRocks.findGt(arr, 3)).toEqual(4);
    expect(BinarySearchRocks.findGt(arr, 10)).toEqual(-1);
  });

  test('Find leftmost item greater than or equal to x', () => {
    const arr = [1, 2, 3, 3, 5, 6, 7];
    expect(BinarySearchRocks.findGe(arr, 4)).toEqual(4);
    expect(BinarySearchRocks.findGe(arr, 10)).toEqual(-1);
  });
});

/**
 * Binary search tools (borrowed from python).
 */
class BinarySearchRocks {

  public static exactSearch(nums: number[], target: number): number {
    let lo = 0;
    let hi = nums.length - 1;
    while(lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if(nums[mid] < target) {
        lo = mid + 1;
      } else if(nums[mid] > target) {
        hi = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  /**
   * https://github.com/python/cpython/blob/3.8/Lib/bisect.py
   */
  public static bisectLeft(nums: number[], target: number, start?: number, end?: number): number {
    let lo = start !== undefined ? start : 0;
    let hi = end !== undefined ? end : nums.length;

    let mid = 0;
    while(lo < hi) {
      mid = Math.floor((lo + hi) / 2);
      if(nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  }

  public static bisectRight(nums: number[], target: number, start?: number, end?: number): number {
    let lo = start !== undefined ? start : 0;
    let hi = end !== undefined ? end : nums.length;

    let mid = 0;
    while(lo < hi) {
      mid = Math.floor((lo + hi) / 2);
      if(nums[mid] > target) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  }

  /**
   * Returns the leftmost occurrence or -1.
   */
  public static index(nums: number[], target: number): number {
    const r = this.bisectLeft(nums, target);
    return r < nums.length && nums[r] === target ? r : -1;
  }

  /**
   * Find rightmost value less than x.
   */
  public static findLt(nums: number[], target: number): number {
    const r = this.bisectLeft(nums, target);
    return r > 0 ? r - 1 : -1;
  }

  /**
   * Find rightmost value less than or equal to x.
   */
  public static findLe(nums: number[], target: number): number {
    const r = this.bisectRight(nums, target);
    return r > 0 ? r - 1 : -1;
  }

  /**
   * Find leftmost value greater than x.
   */
  public static findGt(nums: number[], target: number): number {
    const r = this.bisectRight(nums, target);
    return r < nums.length ? r : -1;
  }

  /**
   * Find leftmost item greater than or equal to x.
   */
  public static findGe(nums: number[], target: number): number {
    const r = this.bisectLeft(nums, target);
    return r < nums.length ? r : -1;
  }
}
