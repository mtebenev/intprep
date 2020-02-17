import {TreeNode} from '../utils/tree-node';

describe('Phone10', () => {
  test('Quads 1', () => {
    const result = Phone10.fourSum([1, 0, -1, 0, -2, 2], 0);
    let a = 3;
    a++;
  });
  test('Temp 1', () => {
    const result = Phone10.dailyTemperatures([1]);
    expect(result).toEqual([0]);
  });
  test('Temp 2', () => {
    const result = Phone10.dailyTemperatures([1, 2]);
    expect(result).toEqual([1, 0]);
  });
  test('Temp 3', () => {
    const result = Phone10.dailyTemperatures([2, 1]);
    expect(result).toEqual([0, 0]);
  });
  test('Temp 4', () => {
    const result = Phone10.dailyTemperatures([1, 2, 3]);
    expect(result).toEqual([1, 1, 0]);
  });
  test('Temp 5', () => {
    const result = Phone10.dailyTemperatures([1, 1, 3]);
    expect(result).toEqual([2, 1, 0]);
  });
  test('Temp 6', () => {
    const result = Phone10.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
  test('Temp 7', () => {
    const result = Phone10.dailyTemperatures([]);
    expect(result).toEqual([]);
  });
});

class Phone10 {
  public static fourSum(nums: number[], target: number): number[][] {

    if(!nums || nums.length < 4) {
      return [];
    }

    const tmpResult: {[idx: string]: number[]} = {};
    for(let i = 0; i < nums.length; i++) {
      const tmpMem = nums[i];
      (nums as any)[i] = null;
      this.fourSumR(nums, target, [], 0, tmpMem, tmpResult);
      nums[i] = tmpMem;
    }

    const result = [];
    for(const k in tmpResult) {
      result.push(tmpResult[k]);
    }
    return result;
  }

  public static fourSumR(nums: number[], target: number, curSeq: number[], curSum: number, curNum: number, result: {[idx: string]: number[]}): void {

    if(curSeq.length === 3 && curSum + curNum === target) {
      const c = [...curSeq, curNum];
      c.sort();
      const seqStr = c.join(',');
      if(!result[seqStr]) {
        result[seqStr] = c;
      }
      return;
    }
    if(curSeq.length >= 3) {
      return;
    }

    for(let i = 0; i < nums.length; i++) {
      const tempSeq = [...curSeq, curNum];
      const tempSum = curSum + curNum;
      if(nums[i] !== null) {
        const tmpMem = nums[i];
        (nums as any)[i] = null;
        this.fourSumR(nums, target, tempSeq, tempSum, tmpMem, result);
        nums[i] = tmpMem;
      }
    }
  }

  public static dailyTemperatures(T: number[]): number[] {

    const tempQueue: Array<{t: number, idx: number}> = [];
    const result = Array.from(Array(T.length).keys()).map(k => 0);
    for(let i = 0; i < T.length; i++) {
      while(tempQueue.length > 0 && tempQueue[0].t < T[i]) {
        const hist = tempQueue.shift()!;
        result[hist.idx] = i - hist.idx;
      }

      let insPos = 0;
      while(insPos < tempQueue.length && tempQueue[insPos].t < T[i]) {
        insPos++;
      }
      tempQueue.splice(insPos, 0, {t: T[i], idx: i});
    }

    return result;
  }
}
