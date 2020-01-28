/**
 * https://leetcode.com/problems/cut-off-trees-for-golf-event/
 * tags: hard, bfs
 * TODO: check A-star, Hadlock's algorithm.
 */
describe('Cut off trees', () => {
  test('Shortest 1', () => {
    const grid = [
      [1, 1],
      [1, 1]
    ];
    expect(CutOffTrees.getShortestPathBfs(grid, {i: 0, j: 0}, {i: 1, j: 1})).toEqual(2);
  });
  test('Cut forest 1', () => {
    const grid = [
      [1, 2, 3],
      [0, 0, 4],
      [7, 6, 5]
    ];
    expect(CutOffTrees.cutOffTree(grid)).toEqual(6);
  });
  test('Cut forest 2', () => {
    const grid = [
      [1, 2, 3],
      [0, 0, 0],
      [7, 6, 5]
    ];
    expect(CutOffTrees.cutOffTree(grid)).toEqual(-1);
  });
  test('Cut forest 3', () => {
    const grid = [
      [2, 3, 4],
      [0, 0, 5],
      [8, 7, 6]
    ];
    expect(CutOffTrees.cutOffTree(grid)).toEqual(6);
  });
  test('Cut forest 4', () => {
    const grid = [
      [63750247, 40643210, 95516857, 89928134, 66334829, 58741187, 76532780, 45104329],
      [3219401, 97566322, 9135413, 75944198, 93735601, 33923288, 50116695, 83660397],
      [64460750, 53045740, 31903386, 78155821, 90848739, 38769489, 99349027, 85982891],
      [30628785, 51077683, 70534803, 67460877, 91077770, 74197235, 5696362, 91459886],
      [56105195, 82479378, 45937951, 52817583, 2768114, 43329099, 28189138, 21418604]];
    expect(CutOffTrees.cutOffTree(grid)).toEqual(192);
  });
  test('Cut forest 5', () => {
    const grid = [
      [69438, 55243, 0, 43779, 5241, 93591, 73380],
      [847, 49990, 53242, 21837, 89404, 63929, 48214],
      [90332, 49751, 0, 3088, 16374, 70121, 25385],
      [14694, 4338, 87873, 86281, 5204, 84169, 5024],
      [31711, 47313, 1885, 28332, 11646, 42583, 31460],
      [59845, 94855, 29286, 53221, 9803, 41305, 60749],
      [95077, 50343, 27947, 92852, 0, 0, 19731],
      [86158, 63553, 56822, 90251, 0, 23826, 17478],
      [60387, 23279, 78048, 78835, 5310, 99720, 0],
      [74799, 48845, 60658, 29773, 96129, 90443, 14391],
      [65448, 63358, 78089, 93914, 7931, 68804, 72633],
      [93431, 90868, 55280, 30860, 59354, 62083, 47669],
      [81064, 93220, 22386, 22341, 95485, 20696, 13436],
      [50083, 0, 89399, 43882, 0, 13593, 27847],
      [0, 12256, 33652, 69301, 73395, 93440, 0],
      [42818, 87197, 81249, 33936, 7027, 5744, 64710],
      [35843, 0, 99746, 52442, 17494, 49407, 63016],
      [86042, 44524, 0, 0, 26787, 97651, 28572],
      [54183, 83466, 96754, 89861, 84143, 13413, 72921],
      [89405, 52305, 39907, 27366, 14603, 0, 14104],
      [70909, 61104, 70236, 30365, 0, 30944, 98378],
      [20124, 87188, 6515, 98319, 78146, 99325, 88919],
      [89669, 0, 64218, 85795, 2449, 48939, 12869],
      [93539, 28909, 90973, 77642, 0, 72170, 98359],
      [88628, 16422, 80512, 0, 38651, 50854, 55768],
      [13639, 2889, 74835, 80416, 26051, 78859, 25721],
      [90182, 23154, 16586, 0, 27459, 3272, 84893],
      [2480, 33654, 87321, 93272, 93079, 0, 38394],
      [34676, 72427, 95024, 12240, 72012, 0, 57763],
      [97957, 56, 83817, 45472, 0, 24087, 90245],
      [32056, 0, 92049, 21380, 4980, 38458, 3490],
      [21509, 76628, 0, 90430, 10113, 76264, 45840],
      [97192, 58807, 74165, 65921, 45726, 47265, 56084],
      [16276, 27751, 37985, 47944, 54895, 80706, 2372],
      [28438, 53073, 0, 67255, 38416, 63354, 69262],
      [23926, 75497, 91347, 58436, 73946, 39565, 10841],
      [34372, 69647, 44093, 62680, 32424, 69858, 68719],
      [24425, 4014, 94871, 1031, 99852, 88692, 31503],
      [24475, 12295, 33326, 37771, 37883, 74568, 25163],
      [0, 18411, 88185, 60924, 29028, 69789, 0],
      [34697, 75631, 7636, 16190, 60178, 39082, 7052],
      [24876, 9570, 53630, 98605, 22331, 79320, 88317],
      [27204, 89103, 15221, 91346, 35428, 94251, 62745],
      [26636, 28759, 12998, 58412, 38113, 14678, 0],
      [80871, 79706, 45325, 3861, 12504, 0, 4872],
      [79662, 15626, 995, 80546, 64775, 0, 68820],
      [25160, 82123, 81706, 21494, 92958, 33594, 5243]
    ];
    expect(CutOffTrees.cutOffTree(grid)).toEqual(5637);
  });
});

