describe('Phone4', () => {
  test('Candidate 1', () => {
    const cand = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
    expect(cand.q(3)).toEqual(0);
    expect(cand.q(12)).toEqual(1);
    expect(cand.q(25)).toEqual(1);
  });
  test('Candidate 2', () => {
    const cand = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
    expect(cand.q(15)).toEqual(0);
  });
  test('Pooling 1', () => {
    expect(Phone4.carPooling([[2, 1, 5], [3, 3, 7]], 4)).toEqual(false);
  });
  test('Pooling 3', () => {
    expect(Phone4.carPooling([[2, 1, 5], [3, 3, 7]], 5)).toEqual(true);
  });
  test('Pooling 4', () => {
    expect(Phone4.carPooling([[2, 1, 5], [3, 5, 7]], 4)).toEqual(true);
  });
  test('Pooling 5', () => {
    expect(Phone4.carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)).toEqual(true);
  });
  test('Pooling 6', () => {
    expect(Phone4.carPooling([[4, 5, 6], [6, 4, 7], [4, 3, 5], [2, 3, 5]], 13)).toEqual(true);
  });
});

class TopVotedCandidate {
  private persons: number[];
  private times: number[];
  constructor(persons: number[], times: number[]) {
    this.persons = persons;
    this.times = times;
  }

  q(t: number) {
    const votes: {[idx: number]: number} = {};
    let maxCandidate = this.persons[0];
    for(let i = 0; i < this.times.length && this.times[i] <= t; i++) {
      if(votes[this.persons[i]] === undefined) {
        votes[this.persons[i]] = 0;
      }
      votes[this.persons[i]]++;
      if(votes[this.persons[i]] >= votes[maxCandidate]) {
        maxCandidate = this.persons[i];
      }
    }

    return maxCandidate;
  }
}

class Phone4 {
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
