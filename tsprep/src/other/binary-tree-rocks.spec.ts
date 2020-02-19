import {TreeNode} from '../utils/tree-node';

describe('Binary tree rocks', () => {
  test('Node exists 1', () => {
    const tree = TreeNode.createFromArray2([1])!;
    expect(BinaryTreeRocks.isNodeExist(tree, 0, 0)).toBeTruthy();
  });
  test('Node exists 2', () => {
    const tree = TreeNode.createFromArray2([1, 2])!;
    expect(BinaryTreeRocks.isNodeExist(tree, 1, 0)).toBeTruthy();
  });
  test('Node exists 3', () => {
    const tree = TreeNode.createFromArray2([0, 0, 1, 0, 1, 2, 3, 0])!;
    expect(BinaryTreeRocks.isNodeExist(tree, 3, 0)).toBeTruthy();
  });
  test('Node exists 4', () => {
    const tree = TreeNode.createFromArray2([0, 0, 1, 0, 1, 2, 3, 0])!;
    expect(BinaryTreeRocks.isNodeExist(tree, 3, 1)).toBeFalsy();
  });
});

class BinaryTreeRocks {

  /**
   * Checks if a node exists on the last level of the complete binary tree.
   */
  public static isNodeExist(root: TreeNode, level: number, idx: number): boolean {
    let left = 0;
    let right = Math.pow(2, level) - 1;
    let pivot;
    let node = root;
    for(let i = 0; i < level; ++i) {
      pivot = left + (right - left) / 2;
      if(idx <= pivot) {
        node = node.left!;
        right = pivot;
      } else {
        node = node.right!;
        left = pivot + 1;
      }
    }
    return node != null;
  }
}
