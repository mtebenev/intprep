import {ListNode} from './utils/list-node';

/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * tags: linked lists, easy
 * Notes: LC solution with hashmap a lot easier.
 */
describe('Intersection of two linked lits', () => {
  test('Linked list intersection 1', () => {
    const list1 = ListNode.createFromArray([0, 9, 1, 2, 4]);
    const list2 = ListNode.createFromArray([3]);
    list2.next = list1.next!.next!.next;

    const result = IntersectionOfTwoLinkedLists.getIntersectionNode(list1, list2);
    expect(result!.val).toEqual(2);
  });
  test('Linked list intersection 2', () => {
    const list1 = ListNode.createFromArray([0, 9, 1, 2, 4]);
    const list2 = list1;

    const result = IntersectionOfTwoLinkedLists.getIntersectionNode(list1, list2);
    expect(result).toEqual(list2);
  });
  test('Linked list intersection 3', () => {
    const list1 = ListNode.createFromArray([0, 9, 1, 2, 4]);
    const list2 = ListNode.createFromArray([0, 9, 1, 2, 4]);

    const result = IntersectionOfTwoLinkedLists.getIntersectionNode(list1, list2);
    expect(result).toBeNull();
  });
  test('Linked list intersection 4', () => {
    const list1 = ListNode.createFromArray([3]);
    const list2 = ListNode.createFromArray([2]);
    list2.next = list1;

    const result = IntersectionOfTwoLinkedLists.getIntersectionNode(list1, list2);
    expect(result!.val).toEqual(3);
  });
});

class IntersectionOfTwoLinkedLists {
  public static getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    if(headA == headB) {
      return headA;
    }
    if(headA === null || headB === null) {
      return null;
    }

    const stack1 = [];
    let head: ListNode | null = headA;
    while(head != null) {
      stack1.push(head);
      head = head.next;
    }

    const stack2 = [];
    head = headB;
    while(head != null) {
      stack2.push(head);
      head = head.next;
    }

    let i = stack1.length - 1;
    let j = stack2.length - 1;

    if(stack1[i] != stack2[j]) {
      return null;
    }

    while(i > 0 && j > 0) {
      if(stack1[i] == stack2[j] && stack1[i - 1] != stack2[j - 1]) {
        return stack1[i];
      }
      i--;
      j--;
    }

    return stack1[i] == stack2[j] ? stack1[i] : null;
  }
}
