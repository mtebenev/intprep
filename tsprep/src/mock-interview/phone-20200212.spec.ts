import {ListNode} from '../utils/list-node';

describe('Phone6', () => {
  test('Remove 1', () => {
    const list = ListNode.createFromArray([1]);
    const result = Phone6.removeElements(list, 2)!.toArray();
    expect(result).toEqual([1]);
  });
  test('Remove 2', () => {
    const list = ListNode.createFromArray([1, 2]);
    const result = Phone6.removeElements(list, 2)!.toArray();
    expect(result).toEqual([1]);
  });
  test('Remove 3', () => {
    const list = ListNode.createFromArray([1, 2, 3]);
    const result = Phone6.removeElements(list, 2)!.toArray();
    expect(result).toEqual([1, 3]);
  });
  test('Remove 4', () => {
    const list = ListNode.createFromArray([1, 2, 2, 3]);
    const result = Phone6.removeElements(list, 2)!.toArray();
    expect(result).toEqual([1, 3]);
  });
  test('Remove 5', () => {
    const list = ListNode.createFromArray([2, 1, 2, 2, 3]);
    const result = Phone6.removeElements(list, 2)!.toArray();
    expect(result).toEqual([1, 3]);
  });
});

class Phone6 {
  public static removeElements(head: ListNode | null, val: number): ListNode | null {
    if(!head) {
      return null;
    }

    const reminder = this.removeElements(head.next, val);
    if(head.val === val) {
      return reminder;
    }

    head.next = reminder;
    return head;
  }
}
