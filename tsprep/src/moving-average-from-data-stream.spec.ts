/**
 * https://leetcode.com/problems/moving-average-from-data-stream/
 * tags: easy, design, queue
 */
describe('Moving average from data stream', () => {
  test('Average 1', () => {
    const obj = new MovingAverage(3);
    expect(obj.next(1)).toEqual(1);
    expect(obj.next(10)).toEqual((1 + 10) / 2);
    expect(obj.next(3)).toEqual((1 + 10 + 3) / 3);
    expect(obj.next(5)).toEqual((10 + 3 + 5) / 3);
  });
});

class MovingAverage {
  private windowSize: number;
  private currentSum: number;
  private queue: number[];

  constructor(size: number) {
    this.windowSize = size;
    this.currentSum = 0;
    this.queue = [];
  }

  public next(val: number): number {
    const prev = this.queue.length === this.windowSize
      ? this.queue.shift()!
      : 0;

    this.queue.push(val);
    this.currentSum -= prev;
    this.currentSum += val;
    const result = this.currentSum / this.queue.length;
    return result;
  }
}

