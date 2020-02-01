/**
 * https://leetcode.com/problems/car-pooling/
 * tags: medium, greedy
 */
describe('Car pooling', () => {
  test('Pooling 1', () => {
    expect(CarPooling.carPooling([[2, 1, 5], [3, 3, 7]], 4)).toEqual(false);
  });
  test('Pooling 3', () => {
    expect(CarPooling.carPooling([[2, 1, 5], [3, 3, 7]], 5)).toEqual(true);
  });
  test('Pooling 4', () => {
    expect(CarPooling.carPooling([[2, 1, 5], [3, 5, 7]], 4)).toEqual(true);
  });
  test('Pooling 5', () => {
    expect(CarPooling.carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)).toEqual(true);
  });
  test('Pooling 6', () => {
    expect(CarPooling.carPooling([[4, 5, 6], [6, 4, 7], [4, 3, 5], [2, 3, 5]], 13)).toEqual(true);
  });
});

class CarPooling {
  public static carPooling(trips: number[][], capacity: number): boolean {
    const points = [];
    for(let i = 0; i < trips.length; i++) {
      points.push({l: trips[i][1], n: trips[i][0]});
      points.push({l: trips[i][2], n: -trips[i][0]});
    }

    points.sort((a, b) =>  {
      if(a.l === b.l) {
        return a.n - b.n;
      }
      return a.l - b.l;
    });
    let currentNum = 0;
    for(let i = 0; i < points.length; i++) {
      currentNum += points[i].n;
      if(currentNum > capacity) {
        return false;
      }
    }
    return true;
  }
}
