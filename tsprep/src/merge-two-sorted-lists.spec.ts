import {ListNode} from "./utils/list-node";

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * tags: easy, linked list
 */
describe('Merge two sorted lists', () => {
  test('Case 1', () => {
    const l1 = ListNode.createFromArray([1, 2, 4]);
    const l2 = ListNode.createFromArray([1, 3, 4]);
    const r = MergeTwoSortedLists.mergeTwoLists(l1, l2);
    expect(r!.toArray()).toEqual([1, 1, 2, 3, 4, 4]);
  });
  test('Case 2', () => {
    const l1 = null;
    const l2 = ListNode.createFromArray([1, 3, 4]);
    const r = MergeTwoSortedLists.mergeTwoLists(l1, l2);
    expect(r!.toArray()).toEqual([1, 3, 4]);
  });
  test('Case 3', () => {
    const l1 = ListNode.createFromArray([5]);
    const l2 = ListNode.createFromArray([1, 3, 4]);
    const r = MergeTwoSortedLists.mergeTwoLists(l1, l2);
    expect(r!.toArray()).toEqual([1, 3, 4, 5]);
  });
  test('Case 1 R', () => {
    const l1 = ListNode.createFromArray([1, 2, 4]);
    const l2 = ListNode.createFromArray([1, 3, 4]);
    const r = MergeTwoSortedLists.mergeTwoListsRecursive(l1, l2);
    expect(r!.toArray()).toEqual([1, 1, 2, 3, 4, 4]);
  });
  test('Case 2 R', () => {
    const l1 = null;
    const l2 = ListNode.createFromArray([1, 3, 4]);
    const r = MergeTwoSortedLists.mergeTwoListsRecursive(l1, l2);
    expect(r!.toArray()).toEqual([1, 3, 4]);
  });
  test('Case 3 R', () => {
    const l1 = ListNode.createFromArray([5]);
    const l2 = ListNode.createFromArray([1, 3, 4]);
    const r = MergeTwoSortedLists.mergeTwoListsRecursive(l1, l2);
    expect(r!.toArray()).toEqual([1, 3, 4, 5]);
  });
});

class MergeTwoSortedLists {
  public static mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let resultNode: ListNode = {val: 0, next: null} as ListNode;
    const resultHead = resultNode;
    while(l1 !== null && l2 !== null) {
      if(l1.val < l2.val) {
        resultNode.next = l1;
        l1 = l1.next;
      } else {
        resultNode.next = l2;
        l2 = l2.next;
      }
      resultNode = resultNode.next;
    }

    let reminder = l1 ? l1 : l2;
    while(reminder !== null) {
      resultNode.next = reminder;
      reminder = reminder.next;
      resultNode = resultNode.next;
    }

    return resultHead.next;
  }

  public static mergeTwoListsRecursive(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    if(l1 !== null && l2 != null) {
      if(l1.val < l2.val) {
        l1.next = this.mergeTwoListsRecursive(l1.next, l2);
        return l1;
      } else {
        l2.next = this.mergeTwoListsRecursive(l1, l2.next);
        return l2;
      }
    }

    if(l1 !== null) {
      return l1;
    }
    if(l2 != null) {
      return l2;
    }

    return null;
  }
}
