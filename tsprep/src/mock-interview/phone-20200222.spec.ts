import {TreeNode} from '../utils/tree-node';
import {ListNode} from '../utils/list-node';

describe('Phone14', () => {
  test('Case 1', () => {
    expect(Phone14.pivotIndex([1, 2, 1])).toEqual(1);
  });
  test('Case 2', () => {
    expect(Phone14.pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
  });
  test('Case 3', () => {
    expect(Phone14.pivotIndex([1, 2, 3])).toEqual(-1);
  });
  test('Case 4', () => {
    expect(Phone14.pivotIndex([-1, -1, -1, -1, -1, 0])).toEqual(2);
  });
});

class RandomList {
  private readonly head: ListNode;
  private readonly len: number;
  constructor(head: ListNode) {
    this.head = head;
    let n: ListNode | null = head;
    let len = 0;
    while(n) {
      n = n.next;
      len++;
    }
    this.len = len;
  }
  public getRandom(): number {
    const idx = Math.floor(Math.random() * this.len);
    let i = 0;
    let node: ListNode | null = this.head;
    while(node && i < idx) {
      node = node.next;
      i++;
    }

    return node ? node.val : 0;
  }
}

class Phone14 {
  public static pivotIndex(nums: number[]): number {
    if(!nums || nums.length === 0) {
      return -1;
    }
    if(nums.length === 1) {
      return 0;
    }
    const reverse = Array.from(Array(nums.length).keys()).map(x => 0);
    reverse[reverse.length - 1] = nums[nums.length - 1];
    for(let i = nums.length - 2; i >= 0; i--) {
      reverse[i] = reverse[i + 1] + nums[i];
    }

    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if(sum === reverse[i]) {
        return i;
      }
    }

    return -1;
  }
}
