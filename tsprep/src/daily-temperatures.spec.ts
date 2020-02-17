describe('Daily temperatures', () => {
  test('Temp 1', () => {
    const result = DailyTemperatures.dailyTemperatures([1]);
    expect(result).toEqual([0]);
  });
  test('Temp 2', () => {
    const result = DailyTemperatures.dailyTemperatures([1, 2]);
    expect(result).toEqual([1, 0]);
  });
  test('Temp 3', () => {
    const result = DailyTemperatures.dailyTemperatures([2, 1]);
    expect(result).toEqual([0, 0]);
  });
  test('Temp 4', () => {
    const result = DailyTemperatures.dailyTemperatures([1, 2, 3]);
    expect(result).toEqual([1, 1, 0]);
  });
  test('Temp 5', () => {
    const result = DailyTemperatures.dailyTemperatures([1, 1, 3]);
    expect(result).toEqual([2, 1, 0]);
  });
  test('Temp 6', () => {
    const result = DailyTemperatures.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
  test('Temp 7', () => {
    const result = DailyTemperatures.dailyTemperatures([]);
    expect(result).toEqual([]);
  });
});

class DailyTemperatures {
  /**
   * Note: sucks. The trick is that we can iterate in the reverse order.
   */
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
