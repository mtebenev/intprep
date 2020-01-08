import {ListNode} from "./utils/list-node";

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * tags: easy, linked list
 */
describe('Linked list cycle', () => {
  test('Case 0', () => {
    const list = ListNode.createFromArray([1, 2, 3, 4]);
    expect(LinkedListCycle.hasCycle(list)).toBeFalsy();
  });

  test('Case 1', () => {
    const list = ListNode.createFromArray([1, 2, 3, 4]);
    let tail = list;
    while(tail.next !== null) {
      tail = tail.next;
    }
    tail.next = list.next;

    expect(LinkedListCycle.hasCycle(list)).toBeTruthy();
  });
});

class LinkedListCycle {
  public static hasCycle(head: ListNode): boolean {
    if(head === null || head.next === null) {
      return false;
    }

    let slow = head;
    let fast = head;
    while(slow.next !== null) {

      if(fast.next === null || fast.next.next === null) {
        return false;
      }
      fast = fast.next!.next;
      if(fast === slow || fast.next === slow) {
        return true;
      }

      slow = slow.next;
    }

    return false;
  }
}

