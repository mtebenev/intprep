import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/inorder-successor-in-bst/
 * tags: medium, tree
 */
describe('Inorder successor in BST', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([2, 1, 3]);
    const node = TreeNode.findNodeByValue(tree, 1)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)!.val).toEqual(2);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1]);
    const node = TreeNode.findNodeByValue(tree, 1)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)).toBeNull();
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
    const node = TreeNode.findNodeByValue(tree, 6)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)).toBeNull();
  });
  test('Case 4', () => {
    const tree = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
    const node = TreeNode.findNodeByValue(tree, 3)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)!.val).toEqual(4);
  });
  test('Case 5', () => {
    const tree = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
    const node = TreeNode.findNodeByValue(tree, 1)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)!.val).toEqual(2);
  });
  test('Case 6', () => {
    const tree = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
    const node = TreeNode.findNodeByValue(tree, 4)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)!.val).toEqual(5);
  });
  test('Case 7', () => {
    const tree = TreeNode.createFromArray([5, 3, 6, 2, 4, null, null, 1]);
    const node = TreeNode.findNodeByValue(tree, 5)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)!.val).toEqual(6);
  });
  test('Case 8', () => {
    const tree = TreeNode.createFromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const node = TreeNode.findNodeByValue(tree, 2)!;
    expect(InorderSuccessorInBst.inorderSuccessor(tree, node)!.val).toEqual(3);
  });
});

class InorderSuccessorInBst {
  public static inorderSuccessor(root: TreeNode, p: TreeNode): TreeNode | null {
    // Search for the node and put all the intermediate parents in stack.
    let node: TreeNode | null = root;
    const parentStack = [];
    while(node != null) {
      if(node.val === p.val) {
        break;
      }
      parentStack.push(node);
      node = p.val < node.val ? node.left : node.right;
    }

    let result: TreeNode | null = null;
    if(node) {
      if(node.right) {
        result = node.right;
        while(result.left) {
          result = result.left;
        }
      } else {
        // Find the first parent for which the node (or its ancestor) is the left child
        while(parentStack.length > 0) {
          const parentNode = parentStack.pop()!;
          if(parentNode.left === node) {
            result = parentNode;
            break;
          }
          node = parentNode;
        }
      }
    }
    return result;
  }
}
