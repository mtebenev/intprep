import {ListNode} from "./utils/list-node";

/**
 * https://leetcode.com/problems/reverse-linked-list/
 */
test('reverse linked list', () => {
  const list = ListNode.createFromArray([1, 2, 3, 4, 5, 6]);
  expect(reverseListR(list)!.toArray()).toEqual([6, 5, 4, 3, 2, 1]);
});

test('reverse linked list', () => {
  const list = ListNode.createFromArray([1, 2, 3, 4, 5, 6]);
  expect(reverseListI(list)!.toArray()).toEqual([6, 5, 4, 3, 2, 1]);
});

/**
 * Recursive
 */
function reverseListR(head: ListNode | null): ListNode | null {
  if(!head || !head.next) {
    return head;
  }
  const temp = reverseListR(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
}

/**
 * Iterative
 */
function reverseListI(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while(curr != null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
