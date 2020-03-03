import {ListNode} from '../utils/list-node';

describe('Phone19', () => {
  test('cycle 1', () => {

    const list = ListNode.createFromArray([3, 2, 0, -4]);
    makeCycle(list, 3, 1);
    const result = Phone19.detectCycle(list)!;
    expect(result.val).toEqual(2);
  });
  test('cycle 2', () => {

    const list = ListNode.createFromArray([1, 2]);
    makeCycle(list, 1, 0);
    const result = Phone19.detectCycle(list)!;
    expect(result.val).toEqual(1);
  });
  test('cycle 3', () => {

    const list = ListNode.createFromArray([1]);
    expect(Phone19.detectCycle(list)).toBeNull();
  });
  test('odd 1', () => {
    expect(Phone19.oddEvenList(null!)).toBeNull();
  });
  test('odd 2', () => {
    const list = ListNode.createFromArray([1]);
    expect(Phone19.oddEvenList(list).toArray()).toEqual([1]);
  });
  test('odd 3', () => {
    const list = ListNode.createFromArray([1, 2]);
    expect(Phone19.oddEvenList(list).toArray()).toEqual([1, 2]);
  });
  test('odd 4', () => {
    const list = ListNode.createFromArray([1, 2, 3]);
    expect(Phone19.oddEvenList(list).toArray()).toEqual([1, 3, 2]);
  });
  test('odd 5', () => {
    const list = ListNode.createFromArray([1, 2, 3, 4, 5]);
    expect(Phone19.oddEvenList(list).toArray()).toEqual([1, 3, 5, 2, 4]);
  });
  test('odd 6', () => {
    const list = ListNode.createFromArray([2, 1, 3, 5, 6, 4, 7]);
    expect(Phone19.oddEvenList(list).toArray()).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });
});

function makeCycle(head: ListNode, from: number, to: number): void {
  let fromNode = head;
  for(let i = 0; i < from; i++) {
    fromNode = fromNode.next!;
  }
  let toNode = head;
  for(let i = 0; i < to; i++) {
    toNode = toNode.next!;
  }
  fromNode.next = toNode;
}

class Phone19 {

  /**
   * https://leetcode.com/problems/linked-list-cycle-ii/
   * tags: medium, linked list
   * note: perf/mem: 13/68
   */
  public static detectCycle(head: ListNode): ListNode | null {
    if(head === null || head.next === null) {
      return null;
    }

    let slow = head;
    let fast = head;
    while(slow.next !== null) {

      if(fast.next === null || fast.next.next === null) {
        return null;
      }
      fast = fast.next!.next;
      if(fast === slow || fast.next === slow) {
        return this.findFirstCycleNode(head, slow);
      }
      slow = slow.next;
    }
    return null;
  }

  private static findFirstCycleNode(head: ListNode, cycleNode: ListNode): ListNode {
    if(head == cycleNode) {
      return head;
    }
    let checkNode = head;
    let startCycle = cycleNode;
    while(true) {
      let tempCycle = startCycle;
      do {
        if(checkNode.next == tempCycle) {
          return tempCycle;
        }
        tempCycle = tempCycle.next!;
      } while(tempCycle != startCycle);
      checkNode = checkNode.next!;
    }
  }

  /**
   * https://leetcode.com/problems/odd-even-linked-list/
   * tags: medium, linked list
   */
  public static oddEvenList(head: ListNode): ListNode {
    const headOdd = new ListNode(-1);
    const headEven = new ListNode(-1);

    let current = head;
    let currentOdd = headOdd;
    let currentEven = headEven;

    let isOdd = true;
    while(current !== null) {
      const tail = current.next!;
      if(isOdd) {
        currentOdd.next = current;
        currentOdd = current;
        currentOdd.next = null;
      } else {
        currentEven.next = current;
        currentEven = current;
        currentEven.next = null;
      }
      isOdd = !isOdd;
      current = tail;
    }

    const result = headOdd.next;
    if(result && headEven.next) {
      currentOdd.next = headEven.next;
    }

    return result!;
  }
}
