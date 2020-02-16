import {TreeNode} from '../utils/tree-node';

describe('Phone9', () => {
  test('Bulb 1', () => {
    expect(Phone9.bulbSwitch(0)).toEqual(0);
  });
  test('Bulb 2', () => {
    expect(Phone9.bulbSwitch(1)).toEqual(1);
  });
  test('Bulb 3', () => {
    expect(Phone9.bulbSwitch(2)).toEqual(1);
  });
  test('Bulb 4', () => {
    expect(Phone9.bulbSwitch(3)).toEqual(1);
  });
  test('Bulb 5', () => {
    expect(Phone9.bulbSwitch(4)).toEqual(2);
  });
  test('Bulb 6', () => {
    expect(Phone9.bulbSwitch(5)).toEqual(2);
  });
  test('Bulb 7', () => {
    expect(Phone9.bulbSwitch(6)).toEqual(2);
  });
  test('Matrix 1', () => {
    const matrix = [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5]
    ];
    const nm = new NumMatrix(matrix);
    expect(nm.sumRegion(2, 1, 4, 3)).toEqual(8);
    expect(nm.sumRegion(1, 1, 2, 2)).toEqual(11);
    expect(nm.sumRegion(1, 2, 2, 4)).toEqual(12);
  });

});

class NumMatrix {
  private matrix: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  public sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0;
    for(let i = row1; i <= row2; i++) {
      for(let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }
    return sum;
  }
}

class Phone9 {
  public static bulbSwitch(n: number): number {
    if(n < 2) {
      return n;
    }

    let result = 1;

    for(let i = 2; i <= n; i++) {
      let state = true;
      for(let j = 2; j <= i; j++) {
        if(i % j === 0) {
          state = !state;
        }
      }
      result += state ? 1 : 0;
    }

    return result;
  }
}
