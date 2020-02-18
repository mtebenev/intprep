/**
 * https://leetcode.com/problems/construct-quad-tree/
 * tags: medium, tree
 */

describe('Construct quad tree', () => {
  test('Quad 1', () => {
    const grid = [[0]];
    const tree = QuadTree.construct(grid);

    expect(tree.isLeaf).toBeTruthy();
    expect(tree.val).toEqual(0);
  });
  test('Quad 2', () => {
    const grid = [
      [0, 0],
      [0, 0],
    ];
    const tree = QuadTree.construct(grid);

    expect(tree.isLeaf).toBeTruthy();
    expect(tree.val).toEqual(0);
  });
  test('Quad 3', () => {
    const grid = [
      [10, 20],
      [30, 40],
    ];
    const tree = QuadTree.construct(grid);

    expect(tree.isLeaf).toBeFalsy();
    expect(tree.topLeft!.val).toEqual(10);
    expect(tree.topRight!.val).toEqual(20);
    expect(tree.bottomLeft!.val).toEqual(30);
    expect(tree.bottomRight!.val).toEqual(40);
  });
});

class QuadNode {
  val?: number;
  isLeaf?: boolean;
  topLeft?: NodeQ;
  topRight?: NodeQ;
  bottomLeft?: NodeQ;
  bottomRight?: NodeQ;

  constructor(val?: number, isLeaf?: boolean, topLeft?: NodeQ, topRight?: NodeQ, bottomLeft?: NodeQ, bottomRight?: NodeQ) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }

}

class QuadTree {
  public static construct(grid: number[][]) {
    const result = this.constructR(grid, 0, 0, grid.length - 1, grid[0].length - 1);
    return result;
  }

  public static constructR(grid: number[][], left: number, top: number, right: number, bottom: number): NodeQ {
    if(left === right) {
      const result = new QuadNode(grid[bottom][left], true, undefined, undefined, undefined, undefined);
      return result;
    }

    const horM = (left + right + 1) / 2;
    const verM = (bottom + top + 1) / 2;

    const lt = this.constructR(grid, left, top, horM - 1, verM - 1);
    const rt = this.constructR(grid, horM, top, right, verM - 1);

    const lb = this.constructR(grid, left, verM, horM - 1, bottom);
    const rb = this.constructR(grid, horM, verM, right, bottom);

    if(lt.isLeaf && rt.isLeaf && lb.isLeaf && rb.isLeaf &&
      lt.val === rt.val && lt.val === lb.val && lt.val === rb.val) {
      const result1 = new QuadNode(lt.val!, true, undefined, undefined, undefined, undefined);
      return result1;
    }

    const result2 = new QuadNode(undefined, false, lt, rt, lb, rb);
    return result2;
  }
}
