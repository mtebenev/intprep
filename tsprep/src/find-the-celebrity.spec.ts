describe('Find the celebrity', () => {
  test('Case 1', () => {
    const graph = [
      [1, 1, 0],
      [0, 1, 0],
      [1, 1, 1]
    ];
    const knows = (i: number, j: number) => graph[i][j];
    expect(new FindTheCelebrity(knows).findCeleb(3)).toEqual(1);
  });
  test('Case 2', () => {
    const graph = [
      [1, 0, 1],
      [1, 1, 0],
      [0, 1, 1]
    ];
    const knows = (i: number, j: number) => graph[i][j];
    expect(new FindTheCelebrity(knows).findCeleb(3)).toEqual(-1);
  });
  test('Case 3', () => {
    const graph = [
      [1, 1],
      [0, 1],
    ];
    const knows = (i: number, j: number) => graph[i][j];
    expect(new FindTheCelebrity(knows).findCeleb(2)).toEqual(1);
  });
  test('Case 4', () => {
    const graph = [
      [1, 0],
      [0, 1],
    ];
    const knows = (i: number, j: number) => graph[i][j];
    expect(new FindTheCelebrity(knows).findCeleb(2)).toEqual(-1);
  });
  test('Case 5', () => {
    const graph = [
      [1, 1],
      [1, 1],
    ];
    const knows = (i: number, j: number) => graph[i][j];
    expect(new FindTheCelebrity(knows).findCeleb(2)).toEqual(-1);
  });
});

class FindTheCelebrity {
  constructor(private readonly knows: (i: number, j: number) => number) {
  }

  public findCeleb(n: number): number {
    if(n < 2) {
      return -1;
    }
    const candidates: Array<number[] | null> = Array.from(Array(n).keys()).map(k => []);
    for(let i = 0; i < n; i++) {
      if(candidates[i] !== null) {
        for(let j = 0; j < n; j++) {
          if(i !== j && candidates[i]!.findIndex(x => x === j) === -1) {
            const check = this.knows(i, j);
            if(check) { // the i is no more candidate, reject
              candidates[i] = null;
              break;
            } else if(this.knows(j, i)) {
              candidates[i]!.push(j);
              if(candidates[i]!.length === n - 1) {
                return i;
              }
              candidates[j] = null;
            }
          }
        }
      }
    }

    return -1;
  }
}
