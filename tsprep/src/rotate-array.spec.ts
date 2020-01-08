/**
 * https://leetcode.com/problems/rotate-array/
 * tags: easy,
 */
describe('Rotate array', () => {
  test('Case 1', () => {
    let arr = [1,2,3,4,5,6,7];
    rotateReverse(arr, 3);
    expect(arr).toEqual([5,6,7,1,2,3,4]);
  });
   test('Case 2', () => {
     let arr = [-1,-100,3,99];
     rotateReverse(arr, 2);
     expect(arr).toEqual([3,99,-1,-100]);
   });
  test('Case 3', () => {
    let arr = [1, 2, 3, 4];
    rotateReverse(arr, 2);
    expect(arr).toEqual([3, 4, 1, 2]);
  });
});

/**
 * Cyclic replacement algorithm
 */
function rotateCyclic(nums: number[], k: number): void {
  let currentPos = 0;
  let startPos = 0;
  let currentValue = nums[0];
  for(let i = 0; i < nums.length; ++i) {
    const nextPos = (currentPos + k) % nums.length;
    let nextValue = nums[nextPos !== startPos ? nextPos : (nextPos + 1) % nums.length];
    nums[nextPos] = currentValue;
    currentPos = nextPos;
    currentValue = nextValue;

    if(currentPos === startPos) {
      currentPos = (currentPos + 1) % nums.length;
      startPos = currentPos;
    }
  }
}

/**
 * Reverses the array content
 */
function reverseArray(nums: number[], start: number, end: number): void {
  let s = start;
  let e = end;
  while(s < e) {
    let tmp = nums[s];
    nums[s] = nums[e];
    nums[e] = tmp;
    s++;
    e--;
  }

}

/**
 * Implementation with ro
 * @param nums I
 * @param k
 */
function rotateReverse(nums: number[], k: number): void {
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);
}
