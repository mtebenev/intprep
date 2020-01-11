/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * tags: medium, search
 */
describe('Search in rotated sorted array', () => {
  test('Case 1', () => {
    expect(SearchInRotatedSortedArray.search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  });
  test('Case 2', () => {
    expect(SearchInRotatedSortedArray.search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  });
  test('Case 3', () => {
    expect(SearchInRotatedSortedArray.search([], 3)).toEqual(-1);
  });
  test('Case 4', () => {
    expect(SearchInRotatedSortedArray.search(null, 3)).toEqual(-1);
  });
  test('Case 5', () => {
    expect(SearchInRotatedSortedArray.search([5, 1, 3], 5)).toEqual(0);
  });
});

class SearchInRotatedSortedArray {
  public static search(nums: number[] | undefined | null, target: number): number {
    if(!nums) {
      return -1;
    }
    let result = -1;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
      const m = Math.floor((left + right) / 2);
      if(nums[m] === target) {
        result = m;
        break;
      }
      if(nums[left] <= nums[m]) {
        if(nums[left] <= target && target <= nums[m]) {
          right = m;
        } else {
          left = m + 1;
        }
      } else if(nums[m] <= nums[right]) {
        if(nums[m] <= target && target <= nums[right]) {
          left = m;
        } else {
          right = m - 1;
        }
      }
    }

    return result;
  }
}
