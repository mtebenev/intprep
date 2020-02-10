import {TreeNode} from './utils/tree-node';

describe('Check symmetric tree', () => {

  test('Case 1', () => {
    expect(CheckSymmetricTree.isSymmetric([1, 1])).toBeTruthy();
    expect(CheckSymmetricTree.isSymmetric([1])).toBeTruthy();
    expect(CheckSymmetricTree.isSymmetric([1, 2])).toBeFalsy();
    expect(CheckSymmetricTree.isSymmetric([1, 1, 1, 1])).toBeTruthy();
    expect(CheckSymmetricTree.isSymmetric([1, 2, 1, 1])).toBeFalsy();
    expect(CheckSymmetricTree.isSymmetric([1, 2, 2, 1])).toBeTruthy();
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1]);
    expect(CheckSymmetricTree.check(tree)).toBeTruthy();
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([1, 2]);
    expect(CheckSymmetricTree.check(tree)).toBeFalsy();
  });
  test('Case 4', () => {
    const tree = TreeNode.createFromArray([1, 2, 2]);
    expect(CheckSymmetricTree.check(tree)).toBeTruthy();
  });
  test('Case 5', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, 1]);
    expect(CheckSymmetricTree.check(tree)).toBeFalsy();
  });
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(CheckSymmetricTree.check(tree)).toBeTruthy();
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, null, 3, null, 3]);
    expect(CheckSymmetricTree.check(tree)).toBeFalsy();
  });

  test('Case 1 R', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(CheckSymmetricTree.check(tree)).toBeTruthy();
  });
  test('Case 2 R', () => {
    const tree = TreeNode.createFromArray([1, 2, 2, null, 3, null, 3]);
    expect(CheckSymmetricTree.check(tree)).toBeFalsy();
  });
});

class CheckSymmetricTree {
  public static check(root: TreeNode): boolean {

    // Push all the tree into the array
    const queue: Array<TreeNode | null> = [root];
    const resultArr: Array<TreeNode | null> = [];
    while(queue.length > 0) {
      const node = queue.shift()!;
      if(node) {
        resultArr.push(node);
        queue.push(node.left!);
        queue.push(node.right!);
      } else {
        resultArr.push(null);
        if(queue.some(n => n !== null)) {
          queue.push(null);
          queue.push(null);
        }
      }
    }

    // Check level by level
    let countOnLevel = 1;
    let levelStart = 0;
    while(levelStart + countOnLevel <= resultArr.length) {
      const levelValues = resultArr.slice(levelStart, levelStart + countOnLevel);
      const levelNumValues = levelValues.map(n => n ? n.val : null);
      if(!this.isSymmetric(levelNumValues)) {
        return false;
      }
      levelStart += countOnLevel;
      countOnLevel *= 2;
    }

    return true;
  }

  public static isSymmetric(levelValues: Array<number | null>): boolean {
    const mid = Math.floor(levelValues.length / 2);
    for(let i = 0; i < mid; i++) {
      if(levelValues[i] !== levelValues[levelValues.length - i - 1]) {
        return false;
      }
    }

    return true;
  }
}