class CutOffTrees {
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
      let leg = this.getShortestPathBfs(forest, start, {i: points[i].i, j: points[i].j});
      if(leg === -1) {
        return -1;
      }
      sum += leg;
      start = {i: points[i].i, j: points[i].j};
    }

    return sum;
  }

  /**
   * DFS - time limit exceeded (test case 4)
   */
  public static getShortestPathDfs(matrix: number[][], start: {i: number, j: number}, end: {i: number, j: number}): number {
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

    let r1 = this.getShortestPathDfs(matrix, {i: start.i - 1, j: start.j}, end);
    let r2 = this.getShortestPathDfs(matrix, {i: start.i + 1, j: start.j}, end);
    let r3 = this.getShortestPathDfs(matrix, {i: start.i, j: start.j - 1}, end);
    let r4 = this.getShortestPathDfs(matrix, {i: start.i, j: start.j + 1}, end);
    matrix[start.i][start.j] = prev;

    const nextPoints = [r1, r2, r3, r4].filter(r => r !== -1);
    const result = nextPoints.length > 0 ? Math.min(...nextPoints) + 1 : -1;
    return result;
  }

  public static getShortestPathBfs(matrix: number[][], start: {i: number, j: number}, end: {i: number, j: number}): number {
    const height = matrix.length;
    const width = matrix[0].length;
    const rowFact = () => Array.from(Array(width).keys()).map(k => false);
    const visited = Array.from(Array(height).keys()).map(k => rowFact());
    visited[start.i][start.j] = true;
    const queue = [{p: start, t: 0}];

    while(queue.length > 0) {
      const point = queue.shift()!;
      if(point.p.i === end.i && point.p.j === end.j) {
        return point.t;
      }
      const nextPoints = [
        {i: point.p.i - 1, j: point.p.j},
        {i: point.p.i + 1, j: point.p.j},
        {i: point.p.i, j: point.p.j - 1},
        {i: point.p.i, j: point.p.j + 1}
      ];

      for(const np of nextPoints) {
        if(np.i >= 0 && np.i < height && np.j >= 0 && np.j < width && !visited[np.i][np.j] && matrix[np.i][np.j] !== 0) {
          visited[np.i][np.j] = true;
          queue.push({p: np, t: point.t + 1});
        }
      }
    }

    return -1;
  }
}
