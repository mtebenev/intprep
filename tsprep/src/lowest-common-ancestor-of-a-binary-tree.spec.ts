import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * tags: medium, tree
 * TODO: this solution sucks. Check LC.
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
  test('Find path 1', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3, 4])!;
    const node = TreeNode.findNodeByValue(tree, 4)!;
    const path = CommonLowestAncestorOfaBinaryTree.findPathR(tree, node)!;
    expect(path.map(n => n.val)).toEqual([1, 2, 4]);
  });
  test('Find path 2', () => {
    const tree = TreeNode.createFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const node = TreeNode.findNodeByValue(tree, 1)!;
    const path = CommonLowestAncestorOfaBinaryTree.findPathR(tree, node)!;
    expect(path.map(n => n.val)).toEqual([3, 1]);
  });
});

class CommonLowestAncestorOfaBinaryTree {

  public static lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
    const path1 = this.findPathR(root, p)!;
    const path2 = this.findPathR(root, q)!;

    let resultIdx = 0;
    while(resultIdx < path1.length - 1
      && resultIdx < path2.length - 1
      && path1[resultIdx + 1] === path2[resultIdx + 1]) {
      resultIdx++;
    }
    return path1[resultIdx];
  }

  public static findPathR(root: TreeNode | null, targetNode: TreeNode): TreeNode[] | null {
    if(!root) {
      return null;
    }

    if(root.val === targetNode.val) {
      return [root];
    }

    const left = this.findPathR(root.left, targetNode);
    const right = this.findPathR(root.right, targetNode);

    const result: TreeNode[] | null =
      left ? [root].concat(left!)
        : right ? [root].concat(right!)
          : null;
    return result;
  }
}
