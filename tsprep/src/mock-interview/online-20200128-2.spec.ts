import {TreeNode} from '../utils/tree-node';

describe('Phone MS3', () => {
  /*
  test('Create tree 1', () => {
    const tree = PhoneMs4.sortedArrayToBST([1])!;
    expect(TreeNode.toArray(tree)).toEqual([1]);
  });
  */
  test('Create tree 2', () => {
    const tree = PhoneMs4.sortedArrayToBST([1, 2, 3])!;
    expect(TreeNode.toArray(tree)).toEqual([2, 1, 3]);
  });
});

class PhoneMs4 {
  public static sortedArrayToBST(nums: number[]): TreeNode | null {
    const result = this.sortedArrayToBSTR(nums, 0, nums.length - 1);
    return result;
  }

  private static sortedArrayToBSTR(nums: number[], left: number, right: number): TreeNode | null {
    if(left > right) {
      return null;
    }
    if(left === right) {
      return new TreeNode(nums[left]);
    }

    const middle = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[middle]);
    node.left = this.sortedArrayToBSTR(nums, left, middle - 1);
    node.right = this.sortedArrayToBSTR(nums, middle + 1, right);

    return node;
  }
}
