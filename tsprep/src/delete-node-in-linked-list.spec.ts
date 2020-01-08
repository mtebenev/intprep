import {ListNode} from './utils/list-node';

/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * tags: easy, linked list
 */
describe('Delete node in a linked list', () => {
  test('Case 1', () => {
    const lst = ListNode.createFromArray([4, 5, 1, 9]);
    DeleteNodeInLinedList.deleteNode(lst.next!);
    expect(lst.toArray()).toEqual([4, 1, 9]);
  });
  test('Case 2 (right)', () => {
    const lst = ListNode.createFromArray([4, 5, 1, 9]);
    DeleteNodeInLinedList.deleteNodeRight(lst.next!);
    expect(lst.toArray()).toEqual([4, 1, 9]);
  });
});

// Note: this is my solution but it's not right. We actually don't have to move the values.
// We could simple replace one value and then perform pointer modification.
class DeleteNodeInLinedList {
  public static deleteNode(node: ListNode): void {
    let currentNode = node;
    while(currentNode.next !== null && currentNode.next.next !== null) {
      currentNode.val = currentNode.next.val;
      currentNode = currentNode.next;
    }
    currentNode.val = currentNode.next!.val;
    currentNode.next = null;
  }

  public static deleteNodeRight(node: ListNode): void {
    node.val = node.next!.val;
    node.next = node.next!.next;
  }
}
