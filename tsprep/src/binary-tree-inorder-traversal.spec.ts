import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * tags: medium, binary tree
 */
describe('Binary tree inorder traversal', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray2([1, null, 2, 3, null]);
    expect(BinaryTreeInorderTraversal.inorderTraversal(tree)).toEqual([1, 3, 2]);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3, 4, 5, 6, 7]);
    expect(BinaryTreeInorderTraversal.inorderTraversal(tree)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3]);
    expect(BinaryTreeInorderTraversal.inorderTraversal(tree)).toEqual([2, 1, 3]);
  });
  test('Case 4', () => {
    expect(BinaryTreeInorderTraversal.inorderTraversal(null)).toEqual([]);
  });
});

class BinaryTreeInorderTraversal {
  public static inorderTraversal(root: TreeNode | null): number[] {
    //return this.inorderTraversalRecursive(root);
    return this.inorderTraversalIterative(root);
  }

  // Recursive
  public static inorderTraversalRecursive(root: TreeNode | null): number[] {
    const result: number[] = [];
    this.inorderTraversalRecursiveR(root, result);

    return result;
  }

  private static inorderTraversalRecursiveR(root: TreeNode | null, result: number[]): void {
    if(root === null) {
      return;
    }
    if(root.left) {
      this.inorderTraversalRecursiveR(root.left, result);
    }
    result.push(root.val);

    if(root.right) {
      this.inorderTraversalRecursiveR(root.right, result);
    }
  }

  // Iterative
  public static inorderTraversalIterative(root: TreeNode | null): number[] {
    let currentNode = root;
    const stack: TreeNode[] = [];
    const result = [];
    while(currentNode || stack.length > 0) {
      if(!currentNode) {
        currentNode = stack.pop()!;
      } else {
        while(currentNode.left) {
          stack.push(currentNode);
          currentNode = currentNode!.left;
        }
      }

      result.push(currentNode.val);
      if(currentNode.right) {
        currentNode = currentNode!.right;
      } else {
        currentNode = null;
      }
    }

    return result;
  }
}
