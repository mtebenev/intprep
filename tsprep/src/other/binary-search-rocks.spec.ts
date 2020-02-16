describe('Binary search rocks', () => {
  test('Exact search 1', () => {
    expect(BinarySearchRocks.exactSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toEqual(4);
  });
  test('Exact search 2', () => {
    expect(BinarySearchRocks.exactSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toEqual(-1);
  });
});

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

}
