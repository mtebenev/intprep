export class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  /**
   * Constructs the tree from array.
   */
  public static createFromArray(values: Array<number | null>): TreeNode {

    const rootValue = values[0];
    if(rootValue === null) {
      throw new Error('Invalid tree');
    }

    const root = new TreeNode(rootValue);
    const nodeQueue = new Array<TreeNode | null>();
    nodeQueue.push(root);

    let index = 1;
    while(index < values.length) {
      const node = nodeQueue.shift()!;

      let leftNode = null;
      let rightNode = null;

      if(index < values.length) {
        const leftValue = values[index];
        leftNode = leftValue !== null
          ? new TreeNode(leftValue)
          : null;
        nodeQueue.push(leftNode);
        index++;
      }

      if(index < values.length) {
        const rightValue = values[index];
        rightNode = rightValue !== null
          ? new TreeNode(rightValue)
          : null;
        nodeQueue.push(rightNode);
        index++;
      }

      if(node) {
        node.left = leftNode;
        node.right = rightNode;
      }
    }

    return root;
  }

  /**
   * Finds a node in the tree by the value.
   */
  public static findNodeByValue(root: TreeNode, value: number): TreeNode | null {
    const queue = [root];
    let result: TreeNode | null = null;
    while(queue.length > 0) {
      const node = queue.shift()!;
      if(node.val === value) {
        result = node;
        break;
      }
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
}
