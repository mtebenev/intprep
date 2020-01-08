import {ListNode} from "./utils/list-node";

/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * tags: medium, linked list
 */
describe('Remove nth node from the end', () => {
  test('Case 1', () => {
    const lst = ListNode.createFromArray([1, 2, 3, 4, 5]);
    expect(RemoveNodeFromEnd.removeNthFromEnd(lst, 2)!.toArray()).toEqual([1, 2, 3, 5]);
  });
  test('Case 2', () => {
    const lst = ListNode.createFromArray([1]);
    expect(RemoveNodeFromEnd.removeNthFromEnd(lst, 1)).toBeNull();
  });
  test('Case 3', () => {
    const lst = ListNode.createFromArray([1]);
    expect(RemoveNodeFromEnd.removeNthFromEnd(lst, 0)!.toArray()).toEqual([1]);
  });
  test('Case 4', () => {
    const lst = ListNode.createFromArray([1, 2]);
    expect(RemoveNodeFromEnd.removeNthFromEnd(lst, 2)!.toArray()).toEqual([2]);
  });
});

class RemoveNodeFromEnd {
  public static removeNthFromEnd(head: ListNode, n: number): ListNode | null {
    if(head === null) {
      return null;
    }
    if(n === 0) {
      return head;
    }
    if(head.next === null) {
      return null;
    }
    const dummy = {val: -1, next: head};
    this.removeR(dummy as ListNode, n);
    return dummy.next;
  }

  private static removeR(head: ListNode | null, n: number): number {
    if(head === null) {
      return 0;
    }
    const nextIndex = this.removeR(head.next, n);
    if(nextIndex === n) {
      head.next = head.next!.next;
    }
    return nextIndex + 1;
  }
}
