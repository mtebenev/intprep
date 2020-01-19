/**
 * https://leetcode.com/problems/rotting-oranges/
 * tags: easy, bfs
 */
describe('Rottling oranges', () => {
  test('Case 1', () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1]
    ];
    expect(RottlingOranges.orangesRotting(grid)).toEqual(4);
  });
  test('Case 2', () => {
    const grid = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1]
    ];
    expect(RottlingOranges.orangesRotting(grid)).toEqual(-1);
  });
  test('Case 3', () => {
    const grid = [
      [0, 2]
    ];
    expect(RottlingOranges.orangesRotting(grid)).toEqual(0);
  });
});

class RottlingOranges {
  public static orangesRotting(grid: number[][]): number {
    const queue: Array<{i: number, j: number, t: number}> = [];
    const height = grid.length;
    const width = grid[0].length;

    let hasFresh = false;
    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if(grid[i][j] === 2) {
          queue.push({i, j, t: 0});
        } else if(grid[i][j] === 1) {
          hasFresh = true;
        }
      }
    }

    if(!hasFresh) {
      return 0;
    }

    let maxT = 0;
    while(queue.length > 0) {
      const {i, j, t} = queue.shift()!;
      if(grid[i][j] === 1) {
        if(t > maxT) {
          maxT = t;
        }
        grid[i][j] = 2;
      }
      if(i > 0 && grid[i - 1][j] === 1) {
        queue.push({i: i - 1, j, t: t + 1});
      }
      if(i < height - 1 && grid[i + 1][j] === 1) {
        queue.push({i: i + 1, j, t: t + 1});
      }
      if(j > 0 && grid[i][j - 1] === 1) {
        queue.push({i, j: j - 1, t: t + 1});
      }
      if(j < width - 1 && grid[i][j + 1] === 1) {
        queue.push({i, j: j + 1, t: t + 1});
      }
    }

    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if(grid[i][j] === 1) {
          maxT = -1;
        }
      }
    }

    return maxT;
  }
}
