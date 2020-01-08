import {TreeNode} from "./utils/tree-node";

/**
 * https://leetcode.com/problems/symmetric-tree/
 * tags: easy, tree
 */
describe('Symmetric tree', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(SymmetricTree.isSymmetric(tree)).toBeTruthy();
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, null, 3, null, 3]);
    expect(SymmetricTree.isSymmetric(tree)).toBeFalsy();
  });

  test('Case 1 R', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(SymmetricTree.isSymmetricRecurse(tree)).toBeTruthy();
  });
  test('Case 2 R', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, null, 3, null, 3]);
    expect(SymmetricTree.isSymmetricRecurse(tree)).toBeFalsy();
  });
});

class SymmetricTree {
  public static isSymmetric(root: TreeNode): boolean {

    const stackL: Array<TreeNode | null> = [root];
    const stackR: Array<TreeNode | null> = [root];

    while(stackL.length > 0 && stackR.length > 0) {

      const l = stackL.pop();
      const r = stackR.pop();

      if(l === null && r !== null || l !== null && r === null || (l !== null && r != null && l!.val !== r!.val)) {
        return false;
      }

      // Left
      if(l) {
        stackL.push(l.right);
        stackL.push(l.left);
      }

      // Right
      if(r) {
        stackR.push(r.left);
        stackR.push(r.right);
      }
    }

    return stackL.length === 0 && stackR.length === 0 ? true : false;
  }

  public static isSymmetricRecurse(root: TreeNode): boolean {
    return this.checkRecursive(root, root);
  }

  private static checkRecursive(left: TreeNode | null, right: TreeNode | null): boolean {
    if(left === null && right === null) {
      return true;
    }
    if(left === null || right === null) {
      return false;
    }
    if(left.val !== right.val) {
      return false;
    }

    const l = this.checkRecursive(left.left, right.right);
    const r = this.checkRecursive(left.right, right.left);

    return l && r;
  }

}
