test('generate 1 rows', () => {
  expect(generate(1)).toEqual([[1]]);
});
test('generate 2 rows', () => {
  expect(generate(2)).toEqual([[1], [1, 1]]);
});
test('generate 3 rows', () => {
  expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});
test('generate 4 rows', () => {
  expect(generate(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
});

test('get row 0', () => {
  expect(getRow(0)).toEqual([1]);
});
test('get row 1', () => {
  expect(getRow(1)).toEqual([1, 1]);
});
test('get row 2', () => {
  expect(getRow(2)).toEqual([1, 2, 1]);
});
test('get row 3', () => {
  expect(getRow(3)).toEqual([1, 3, 3, 1]);
});

function generate(numRows: number): number[][] {
  if(numRows === 0) {
    return [];
  }

  const result = calculateRow([], numRows - 1);
  return result;
}

function getRow(rowIndex: number): number[] {
  const result = new Array<number>(rowIndex + 1);
  calculateRow2(result, rowIndex);
  return result;
}

function calculateRow2(currentValues: number[], rowIndex: number): void {
  if(rowIndex === 0) {
    currentValues[0] = 1;
    return;
  }
  calculateRow2(currentValues, rowIndex - 1);
  const currentRowLength = rowIndex + 1;
  for(let i = currentRowLength - 1; i > 0; --i) {
    if(i == currentRowLength - 1) {
      currentValues[i] = 1;
    } else {
      currentValues[i] += currentValues[i - 1];
    }
  }
}

function calculateRow(rowValues: number[][], level: number): number[][] {
  if(level === 0) {
    return [[1]];
  }

  const prevValues = calculateRow(rowValues, level - 1);

  const prevRow = prevValues[level - 1];
  const result = new Array<number>((prevValues[prevValues.length - 1]).length + 1);
  for(let i = 0; i < result.length; ++i) {
    if(i == 0 || i == result.length - 1) {
      result[i] = 1;
    } else {
      result[i] = prevRow[i - 1] + prevRow[i];
    }
  }

  // height = 0 => 1
  // height = 1 => 1,1
  // height = 2 => 1,

  return [
    ...prevValues,
    result
  ];
}
