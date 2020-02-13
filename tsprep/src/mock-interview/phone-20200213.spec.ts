import {ListNode} from '../utils/list-node';

describe('Phone7', () => {
  test('Average 1', () => {
    const obj = new MovingAverage(3);
    expect(obj.next(1)).toEqual(1);
    expect(obj.next(10)).toEqual((1 + 10) / 2);
    expect(obj.next(3)).toEqual((1 + 10 + 3) / 3);
    expect(obj.next(5)).toEqual((10 + 3 + 5) / 3);
  });

  test('Missing 1', () => {
    const nums = [10];
    const result = Phone7.findMissingRanges(nums, 1, 20);
    expect(result).toEqual([
      '1->9',
      '11->20'
    ]);
  });
  test('Missing 2', () => {
    const nums = [1, 10];
    const result = Phone7.findMissingRanges(nums, 5, 5);
    expect(result).toEqual([]);
  });
  test('Missing 3', () => {
    const nums = [0, 1, 3, 50, 75];
    const result = Phone7.findMissingRanges(nums, 0, 99);
    expect(result).toEqual([
      '2',
      '4->49',
      '51->74',
      '76->99'
    ]);
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

class Phone7 {

  public static findMissingRanges(nums: number[], lower: number, upper: number): string[] {

    const result = [];
    // Align start
    let start = 0;
    while(start < nums.length && nums[start] <= lower) {
      start++;
    }
    let end = start;
    while(end < nums.length && nums[end] < upper) {
      end++;
    }

    if(start < nums.length) {
      end = Math.min(end, nums.length - 1);
      const rangeArr = nums.slice(start, end + 1);
      rangeArr.push(upper);
      rangeArr.unshift(lower);

      let prev = rangeArr[0];
      for(let i = 1; i < rangeArr.length; i++) {
        const cur = rangeArr[i];
        let rangeStr = '';
        if(cur - prev >= 2) {
          const s = i === 1 ? prev : prev + 1;
          const e = i === rangeArr.length - 1 ? cur : cur - 1;
          if(cur - prev > 2) {
            rangeStr = `${s}->${e}`;
          } else {
            rangeStr = `${prev + 1}`;
          }
        }
        if(rangeStr) {
          result.push(rangeStr);
        }
        prev = cur;
      }
    }
    return result;
  }
}
