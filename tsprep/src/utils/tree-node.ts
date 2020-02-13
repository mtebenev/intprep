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
   * Follows LC compressed format.
   */
  public static createFromArray2(values: Array<number | null>): TreeNode | null {
    if(!values || values.length === 0) {
      return null;
    }
    const rootValue = values[0];
    if(rootValue === null) {
      throw new Error('Invalid tree');
    }

    const root = new TreeNode(rootValue);
    const nodeQueue = new Array<TreeNode | null>();
    nodeQueue.push(root);

    let index = 1;
    while(index < values.length) {
      const node = nodeQueue.shift();
      if(!node) {
        continue;
      }

      let leftNode = null;
      let rightNode = null;
      if(index < values.length) {
        const leftValue = values[index];
        leftNode = leftValue !== null
          ? new TreeNode(leftValue)
          : null;
        index += 1;
      }

      if(index < values.length) {
        const rightValue = values[index];
        rightNode = rightValue !== null
          ? new TreeNode(rightValue)
          : null;
        index += 1;
      }

      if(leftNode || rightNode) {
        nodeQueue.push(leftNode);
        nodeQueue.push(rightNode);
      }

      node.left = leftNode;
      node.right = rightNode;
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

  public static toArray(root: TreeNode): Array<number | null> {
    const nodeQueue: Array<TreeNode | null> = [root];
    const result = [];

    while(nodeQueue.length > 0) {
      const node = nodeQueue.shift()!;
      if(node != null) {
        result.push(node.val);
        nodeQueue.push(node.left);
        nodeQueue.push(node.right);
      } else {
        result.push(null);
        if(nodeQueue.some(n => n ? true : false)) {
          nodeQueue.push(null);
          nodeQueue.push(null);
        }
      }
    }

    let lastPos = result.length - 1;
    let nodeCount = 0;
    while(result[lastPos] === null) {
      lastPos--;
      nodeCount++;
    }

    return result.slice(undefined, result.length - nodeCount);
  }
}
