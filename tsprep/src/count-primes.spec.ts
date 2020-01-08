/**
 * https://leetcode.com/problems/count-primes/
 * tags: easy, math
 */
describe('Count primes', () => {
  test('Case 1', () => {
    expect(CountPrimes.countPrimes(10)).toEqual(4);
  });
  test('Case 2', () => {
    expect(CountPrimes.countPrimes(100)).toEqual(25);
  });
});

class CountPrimes {
  public static countPrimes(n: number): number {
    const primes = Array.from(Array(n).keys()).map(x => true);
    for (let i = 2; i < n; i++) {
      if(!primes[i]) {
        continue;
      }
      for (let j = i * 2; j < n; j=j+i) {
        primes[j] = false;
      }
    }

    let counter = 0;
    for (let i = 2; i < n; i++) {
      if(primes[i]) {
        counter++;
      }
    }
    return counter;
  }
}
