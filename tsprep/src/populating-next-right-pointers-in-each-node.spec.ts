import {TreeNode} from './utils/tree-node';

/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */
describe('Populating Next Right Pointers in Each Node', () => {
  test('Case 1', () => {
    const tree = TreeNode.createFromArray([1]);
    PopulateNextRightPointersInEachNode.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null]);
  });
  test('Case 2', () => {
    const tree = TreeNode.createFromArray([1, 2, 3]);
    PopulateNextRightPointersInEachNode.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null]);
  });
  test('Case 3', () => {
    const tree = TreeNode.createFromArray([1, 2, 3, 4, 5, 6, 7]);
    PopulateNextRightPointersInEachNode.connect(tree as ITreeNodeEx);

    const nextArr = ConnectionTester.toArray(tree as ITreeNodeEx);
    expect(nextArr).toEqual([null, 3, null, 5, 6, 7, null]);
  });
});

// Produces array of next values
export class ConnectionTester {
  public static toArray(root: ITreeNodeEx): Array<number | null> {
    const queue = [root];
    const result: Array<number | null> = [];
    while(queue.length > 0) {
      const node = queue.shift()!;
      if(node!.left) {
        queue.push(node!.left);
      }
      if(node!.right) {
        queue.push(node!.right);
      }
      const nextVal = node.next ? node.next.val : null;
      result.push(nextVal);
    }
    return result;
  }
}

export interface ITreeNodeEx {
  val: number | null;
  left: ITreeNodeEx | null;
  right: ITreeNodeEx | null;
  next: ITreeNodeEx | null;
}

export class PopulateNextRightPointersInEachNode {
  public static connect(root: ITreeNodeEx): ITreeNodeEx {
    if(root === null || !root.left) { // Empty or 1-level
      return root;
    }

    const queue = [root.left, root.right];
    let nodeIndex = 0; // Index in level
    let nodesInLevel = 2;
    let prevNode: ITreeNodeEx | null = null;
    while(queue.length > 0) {
      const node = queue.shift();
      if(node!.left) {
        queue.push(node!.left);
      }
      if(node!.right) {
        queue.push(node!.right);
      }
      if(nodeIndex === nodesInLevel - 1) {
        prevNode!.next = node!;
        node!.next = null;
        nodeIndex = 0;
        nodesInLevel *= 2;
        prevNode = null;
      } else if(nodeIndex === 0) {
        prevNode = node!;
        nodeIndex++;
      } else {
        nodeIndex++;
        prevNode!.next = node!;
        prevNode = node!;
      }
    }
    return root;
  }
}
