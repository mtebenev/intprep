import {TreeNode} from '../utils/tree-node';

describe('Phone21', () => {
  test('hash 1', () => {
    const h = new MyHashMap();
    h.put(10, 20);
    expect(h.get(10)).toEqual(20);
    expect(h.get(20)).toEqual(-1);
    h.put(10, 30);
    expect(h.get(10)).toEqual(30);
    h.remove(10);
    expect(h.get(10)).toEqual(-1);
  });
});

class MyHashMap {

  private bucketCount: number;
  private buckets: Array<Array<{k: number, v: number}>>;

  constructor() {
    this.bucketCount = 256;
    this.buckets = Array.from(Array(this.bucketCount).keys()).map(x => []);
  }

  public put(key: number, value: number): void {
    const bp = this.getBucketPair(key);
    if(bp.idx !== -1) {
      bp.b[bp.idx].v = value;
    } else {
      bp.b.push({k: key, v: value});
    }
  }

  public get(key: number): number {
    const bp = this.getBucketPair(key);
    if(bp.idx !== -1) {
      return bp.b[bp.idx].v;
    } else {
      return -1;
    }
  }

  public remove(key: number): void {
    const bp = this.getBucketPair(key);
    if(bp.idx !== -1) {
      bp.b.splice(bp.idx, 1);
    }
  }

  private getBucketPair(key: number): {b: Array<{k: number, v: number}>, idx: number} {
    const hashCode = this.getHashCode(key.toString());
    const bucketIndex = hashCode % this.bucketCount;
    const bucket = this.buckets[bucketIndex];
    const pairIdx = bucket.findIndex(b => b.k === key);

    return {b: bucket, idx: pairIdx};
  }

  private getHashCode(value: string): number {
    let hash = 0;
    let chr;
    if(value.length === 0) {
      return hash;
    }
    for(let i = 0; i < value.length; i++) {
      chr = value.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
}

class Phone21 {
}
