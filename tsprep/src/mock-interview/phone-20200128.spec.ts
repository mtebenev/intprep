describe('Phone AMA1', () => {
  test('Mostcommonword 1', () => {
    const p = 'Bob hit a ball, the hit BALL flew far after it was hit.';
    const b = ['hit'];
    expect(PhoneAma1.mostCommonWord(p, b)).toEqual('ball');
  });
  test('Shortest 1', () => {
    const grid = [
      [1, 1],
      [1, 1]
    ];
    expect(PhoneAma1.getShortestPath(grid, {i: 0, j: 0}, {i: 1, j: 1})).toEqual(2);
  });
  test('Cut forest 1', () => {
    const grid = [
      [1, 2, 3],
      [0, 0, 4],
      [7, 6, 5]
    ];
    expect(PhoneAma1.cutOffTree(grid)).toEqual(6);
  });
  test('Cut forest 2', () => {
    const grid = [
      [1, 2, 3],
      [0, 0, 0],
      [7, 6, 5]
    ];
    expect(PhoneAma1.cutOffTree(grid)).toEqual(-1);
  });
  test('Cut forest 3', () => {
    const grid = [
      [2, 3, 4],
      [0, 0, 5],
      [8, 7, 6]
    ];
    expect(PhoneAma1.cutOffTree(grid)).toEqual(6);
  });
});

class PhoneAma1 {
  public static mostCommonWord(paragraph: string, banned: string[]): string {
    const words: {[idx: string]: number} = {};
    banned.forEach(w => {
      words[w] = -1;
    });

    const tokens = paragraph
      .split(/[\s!?',;.]+/)
      .filter(t => t.length > 0)
      .map(t => t.toLowerCase());

    let result = '';
    let maxRate = 0;
    tokens.forEach(t => {
      if(words[t] !== -1) {
        let frequency = 1;
        if(words[t] === undefined) {
          words[t] = 1;
        } else {
          words[t]++;
          frequency = words[t];
        }
        if(frequency > maxRate) {
          maxRate = frequency;
          result = t;
        }
      }
    });

    return result;
  }

  public static cutOffTree(forest: number[][]): number {
    const height = forest.length;
    const width = forest[0].length;
    // Collect points
    const points = [];
    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if(forest[i][j] !== 0 && forest[i][j] !== 1) {
          points.push({value: forest[i][j], i, j});
        }
      }
    }

    // Sort points
    points.sort((a, b) => a.value - b.value);

    // Sum paths
    let start = {i: 0, j: 0};
    let sum = 0;
    for(let i = 0; i < points.length; i++) {
      let leg = this.getShortestPath(forest, start, {i: points[i].i, j: points[i].j});
      if(leg === -1) {
        return -1;
      }
      sum += leg;
      start = {i: points[i].i, j: points[i].j};
    }

    return sum;
  }

  public static getShortestPath(matrix: number[][], start: {i: number, j: number}, end: {i: number, j: number}): number {
    const height = matrix.length;
    const width = matrix[0].length;
    if(start.i < 0 || start.i >= height || start.j < 0 || start.j >= width || matrix[start.i][start.j] === -1 || matrix[start.i][start.j] === 0) {
      return -1;
    }
    if(start.i === end.i && start.j === end.j) {
      return 0;
    }

    const prev = matrix[start.i][start.j];
    matrix[start.i][start.j] = -1;

    let r1 = this.getShortestPath(matrix, {i: start.i - 1, j: start.j}, end);
    let r2 = this.getShortestPath(matrix, {i: start.i + 1, j: start.j}, end);
    let r3 = this.getShortestPath(matrix, {i: start.i, j: start.j - 1}, end);
    let r4 = this.getShortestPath(matrix, {i: start.i, j: start.j + 1}, end);
    matrix[start.i][start.j] = prev;

    const nextPoints = [r1, r2, r3, r4].filter(r => r !== -1);
    const result = nextPoints.length > 0 ? Math.min(...nextPoints) + 1 : -1;
    return result;
  }
}
