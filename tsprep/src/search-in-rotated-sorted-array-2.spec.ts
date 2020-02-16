/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * tags: medium, array, binary search
 */
describe('Search in rotated sorted array II', () => {
  test('Search 1', () => {
    expect(SearchInRotatedSortedArray2.search([2, 5, 6, 0, 0, 1, 2], 0)).toBeTruthy();
  });
  test('Search 2', () => {
    expect(SearchInRotatedSortedArray2.search([2, 5, 6, 0, 0, 1, 2], 3)).toBeFalsy();
  });
  test('Search 3', () => {
    expect(SearchInRotatedSortedArray2.search([], 3)).toBeFalsy();
  });
});

class SearchInRotatedSortedArray2 {
  public static search(nums: number[], target: number): boolean {
    const result = this.searchR(nums, 0, nums.length - 1, target);
    return result;
  }

  public static searchR(nums: number[], left: number, right: number, target: number): boolean {
    if(left > right) {
      return false;
    }
    if(left === right) {
      return nums[left] === target;
    }
    if(left < right && nums[left] < nums[right] && (target < nums[left] || target > nums[right])) {
      return false;
    }
    const m = Math.floor((left + right) / 2);
    const isL = this.searchR(nums, left, m, target);
    const isR = this.searchR(nums, m + 1, right, target);

    return isL || isR ? true : false;
  }
}
