import {ListNode} from './utils/list-node';

/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * tags: hard, linked list
 * TODO: Check for more sophisticated approaches
 */
describe('Merge k sorted lists', () => {
  test('Case 1', () => {
    expect(MergeKSortedLists.mergeKLists([
      ListNode.createFromArray([1, 4, 5]),
      ListNode.createFromArray([1, 3, 4]),
      ListNode.createFromArray([2, 6]),
    ]).toArray()).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });
  test('Case 2', () => {
    expect(MergeKSortedLists.mergeKLists([
      null,
      null,
    ])).toBeNull();
  });
});

class MergeKSortedLists {
  public static mergeKLists(lists: Array<ListNode | null>): ListNode {
    if(lists === null || lists.length === 0) {
      return null!;
    }
    const resultHead = new ListNode(-1);
    let currentResultHead = resultHead;
    const heads: Array<ListNode | null> = lists.filter(h => h !== null).map(h => h);
    while(heads.length > 1) {
      const minHead = heads.reduce((prev, curr) => curr!.val < prev!.val ? curr : prev);
      const minHeadIndex = heads.indexOf(minHead);
      currentResultHead.next = heads[minHeadIndex];
      currentResultHead = currentResultHead.next!;
      heads[minHeadIndex] = currentResultHead.next;

      // Remove head if reached the end
      if(heads[minHeadIndex] === null) {
        heads.splice(minHeadIndex, 1);
      }
    }

    // It may be emptry for case [null, null]
    if(heads.length > 0) {
      currentResultHead.next = heads[0];
    }
    return resultHead.next!;
  }
}
