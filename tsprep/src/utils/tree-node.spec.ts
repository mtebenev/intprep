import {TreeNode} from './tree-node';

describe('TreeNode', () => {

  test('sample construct', () => {
    const tree = TreeNode.createFromArray([3, 9, 20, null, null, 15, 7]);
    expect(tree.val).toEqual(3);
    expect(tree.left!.val).toEqual(9);
    expect(tree.right!.val).toEqual(20);

    expect(tree.left!.left).toBeNull();
    expect(tree.left!.right).toBeNull();

    expect(tree.right!.left!.val).toEqual(15);
    expect(tree.right!.right!.val).toEqual(7);
  });

  test('find node by value', () => {
    const tree = TreeNode.createFromArray([1, 2, 3]);
    expect(TreeNode.findNodeByValue(tree, 2)).toEqual(tree.left);
    expect(TreeNode.findNodeByValue(tree, 3)).toEqual(tree.right);
    expect(TreeNode.findNodeByValue(tree, 1)).toEqual(tree);
    expect(TreeNode.findNodeByValue(tree, 4)).toBeNull();
  });
});
