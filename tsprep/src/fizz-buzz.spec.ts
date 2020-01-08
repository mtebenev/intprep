/**
 * https://leetcode.com/problems/fizz-buzz/
 * tags: easy, math
 */
describe('Fizz Buzz', () => {
  test('Case 1', () => {
    expect(FizzBuzz.fizzBuzz(15))
      .toEqual([
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz'
      ]);
  });
});

class FizzBuzz {
  public static fizzBuzz(n: number): string[] {
    const result = Array.from(Array(n + 1).keys())
      .filter(x => x > 0)
      .map(x => {
        if(x % 15 === 0) {
          return 'FizzBuzz';
        } else if(x % 3 === 0) {
          return 'Fizz';
        } else if(x % 5 === 0) {
          return 'Buzz';
        }

        return x.toString();
      });

    return result;
  }
}
