import {TreeNode} from './utils/tree-node';
import {ITreeNodeEx, ConnectionTester} from './populating-next-right-pointers-in-each-node.spec';

/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 */
describe('Populating Next Right Pointers in Each Node II', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([1]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null]);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1, 2, 3]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null]);
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4, 5, 6, 7]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, 5, 6, 7, null]);
  });
  test('Case 4', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, null]);
  });
  test('Case 5', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, null, null, null, 4]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, null]);
  });
  test('Case 6', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4, null, null, 5]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, 5, null]);
  });
  test('Case 7', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4, 5, null, 6]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, 5, 6, null]);
  });
  test('Case 8', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);
    PopulateNextRightPointersInEachNode2.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, 5, 6, null, 8, null]);
  });
});

export class PopulateNextRightPointersInEachNode2 {
  public static connect(root: ITreeNodeEx): ITreeNodeEx | null {
    return this.connectLevelIterative(root);
  }

  private static connectLevelIterative(root: ITreeNodeEx | null): ITreeNodeEx | null {

    let p2 = root;
    while(p2) {
      let currentParent: ITreeNodeEx | null = p2;
      let leftSibling: ITreeNodeEx | null = null;
      let nextLevelFirst: ITreeNodeEx | null = null;
      while(currentParent) {
        const n: ITreeNodeEx | null = currentParent.left ? currentParent.left : currentParent.right;
        if(!nextLevelFirst && n) {
          nextLevelFirst = n;
        }
        if(leftSibling && n) {
          leftSibling!.next = n;
        }
        if(currentParent.left && currentParent.right) {
          currentParent.left.next = currentParent.right;
        }
        if(currentParent.left || currentParent.right) {
          leftSibling = currentParent.right ? currentParent.right : currentParent.left;
        }
        currentParent = currentParent.next;
      }
      p2 = nextLevelFirst;
    }
    return root;
  }

  private static connectLevelRecursive(parentNode: ITreeNodeEx | null): ITreeNodeEx | null {

    if(parentNode === null) {
      return null;
    }

    let currentParent: ITreeNodeEx | null = parentNode;
    let leftSibling: ITreeNodeEx | null = null;
    let nextLevelFirst: ITreeNodeEx | null = null;
    while(currentParent) {
      const n: ITreeNodeEx | null = currentParent.left ? currentParent.left : currentParent.right;
      if(nextLevelFirst === null && n !== null) {
        nextLevelFirst = n;
      }
      if(leftSibling !== null && n) {
        leftSibling!.next = n;
      }
      if(currentParent.left !== null && currentParent.right !== null) {
        currentParent.left.next = currentParent.right;
      }
      if(currentParent.left || currentParent.right) {
        leftSibling = currentParent.right ? currentParent.right : currentParent.left;
      }
      currentParent = currentParent.next;
    }
    return this.connectLevelRecursive(nextLevelFirst);
  }
}
