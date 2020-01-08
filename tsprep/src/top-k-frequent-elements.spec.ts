import {Heap} from "./utils/heap";

/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
describe('Top K Frequent Elements', () => {
  test('Case 1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('Case 2', () => {
    expect(topKFrequent([-1, -1], 1)).toEqual([-1]);
  });

  test('Case 3', () => {
    expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([-1, 2]);
  });
});

function topKFrequent(nums: number[], k: number): number[] {
  // Calculate frequencies
  const frequences = new Map<number, number>();
  for(let i = 0; i < nums.length; ++i) {
    if(frequences.has(nums[i])) {
      frequences.set(nums[i], frequences.get(nums[i])! + 1);
    } else {
      frequences.set(nums[i], 1);
    }
  }

  // Heapify
  const heapFunc = (l: number, r: number) => {
    return frequences.get(l)! < frequences.get(r)! ? true : false;
  }
  const heap = new Heap<number>(heapFunc);
  frequences.forEach((v, k) => {
    heap.push(k);
  });

  // Result
  const result: number[] = [];
  for(let i = 0; i < k; i++) {
    result.push(heap.pop()!);
  }

  return result;
}
