/**
 * https://leetcode.com/problems/flood-fill/
 * tags: easy, dfs
 */
describe('Phone AMA2', () => {
  test('Floodfill 1', () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ];
    PhoneAma2.floodFill(image, 1, 1, 2);
    expect(image).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1]
    ]);
  });
  test('Floodfill 1', () => {
    const image = [[]];
    expect(PhoneAma2.floodFill([[]], 1, 1, 2)).toEqual(image);
  });
});

class FloodFill {
  public static floodFill(image: number[][], sr: number, sc: number, newColor: number) {
    const height = image.length;
    if(height === 0) {
      return image;
    }

    const width = image[0].length;

    if(width === 0 || sr < 0 || sr >= height || sc < 0 || sc >= width) {
      return image;
    }

    const srcColor = image[sr][sc];
    const rowFact = () => Array.from(Array(width).keys()).map(k => false);
    const visited = Array.from(Array(height).keys()).map(k => rowFact());
    visited[sr][sc] = true;

    const queue = [{i: sr, j: sc}];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    visited[sr][sc] = true;

    while(queue.length > 0) {
      const p = queue.shift()!;
      if(image[p.i][p.j] === srcColor) {
        image[p.i][p.j] = newColor;
        for(let dir = 0; dir < directions.length; dir++) {
          const d = directions[dir];
          const nextCoords = {i: p.i + d[0], j: p.j + d[1]};
          if(nextCoords.i >= 0 && nextCoords.i < height && nextCoords.j >= 0 && nextCoords.j < width
            && !visited[nextCoords.i][nextCoords.j]
            && image[nextCoords.i][nextCoords.j] === srcColor) {
            visited[nextCoords.i][nextCoords.j] = true;
            queue.push(nextCoords);
          }
        }
      }
    }
    return image;
  }
}
