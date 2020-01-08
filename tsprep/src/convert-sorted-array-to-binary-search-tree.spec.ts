import {TreeNode} from './utils/tree-node';
import {ValidateBst} from './validate-binary-search-tree.spec';

/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * tags: easy, tree
 */
describe('Convert array to BST', () => {
  test('Case 1', () => {
    const tree = ConvertArrayToBst.sortedArrayToBst([-10, -3, 0, 5, 9]);
    expect(ValidateBst.isValidBST(tree)).toBeTruthy();
  });
  test('Case 2', () => {
    const tree = ConvertArrayToBst.sortedArrayToBst([]);
    expect(tree).toBeNull();
  });
  test('Case 3', () => {
    const tree = ConvertArrayToBst.sortedArrayToBst([1]);
    expect(ValidateBst.isValidBST(tree)).toBeTruthy();
  });
});

class ConvertArrayToBst {
  public static sortedArrayToBst(nums: number[]): TreeNode | null {
    if(nums === null || nums.length === 0) {
      return null;
    }
    return this.sortedArrayToBstR(nums, 0, nums.length - 1);
  }

  private static sortedArrayToBstR(nums: number[], startIdx: number, endIdx: number): TreeNode {
    const middleIdx = Math.floor((endIdx + startIdx) / 2);
    const middleNode = new TreeNode(nums[middleIdx]);
    if(middleIdx > startIdx) {
      middleNode.left = this.sortedArrayToBstR(nums, startIdx, middleIdx - 1);
    }
    if(middleIdx < endIdx) {
      middleNode.right = this.sortedArrayToBstR(nums, middleIdx + 1, endIdx);
    }

    return middleNode;
  }
}
