/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * tags: easy, array
 */
describe('Intersection of two arrays', () => {
  test('Case 1', () => {
    expect(intersection2([1,2,2,1], [2,2])).toEqual([2,2]);
  });

  test('Case 2', () => {
    expect(intersection2([4,9,5], [9,4,9,8,4])).toEqual([4,9]);
  });
});

function intersection2(nums1: number[], nums2: number[]): number[] {
  const trackMap: {[s: number]: {a1?: number, a2?: number}} = {};

  for(let i = 0; i < nums1.length; ++i) {
    if(trackMap[nums1[i]] === undefined) {
      trackMap[nums1[i]] = {a1: 1};
    } else {
      trackMap[nums1[i]].a1 = trackMap[nums1[i]].a1! + 1;
    }
  }
  for(let i = 0; i < nums2.length; ++i) {
    if(trackMap[nums2[i]] !== undefined) {
      if(trackMap[nums2[i]].a2 === undefined) {
        trackMap[nums2[i]].a2 = 1;
      } else {
        trackMap[nums2[i]].a2 = trackMap[nums2[i]].a2! + 1;
      }
    }
  }

  const result: number[] = [];
  for (const k in trackMap) {
    if(trackMap[k].a1 !== undefined && trackMap[k].a2 !== undefined) {
      const count = Math.min(trackMap[k].a1!, trackMap[k].a2!)
      for(let i = 0; i < count; ++i) {
        result.push(parseInt(k));
      }
    }
  }

  return result;
}
