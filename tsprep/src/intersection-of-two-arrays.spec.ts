/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * tags: easy, array
 */
describe('Intersection of two arrays', () => {
  test('Case 1', () => {
    expect(intersection([1,2,2,1], [2,2])).toEqual([2]);
  });

  test('Case 2', () => {
    expect(intersection([4,9,5], [9,4,9,8,4])).toEqual([4,9]);
  });
});

function intersection(nums1: number[], nums2: number[]): number[] {
  const trackMap: {[s: number]: {a1?: boolean, a2?: boolean}} = {};

  for(let i = 0; i < nums1.length; ++i) {
    if(trackMap[nums1[i]] === undefined) {
      trackMap[nums1[i]] = {a1: true};
    }
  }
  for(let i = 0; i < nums2.length; ++i) {
    if(trackMap[nums2[i]] !== undefined) {
      trackMap[nums2[i]].a2 = true;
    }
  }

  const result: number[] = [];
  for (const k in trackMap) {
    if(trackMap[k].a1 && trackMap[k].a2) {
      result.push(parseInt(k));
    }
  }

  return result;
}
