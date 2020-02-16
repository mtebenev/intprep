import {TreeNode} from '../utils/tree-node';

describe('Phone8', () => {
  test('Cousins 1', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3]);
    expect(Phone8.isCousins(tree!, 2, 3)).toBeFalsy();
  });
  test('Cousins 2', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3, 4]);
    expect(Phone8.isCousins(tree!, 4, 3)).toBeFalsy();
  });
  test('Cousins 3', () => {
    const tree = TreeNode.createFromArray2([1, 2, 3, null, 4, null, 5]);
    expect(Phone8.isCousins(tree!, 5, 4)).toBeTruthy();
  });
  test('Search 1', () => {
    expect(Phone8.search([2, 5, 6, 0, 0, 1, 2], 0)).toBeTruthy();
  });
  test('Search 2', () => {
    expect(Phone8.search([2, 5, 6, 0, 0, 1, 2], 3)).toBeFalsy();
  });
  test('Search 3', () => {
    expect(Phone8.search([], 3)).toBeFalsy();
  });
});

class Phone8 {
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

  public static search(nums: number[], target: number): boolean {
    const result = this.searchR(nums, 0, nums.length - 1, target);
    return result;
  }

  public static searchR(nums: number[], left: number, right: number, target: number): boolean {
    if(left > right) {
      return false;
    }
    if(left === right) {
      return nums[left] === target;
    }
    if(left < right && nums[left] < nums[right] && (target < nums[left] || target > nums[right])) {
      return false;
    }
    const m = Math.floor((left + right) / 2);
    const isL = this.searchR(nums, left, m, target);
    const isR = this.searchR(nums, m + 1, right, target);

    return isL || isR ? true : false;
  }
}
