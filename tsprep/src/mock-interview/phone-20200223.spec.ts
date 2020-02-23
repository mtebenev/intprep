import {TreeNode} from '../utils/tree-node';

describe('Phone15', () => {
  test('Zeroes 1', () => {
    const arr = [0];
    Phone15.duplicateZeros(arr);
    expect(arr).toEqual([0]);
  });
  test('Zeroes 2', () => {
    const arr = [1];
    Phone15.duplicateZeros(arr);
    expect(arr).toEqual([1]);
  });
  test('Zeroes 3', () => {
    const arr = [1, 1, 1];
    Phone15.duplicateZeros(arr);
    expect(arr).toEqual([1, 1, 1]);
  });
  test('Zeroes 4', () => {
    const arr = [0, 1, 1];
    Phone15.duplicateZeros(arr);
    expect(arr).toEqual([0, 0, 1]);
  });
  test('Zeroes 5', () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0];
    Phone15.duplicateZeros(arr);
    expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });
});

class Phone15 {

  public static duplicateZeros(arr: number[]): void {
    if(!arr) {
      return;
    }
    const queue = [];
    for(let i = 0; i < arr.length; i++) {
      queue.push(arr[i]);
      if(arr[i] === 0) {
        queue.push(0);
      }
      arr[i] = queue.shift()!;
    }
  }
}
