import {TreeNode} from "./utils/tree-node";

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
describe('Max height of binary tree', () => {
  test('Sample 1', () => {

    const tree = TreeNode.createFromArray([3,9,20,null,null,15,7]);
    expect(maxDepth(tree)).toEqual(3);
  });
});

function maxDepth(root: TreeNode | null): number {
  if(!root) {
    return 0;
  }

  if(!root.left && !root.right) {
    return 1;
  }

  const leftDepth = root.left ? maxDepth(root.left) + 1 : 0;
  const rightDepth = root.right ? maxDepth(root.right) + 1 : 0;
  return Math.max(leftDepth, rightDepth);
};
