import {ListNode} from "./utils/list-node";

/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * tags: easy, linked list
 */
describe('Palindrome linked list', () => {
  test('Case 0', () => {
    expect(PalindromeLinkedList.isPalindrome(ListNode.createFromArray([1, 2, 3, 4, 5]))).toBeFalsy();
  });

  test('Case 1', () => {
    expect(PalindromeLinkedList.isPalindrome(ListNode.createFromArray([1, 2]))).toBeFalsy();
  });

  test('Case 2', () => {
    expect(PalindromeLinkedList.isPalindrome(ListNode.createFromArray([1, 2, 2, 1]))).toBeTruthy();
  });
});

class PalindromeLinkedList {
  public static isPalindrome(head: ListNode): boolean {
    if(head === null) {
      return true;
    }
    const result = this.checkReverse(head, head);
    if(result === true){
      return true;
    } else {
      return false;
    }
  }

  public static checkReverse(currentNode: ListNode | null, head: ListNode): ListNode | null | true {
    if(!currentNode) {
      return head;
    }
    const reverseHead = this.checkReverse(currentNode.next, head);
    if(reverseHead === null) {
      return null;
    }

    if((reverseHead as ListNode).next === null && currentNode === head  && (reverseHead as ListNode).val === currentNode.val) {
      return true;
    }

    return (reverseHead as ListNode).val === currentNode.val
      ? (reverseHead as ListNode).next
      : null;
  }
}

