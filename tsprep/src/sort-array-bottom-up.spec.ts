/**
 * https://leetcode.com/problems/sort-an-array/
 * Bottom-up approach
 */
describe('Sort array bottom-up approach', () => {
  test('Case 1', () => {
    expect(sortArray([5,2,3,1])).toEqual([1,2,3,5]);
  });
  test('Case 2', () => {
    expect(sortArray([5,1,1,2,0,0])).toEqual([0,0,1,1,2,5]);
  });
});

function sortArray(nums: number[] | null): number[] | null {
  if(!nums || nums.length < 2) {
    return nums;
  }
  let arrays = nums.map(n => [n]);
  while(arrays.length > 1) {
    let mergedArrays = [];
    for(let i = 0; i < arrays.length; i+=2) {
      let arr1 = arrays[i];
      let arr2 = i < arrays.length - 1 ? arrays[i + 1] : [];
      mergedArrays.push(mergeArrays(arr1, arr2));
    }
    arrays = mergedArrays;
  }

  return arrays[0];
}

function mergeArrays(arr1: number[], arr2: number[]): number[] {
  let cursor1 = 0;
  let cursor2 = 0;

  let result = [];
  while(cursor1 < arr1.length && cursor2 < arr2.length) {
    if(arr1[cursor1] < arr2[cursor2]) {
      result.push(arr1[cursor1]);
      cursor1++;
    } else {
      result.push(arr2[cursor2]);
      cursor2++;
    }
  }
  while(cursor1 < arr1.length) {
    result.push(arr1[cursor1]);
    cursor1++;
  }

  while(cursor2 < arr2.length) {
    result.push(arr2[cursor2]);
    cursor2++;
  }

  return result;
}
