import {ListNode} from "./utils/list-node";

test('Reverse print', () => {

  var str1 = 'hello world';
  var arr1 = str1.split('');
  reverseString(arr1);
  str1 = arr1.join('');
  expect(str1).toEqual('dlrow olleh');
});

// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
test('Swap nodes in pairs', () => {

  const list = ListNode.createFromArray([1, 2, 3, 4]);
  expect(swapNodesInPairs(list)!.toArray()).toEqual([2, 1, 4, 3]);

});

/**
 * https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/
 */
function reverseString(str: string[]): void {
  reverseSubStr(str, 0, str.length - 1);
}

function reverseSubStr(str: string[], start: number, end: number): void {
  if (start >= end) {
    return;
  }

  const tmp = str[start];
  str[start] = str[end];
  str[end] = tmp;

  reverseSubStr(str, start + 1, end - 1);
}

function swapNodesInPairs(head: ListNode | null): ListNode | null {
  if(!head) {
    return null;
  }
  if(!head.next) {
    return head;
  }

  const next = head.next;
  head.next = swapNodesInPairs(next.next);
  next.next = head;

  return next;
}

