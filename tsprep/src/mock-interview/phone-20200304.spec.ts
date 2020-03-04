import {TreeNode} from '../utils/tree-node';

describe('Phone20', () => {
  test('Height 1', () => {
    const tree = TreeNode.createFromArray2([3, 9, 20, null, null, 15, 7]);
    expect(Phone20.minDepth(tree!)).toEqual(2);
  });
  test('Height 2', () => {
    const tree = TreeNode.createFromArray2([1, 2]);
    expect(Phone20.minDepth(tree!)).toEqual(2);
  });

  test('Arr 1', () => {
    const s = new Solution([1, 2, 3, 3, 3]);
    const v = s.pick(3);
  });

});

/**
 * https://leetcode.com/problems/random-pick-index/
 * tags: medium, reservoir sampling
 */
class Solution {
  private readonly targetMap: {[idx: number]: number[]};

  constructor(nums: number[]) {
    this.targetMap = {};
    for(let i = 0; i < nums.length; i++) {
      if(this.targetMap[nums[i]] === undefined) {
        this.targetMap[nums[i]] = [i];
      } else {
        this.targetMap[nums[i]].push(i);
      }
    }
  }
  public pick(target: number): number {
    const arr = this.targetMap[target];
    if(!arr) {
      return -1;
    }
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }
}

class Phone20 {
  /**
   * https://leetcode.com/problems/minimum-depth-of-binary-tree/
   * tags: easy, tree
   */
  public static minDepth(root: TreeNode): number {
    if(!root) {
      return 0;
    }
    if(!root.left && !root.right) {
      return 1;
    }
    return Math.min(
      root.left ? 1 + this.minDepth(root.left!) : Number.POSITIVE_INFINITY,
      root.right ? 1 + this.minDepth(root.right!) : Number.POSITIVE_INFINITY);
  }
}
