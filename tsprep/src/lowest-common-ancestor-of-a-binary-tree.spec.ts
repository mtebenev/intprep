import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * tags: medium, tree
 * TODO: NOT SOLVED YET, the problem appears incredibly tricky
 */
describe('Lowest Common Ancestor of a Binary Tree', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const left = TreeNode.findNodeByValue(tree, 5);
    const right = TreeNode.findNodeByValue(tree, 1);
    const ancestor = TreeNode.findNodeByValue(tree, 3);
    expect(CommonLowestAncestorOfaBinaryTree.lowestCommonAncestor(tree, left!, right!)).toEqual(ancestor);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const left = TreeNode.findNodeByValue(tree, 5);
    const right = TreeNode.findNodeByValue(tree, 4);
    const ancestor = TreeNode.findNodeByValue(tree, 5);
    expect(CommonLowestAncestorOfaBinaryTree.lowestCommonAncestor(tree, left!, right!)).toEqual(ancestor);
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([1, 2, 3]);
    expect(CommonLowestAncestorOfaBinaryTree.lowestCommonAncestor(tree, tree.left!, tree.right!)).toEqual(tree);
  });
  test('Case 4', () => {
    const tree = TreeNode.createFromArray([1, 2, 3]);
    expect(CommonLowestAncestorOfaBinaryTree.lowestCommonAncestor(tree, tree.left!, tree)).toEqual(tree);
  });
});

class CommonLowestAncestorOfaBinaryTree {
  private static n1: TreeNode | null;
  private static n2: TreeNode | null;

  public static lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
    return this.lowestCommonAncestorRecursive(root, p, q);
  }

  public static lowestCommonAncestorRecursive(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
    this.n1 = null;
    this.n2 = null;
    return this.lowestCommonAncestorR(root, p, q);
  }

  private static lowestCommonAncestorR(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if(root === null) {
      return null;
    }

    let result = this.lowestCommonAncestorR(root.left, p, q);
    if(result) {
      return result;
    }

    result = this.lowestCommonAncestorR(root.right, p, q);
    if(result) {
      return result;
    }

    if(this.n1 && this.n2) {
      return root;
    }

    if(this.n1 === null && root === p) {
      this.n1 = p;
    }
    if(this.n2 === null && root === q) {
      this.n2 = q;
    }

    return (this.n1 && this.n2 && (root === this.n1 || root === this.n2)) ? root : null;
  }
}
