import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/count-univalue-subtrees/
 * tags: medium, tree
 */
describe('Count univalue subtrees', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([5, 1, 5, 5, 5, null, 5]);
    const result = CountUnivalueSubtrees.countUnivalSubtrees(tree);
    expect(result).toEqual(4);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray(
      [7, 82, 82, -79, 98, 98, -79, -79, null, -28, -24, -28, -24, null,
        -79, null, 97, 65, -4, null, 3, -4, 65, 3, null, 97]
    );
    const result = CountUnivalueSubtrees.countUnivalSubtrees(tree);
    expect(result).toEqual(8);
  });
});

class CountUnivalueSubtrees {
  public static countUnivalSubtrees(root: TreeNode): number {
    const {count, isUniValue} = this.countUnivalSubtreesR(root);
    return count;
  }

  private static countUnivalSubtreesR(root: TreeNode | null): {count: number, isUniValue: boolean} {
    if(!root) {
      return {count: 0, isUniValue: true};
    }
    if(!root.left && !root.right) {
      return {count: 1, isUniValue: true};
    }
    const l = this.countUnivalSubtreesR(root.left);
    const r = this.countUnivalSubtreesR(root.right);

    const leftSame = (root.left && root.left.val === root.val) || !root.left ? true : false;
    const rightSame = (root.right && root.right.val === root.val) || !root.right ? true : false;

    const isUni = leftSame && rightSame && l.isUniValue && r.isUniValue ? true : false;
    return isUni ? {count: l.count + r.count + 1, isUniValue: true} : {count: l.count + r.count, isUniValue: false};
  }
}
