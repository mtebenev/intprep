import {ListNode} from '../utils/list-node';

describe('Phone 2019-12-27', () => {
  test('Case 1', () => {
    const list = ListNode.createFromArray([4,5,1,9]);
    Phone20191227.deleteNode(list.next!);
    expect(list.toArray()).toEqual([4,1,9]);
  });
  test('Case 2', () => {
    expect(Phone20191227.hamminWeight(0b00000000000000000000000000001011)).toEqual(3);
  });
  test('Case 3', () => {
    expect(Phone20191227.hamminWeight(0b10000000000000000000000000001011)).toEqual(4);
  });
});

// Produces array of next values
class Phone20191227 {
  public static deleteNode(node: ListNode): void {
    node.val = node.next!.val;
    node.next = node!.next!.next;
  }
  public static hamminWeight(n: number): number {
    let counter = 0;
    while(n !== 0) {
      counter += n & 1;
      n >>>= 1;
    }
    return counter;
  }
}
