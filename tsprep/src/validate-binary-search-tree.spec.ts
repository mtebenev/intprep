import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 */
describe('Validate binary search tree', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([2, 1, 3]);
    expect(ValidateBst.isValidBST(tree)).toBeTruthy();
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([5, 1, 4, null, null, 3, 6]);
    expect(ValidateBst.isValidBST(tree)).toBeFalsy();
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([0]);
    expect(ValidateBst.isValidBST(tree)).toBeTruthy();
  });
  test('Case 4', () => {
    const tree = TreeNode.createFromArray([10, 5, 15, null, null, 6, 20]);
    expect(ValidateBst.isValidBST(tree)).toBeFalsy();
  });
  test('Case 5', () => {
    const tree = TreeNode.createFromArray([1, 1]);
    expect(ValidateBst.isValidBST(tree)).toBeFalsy();
  });
});

export class ValidateBst {
  public static isValidBST(root: TreeNode | null): boolean {
    if(!root) {
      return true;
    }

    return this.checkChildren(root, null, null);
  }

  private static checkChildren(root: TreeNode | null, lower: number | null, upper: number | null): boolean {
    if(!root) {
      return true;
    }
    if(upper != null && root.val >= upper) {
      return false;
    }
    if(root.left && !this.checkChildren(root.left, lower, root.val)) {
      return false;
    }
    if(lower != null && root.val <= lower) {
      return false;
    }
    if(root.right && !this.checkChildren(root.right, root.val, upper)) {
      return false;
    }
    return true;
  }
}

