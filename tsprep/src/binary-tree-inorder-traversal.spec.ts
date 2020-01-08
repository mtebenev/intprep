import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * tags: medium, binary tree
 */
describe('Binary tree inorder traversal', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([1, null, 2, 3, null]);
    expect(BinaryTreeInorderTraversal.inorderTraversal(tree)).toEqual([1, 3, 2]);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(BinaryTreeInorderTraversal.inorderTraversal(tree)).toEqual([4, 2, 5, 1, 6, 3, 7]);
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
    if(root === null) {
      return [];
    }
    const result: number[] = [];
    const stack: Array<{n: TreeNode, p: boolean}> = [{n: root, p: false}];
    while(stack.length > 0) {
      const lastNode = stack[stack.length - 1];
      if(!lastNode.p) {
        if(lastNode.n.left !== null) {
          stack.push({n: lastNode.n.left, p: false});
        }
        lastNode.p = true;
      } else {
        // Do
        result.push(lastNode.n.val);
        stack.pop();

        // Right
        if(lastNode.n.right !== null) {
          stack.push({n: lastNode.n.right, p: false});
        }
      }
    }

    return result;
  }
}
