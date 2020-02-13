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
  test('To array 1', () => {
    const tree = TreeNode.createFromArray([1, 2, 3]);
    const arr = TreeNode.toArray(tree);
    expect(arr).toEqual([1, 2, 3]);
  });
  test('To array 2', () => {
    const tree = TreeNode.createFromArray([1, null, 3]);
    const arr = TreeNode.toArray(tree);
    expect(arr).toEqual([1, null, 3]);
  });
  test('compressed from list 1', () => {
    const tree = TreeNode.createFromArray2([1, 2])!;
    expect(TreeNode.toArray(tree)).toEqual([1, 2]);
  });
  test('compressed from list 2', () => {
    const tree = TreeNode.createFromArray2([1, null, 2, 3, 4])!;
    const resultArr = TreeNode.toArray(tree);
    expect(resultArr).toEqual([1, null, 2, null, null, 3, 4]);
  });
  test('compressed from list 3', () => {
    const tree = TreeNode.createFromArray2([1, null, 2, 3, null, 4, 5])!;
    const resultArr = TreeNode.toArray(tree);
    expect(resultArr).toEqual([1, null, 2, null, null, 3, null, null, null, null, null, 4, 5]);
  });
});
