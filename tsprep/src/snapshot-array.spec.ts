/**
 * https://leetcode.com/problems/snapshot-array/
 * tags: medium, array
 */
describe('Snapshot array', () => {
  test('Snapshot 1', () => {
    const snapshotArr = new SnapshotArray(3); // set the length to be 3
    snapshotArr.set(0, 5);  // Set array[0] = 5
    snapshotArr.snap();  // Take a snapshot, return snap_id = 0
    snapshotArr.set(0, 6);
    expect(snapshotArr.get(0, 0)).toEqual(5);  // Get the value of array[0] with snap_id = 0, return 5  });
  });
  test('Snapshot 2', () => {
    const snapshotArr = new SnapshotArray(1);
    snapshotArr.set(0, 15);
    snapshotArr.snap();
    snapshotArr.snap();
    snapshotArr.snap();
    expect(snapshotArr.get(0, 2)).toEqual(15);
    snapshotArr.snap();
    snapshotArr.snap();
    expect(snapshotArr.get(0, 0)).toEqual(15);
  });
  test('Snapshot 3', () => {
    const snapshotArr = new SnapshotArray(3);
    snapshotArr.set(1, 6);
    snapshotArr.snap();
    snapshotArr.snap();
    snapshotArr.set(1, 19);
    snapshotArr.set(0, 4);
    expect(snapshotArr.get(2, 1)).toEqual(0);
    expect(snapshotArr.get(2, 0)).toEqual(0);
    expect(snapshotArr.get(0, 1)).toEqual(0);
  });
  test('Snapshot 4', () => {
    const snapshotArr = new SnapshotArray(1);
    snapshotArr.snap();
    snapshotArr.snap();
    snapshotArr.set(0, 4);
    snapshotArr.snap();
    expect(snapshotArr.get(0, 1)).toEqual(0);
    snapshotArr.set(0, 12);
    expect(snapshotArr.get(0, 1)).toEqual(0);
    snapshotArr.snap();
    expect(snapshotArr.get(0, 3)).toEqual(12);
  });
});

class SnapshotArray {

  private data: Array<Array<{s: number, v: number}>>;
  private readonly length: number;
  private currentSnapshot: number;

  constructor(length: number) {
    this.length = length;
    this.currentSnapshot = 0;
    const rowFact = () => Array.from(Array(length).keys()).map(k => [{s: 0, v: 0}]);
    this.data = rowFact();
  }

  public set(index: number, val: number): void {
    if(index <= this.length) {
      const valueHistory = this.data[index];
      if(valueHistory[valueHistory.length - 1].s === this.currentSnapshot) {
        valueHistory[valueHistory.length - 1].v = val;
      } else {
        valueHistory.push({s: this.currentSnapshot, v: val});
      }
    }
  }

  public snap(): number {
    return this.currentSnapshot++;
  }

  public get(index: number, snapId: number): number {
    const valueHistory = this.data[index];
    let lo = 0;
    let hi = valueHistory.length - 1;
    let mid = hi;
    while(lo < hi) {
      mid = Math.floor((lo + hi) / 2);
      if(valueHistory[mid].s <= snapId) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    const result = lo > 0 && valueHistory[lo].s > snapId
      ? valueHistory[lo - 1].v
      : valueHistory[lo].v;
    return result;
  }
}
