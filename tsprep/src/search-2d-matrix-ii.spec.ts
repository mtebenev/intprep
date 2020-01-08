/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * NOT IMPLEMENTED YET
 */
describe('Search a 2D matrix II', () => {
  test('Case 1', () => {
    const matrix = [
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
      [19, 22, 24, 28, 31]
    ];
    expect(searchMatrix(matrix, 5)).toBeTruthy();
    expect(searchMatrix(matrix, 20)).toBeFalsy();
  });
});

function searchMatrix(matrix: number[][] | null, target: number): boolean {
  if(!matrix) {
    return false;
  }

  const c = matrix.length;
  const r = matrix[0].length;

  return searchInRect(matrix, target, 0, matrix[0].length - 1, 0, matrix.length - 1);
}


function searchInRect(matrix: number[][], target: number, left: number, right: number, top: number, bottom: number): boolean {
  if(left > right || top > bottom) {
    return false
  }

  // Base case
  if(matrix[top][left] === target) {
    return true;
  }

  if(left === right && bottom === top) {
    return false;
  }

  const middleC = Math.floor((right - left) / 2);
  const middleR = Math.floor((bottom - top) / 2);

  const middleValue = matrix[middleR][middleC];
  if(target === middleValue) {
    return true;
  } else if(target <= middleValue) {
    return searchInRect(matrix, target, left, middleC, top, middleR);
  } else {
    if(searchInRect(matrix, target, middleC + 1, right, top, bottom)) {
      return true;
    }
    if(searchInRect(matrix, target, left, middleC, middleR + 1, bottom)) {
      return true;
    }
  }
  return false;
}
