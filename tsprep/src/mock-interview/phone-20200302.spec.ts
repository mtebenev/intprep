import {TreeNode} from '../utils/tree-node';

describe('Phone18', () => {
  test('Island 1', () => {
    const matrix = [
      [1, 1],
      [1, 1]
    ];

    expect(Phone18.maxAreaOfIsland(matrix)).toEqual(4);
  });
  test('Island 2', () => {
    const matrix = [
      [0],
    ];

    expect(Phone18.maxAreaOfIsland(matrix)).toEqual(0);
  });
  test('Island 3', () => {
    const matrix = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]];

    expect(Phone18.maxAreaOfIsland(matrix)).toEqual(6);
  });
  test('Island 4', () => {
    const matrix = [[0,0,0,0,0,0,0,0]];

    expect(Phone18.maxAreaOfIsland(matrix)).toEqual(0);
  });
});

class Phone18 {
  public static maxAreaOfIsland(grid: number[][]): number {
    const height = grid.length;
    const width = grid[0].length;

    let maxArea = 0;
    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if(grid[i][j] === 1) {
          const area = this.getArea(grid, i, j);
          maxArea = Math.max(maxArea, area);
        }
      }
    }

    return maxArea;
  }

  public static getArea(grid: number[][], i: number, j: number): number {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 1) {
      return 0;
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let area = 1;
    grid[i][j] = -1;
    for(let idx = 0; idx < directions.length; idx++) {
      area += this.getArea(grid, i + directions[idx][0], j + directions[idx][1]);
    }

    return area;
  }
}
