/**
 * https://leetcode.com/problems/rotate-image/
 * tags: medium, array
 */
describe('Rotate image', () => {
  test('Case 1', () => {
    const matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    RotateImage.rotate(matrix);
    expect(matrix).toEqual([
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]);
  });
});

class RotateImage {
  public static rotate(matrix: number[][]): void {
  }

}
