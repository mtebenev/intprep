import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
describe('https://leetcode.com/problems/kth-smallest-element-in-a-bst/', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([3, 1, 4, null, 2]);
    expect(kthSmallest(tree, 1)).toEqual(1);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
    expect(kthSmallest(tree, 3)).toEqual(3);
  });
});

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root: TreeNode, k: number): number {

  let currentNode: TreeNode | null = root;
  let currentIdx = 0;
  const stack: Array<TreeNode> = [];

  while(stack.length > 0 || currentNode) {

    if(currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop()!;
      currentIdx++;
      if(currentIdx === k) {
        return currentNode.val;
      }
      currentNode = currentNode.right;
    }
  }

  return -1;
}
