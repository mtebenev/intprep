import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/longest-univalue-path/
 * tags: easy, binary tree
 */
describe('Longest univalue path', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([5, 4, 5, 1, 1, null, 5]);
    expect(LongestUnivaluePath.uniquePaths(tree)).toEqual(2);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1, 4, 5, 4, 4, null, 5]);
    expect(LongestUnivaluePath.uniquePaths(tree)).toEqual(2);
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([1]);
    expect(LongestUnivaluePath.uniquePaths(tree)).toEqual(0);
  });
  test('Case 4', () => {
    const tree = TreeNode.createFromArray([1, 1, 1, 1, 1, 1, 1]);
    expect(LongestUnivaluePath.uniquePaths(tree)).toEqual(4);
  });
});

class LongestUnivaluePath {
  public static uniquePaths(root: TreeNode | null): number {
    return this.uniquePathsRecursive(root);
  }

  public static uniquePathsRecursive(root: TreeNode | null): number {
    if(root === null) {
      return 0;
    }

    const thisLen = this.getSubtreeHeight(root.left, root.val) + this.getSubtreeHeight(root.right, root.val);
    const result = Math.max(
      thisLen, Math.max(
        this.uniquePathsRecursive(root.left),
        this.uniquePathsRecursive(root.right)
      )
    );
    return result;
  }

  private static getSubtreeHeight(root: TreeNode | null, parentValue: number): number {
    if(root === null || root.val !== parentValue) {
      return 0;
    }
    return Math.max(
      this.getSubtreeHeight(root.left, parentValue) + 1,
      this.getSubtreeHeight(root.right, parentValue) + 1
    );
  }
}
