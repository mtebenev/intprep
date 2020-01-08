/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
test('Case 1', () => {
  expect(removeDuplicates([1, 1, 2])).toEqual(2);
});
test('Case 2', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
});

function removeDuplicates(nums: number[]): number {

  if(nums.length === 1) {
    return 1;
  }

  let currentIdx = 0;
  for(let nextIdx = 1; nextIdx < nums.length; nextIdx++) {
    if(nums[nextIdx] !== nums[currentIdx]) {
      currentIdx++;
      nums[currentIdx] = nums[nextIdx];
    }
  }

  return currentIdx + 1;
}
