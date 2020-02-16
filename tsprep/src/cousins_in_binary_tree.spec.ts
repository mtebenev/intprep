import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/cousins-in-binary-tree/
 * tags: easy, tree
 */
describe('Cousins in binary tree', () => {
  test('Cousins 1', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3]);
    expect(CousinsInBinaryTree.isCousins(tree!, 2, 3)).toBeFalsy();
  });
  test('Cousins 2', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3, 4]);
    expect(CousinsInBinaryTree.isCousins(tree!, 4, 3)).toBeFalsy();
  });
  test('Cousins 3', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3, null, 4, null, 5]);
    expect(CousinsInBinaryTree.isCousins(tree!, 5, 4)).toBeTruthy();
  });
});

class CousinsInBinaryTree {
  public static isCousins(root: TreeNode, x: number, y: number): boolean {
    if(!root || x === y) {
      return false;
    }

    let result = false;
    const rootW: {n: TreeNode, l: number, p: TreeNode | null} | null = {n: root, l: 0, p: null};
    const nodeQueue = [rootW];
    let n1: {n: TreeNode, l: number, p: TreeNode | null} | null = null;
    let n2: {n: TreeNode, l: number, p: TreeNode | null} | null = null;

    while(nodeQueue.length > 0 && (!n1 || !n2)) {
      const n = nodeQueue.shift()!;

      if(n.n.val === x) {
        n1 = n;
      } else if(n.n.val === y) {
        n2 = n;
      }

      if(n.n.left) {
        nodeQueue.push({n: n.n.left, l: n.l + 1, p: n.n});
      }
      if(n.n.right) {
        nodeQueue.push({n: n.n.right, l: n.l + 1, p: n.n});
      }
    }
    if(n1 && n2) {
      if(n1.l === n2.l && n1.p != n2.p) {
        result = true;
      }
    }
    return result;
  }
}
