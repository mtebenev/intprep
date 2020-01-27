import {ListNode} from '../utils/list-node';

describe('Phone 2020-01-27', () => {
  test('Linked list intersection 1', () => {
    const list1 = ListNode.createFromArray([0, 9, 1, 2, 4]);
    const list2 = ListNode.createFromArray([3]);
    list2.next = list1.next!.next!.next;

    const result = Phone20200127.getIntersectionNode(list1, list2);
    expect(result!.val).toEqual(2);
  });
  test('Linked list intersection 2', () => {
    const list1 = ListNode.createFromArray([0, 9, 1, 2, 4]);
    const list2 = list1;

    const result = Phone20200127.getIntersectionNode(list1, list2);
    expect(result).toEqual(list2);
  });
  test('Linked list intersection 3', () => {
    const list1 = ListNode.createFromArray([0, 9, 1, 2, 4]);
    const list2 = ListNode.createFromArray([0, 9, 1, 2, 4]);

    const result = Phone20200127.getIntersectionNode(list1, list2);
    expect(result).toBeNull();
  });
  test('Linked list intersection 4', () => {
    const list1 = ListNode.createFromArray([3]);
    const list2 = ListNode.createFromArray([2]);
    list2.next = list1;

    const result = Phone20200127.getIntersectionNode(list1, list2);
    expect(result!.val).toEqual(3);
  });
  test('Rect intersection 1', () => {
    const result = Phone20200127.computeArea(-3, 0, 3, 4, 0, -1, 9, 2);
    expect(result).toEqual(45);
  });
});

// Produces array of next values
class Phone20200127 {
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

  public static computeArea(A: number, B: number, C: number, D: number, E: number, F: number, G: number, H: number): number {

    const area1 = Math.abs(D - B) * Math.abs(C - A);
    const area2 = Math.abs(H - F) * Math.abs(G - E);
    let result = 0;

    // Not Intersecting
    if((C < E && D < F) || (G < A && H < B)) {
      result = area1 + area2;
    }
    // Containment
    else if((A >= E && C <= G && B >= F && D <= H) || (E >= A && G <= C && F >= B && H <= E)) {
      result = Math.max(area1, area2);
    } else {
      const xPoints = [A, C, E, G].sort();
      const x = Math.abs(xPoints[2] - xPoints[1]);
      const yPoints = [B, D, F, H].sort();
      const y = Math.abs(yPoints[2] - yPoints[1]);
      const diffArea = x * y;
      result = area1 + area2 - diffArea;
    }

    return result;
  }
}
