export class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }

  public static createFromArray(values: number[]): ListNode {
    const head = new ListNode(values[0]);
    let current = head;
    for(let i = 1; i < values.length; ++i) {
      current.next = new ListNode(values[i]);
      current = current.next;
    }

    return head;
  }

  public toArray(): number[] {
    let current: ListNode | null = this;
    const result: number[] = [];

    do {
      result.push(current.val);
      current = current.next;
    } while(current);

    return result;
  }
}
