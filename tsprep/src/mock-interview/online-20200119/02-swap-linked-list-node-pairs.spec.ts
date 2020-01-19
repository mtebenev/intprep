import {ListNode} from '../../utils/list-node';

/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 */
describe('Reverse words', () => {
  test('Case 1', () => {
    const head = ListNode.createFromArray([1, 2, 3, 4]);
    const result = SwapLinkedListNodePairs.swapPairs(head);
    expect(result!.toArray()).toEqual([2, 1, 4, 3]);
  });
  test('Case 2', () => {
    const head = ListNode.createFromArray([1]);
    const result = SwapLinkedListNodePairs.swapPairs(head);
    expect(result!.toArray()).toEqual([1]);
  });
  test('Case 3', () => {
    const head = ListNode.createFromArray([1, 2]);
    const result = SwapLinkedListNodePairs.swapPairs(head);
    expect(result!.toArray()).toEqual([2, 1]);
  });
  test('Case 4', () => {
    const head = ListNode.createFromArray([1, 2, 3]);
    const result = SwapLinkedListNodePairs.swapPairs(head);
    expect(result!.toArray()).toEqual([2, 1, 3]);
  });
  test('Case 5', () => {
    const head = ListNode.createFromArray([1, 2, 3, 4, 5]);
    const result = SwapLinkedListNodePairs.swapPairs(head);
    expect(result!.toArray()).toEqual([2, 1, 4, 3, 5]);
  });
  test('Case 6', () => {
    const head = ListNode.createFromArray([1, 2, 3, 4, 5, 6]);
    const result = SwapLinkedListNodePairs.swapPairs(head);
    expect(result!.toArray()).toEqual([2, 1, 4, 3, 6, 5]);
  });
  test('Case 6', () => {
    expect(SwapLinkedListNodePairs.swapPairs(null)).toBeNull();
  });
});

class SwapLinkedListNodePairs {
  public static swapPairs(head: ListNode | null): ListNode | null {
    const result = head ? head.next ? head.next : head : null;
    let node = head;
    while(node) {
      const nextNode = node.next;
      if(!nextNode) {
        break;
      } else {
        const nextPairNode = nextNode.next;
        const nextPairRes = nextPairNode ? nextPairNode.next ? nextPairNode.next : nextPairNode : null;
        nextNode.next = node;
        node.next = nextPairRes;
        node = nextPairNode;
      }
    }

    return result;
  }
}
