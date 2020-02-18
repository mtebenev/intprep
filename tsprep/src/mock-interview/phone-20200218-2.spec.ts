describe('Phone12', () => {
  test('Point 1', () => {
    expect(Phone12.fixedPoint([0])).toEqual(0);
  });
  test('Point 2', () => {
    expect(Phone12.fixedPoint([1])).toEqual(-1);
  });
  test('Point 3', () => {
    expect(Phone12.fixedPoint([0, 1])).toEqual(0);
  });
  test('Point 4', () => {
    expect(Phone12.fixedPoint([-10, -5, 0, 3, 7])).toEqual(3);
  });
  test('Point 5', () => {
    expect(Phone12.fixedPoint([])).toEqual(-1);
  });
  test('Quad 1', () => {
    const grid = [[0]];
    const tree = Phone12.construct(grid);

    expect(tree.isLeaf).toBeTruthy();
    expect(tree.val).toEqual(0);
  });
  test('Quad 2', () => {
    const grid = [
      [0, 0],
      [0, 0],
    ];
    const tree = Phone12.construct(grid);

    expect(tree.isLeaf).toBeTruthy();
    expect(tree.val).toEqual(0);
  });
  test('Quad 3', () => {
    const grid = [
      [10, 20],
      [30, 40],
    ];
    const tree = Phone12.construct(grid);

    expect(tree.isLeaf).toBeFalsy();
    expect(tree.topLeft!.val).toEqual(10);
    expect(tree.topRight!.val).toEqual(20);
    expect(tree.bottomLeft!.val).toEqual(30);
    expect(tree.bottomRight!.val).toEqual(40);
  });
});

interface IQuadNode {
  val?: number;
  isLeaf: boolean;
  topLeft?: IQuadNode;
  topRight?: IQuadNode;
  bottomLeft?: IQuadNode;
  bottomRight?: IQuadNode;
}

class NodeQ {
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

class Phone12 {
  public static fixedPoint(A: number[]): number {
    const result = this.searchR(A, 0, A.length - 1);
    return result === Number.POSITIVE_INFINITY ? -1 : result;
  }

  public static searchR(nums: number[], left: number, right: number): number {
    if(left > right) {
      return Number.POSITIVE_INFINITY;
    }
    if(left === right) {
      return nums[left] === left ? left : Number.POSITIVE_INFINITY;
    }

    const m = Math.floor((left + right) / 2);
    const mValue = nums[m] === m ? m : Number.POSITIVE_INFINITY;

    let lValue = Number.POSITIVE_INFINITY;
    let rValue = Number.POSITIVE_INFINITY;
    if(nums[m] >= m) {
      lValue = this.searchR(nums, left, m - 1);
    }
    if(nums[m] <= m) {
      rValue = this.searchR(nums, m + 1, right);
    }

    const result = Math.min(lValue, mValue, rValue);
    return result;
  }

  public static construct(grid: number[][]) {
    const result = this.constructR(grid, 0, 0, grid.length - 1, grid[0].length - 1);
    return result;
  }

  public static constructR(grid: number[][], left: number, top: number, right: number, bottom: number): NodeQ {
    if(left === right) {
      const result = new NodeQ(grid[bottom][left], true, undefined, undefined, undefined, undefined);
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
      const result1 = new NodeQ(lt.val!, true, undefined, undefined, undefined, undefined);
      return result1;
    }

    const result2 = new NodeQ(undefined, false, lt, rt, lb, rb);
    return result2;
  }
}
