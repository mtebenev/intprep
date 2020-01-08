import {TreeNode} from "./utils/tree-node";

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * tags: medium, tree, bfs
 */
describe('Binary tree level order traversal', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([3, 9, 20, null, null, 15, 7]);
    const result = BinaryTreeLevelOrderTraversal.levelOrder(tree);
    expect(result).toEqual(
      [
        [3],
        [9, 20],
        [15, 7]
      ]
    );
  });
});

class BinaryTreeLevelOrderTraversal {
  public static levelOrder(root: TreeNode): number[][] {
    if(root === null) {
      return [];
    }
    const result = [];
    let nextQueue = [root];
    let levelValues = [];
    while(nextQueue.length !== 0) {
      const queue = nextQueue;
      nextQueue = [];
      while(queue.length > 0) {
        let node = queue.shift()!;
        levelValues.push(node!.val);
        if(node.left) {
          nextQueue.push(node.left);
        }
        if(node.right) {
          nextQueue.push(node.right);
        }
      }
      result.push(levelValues);
      levelValues = [];
    }

    return result;
  }
}
