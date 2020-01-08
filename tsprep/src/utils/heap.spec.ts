import {Heap} from "./heap";

const maxHeapFunc = (l: number, r: number) => {
  return l < r ? true : false;
};
const minHeapFunc = (l: number, r: number) => {
  return l > r ? true : false;
};

describe('Heap', () => {

  test('MaxHeap', () => {
    const heap = new Heap<number>(maxHeapFunc);
    heap.push(5);
    heap.push(10);
    heap.push(1);

    expect(heap.pop()).toEqual(10);
    expect(heap.pop()).toEqual(5);
    expect(heap.pop()).toEqual(1);
  });

  test('MinHeap', () => {
    const heap = new Heap<number>(minHeapFunc);
    heap.push(5);
    heap.push(10);
    heap.push(1);

    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(5);
    expect(heap.pop()).toEqual(10);
  });

  test('MaxHeap 2', () => {
    const heap = new Heap<number>(maxHeapFunc);
    heap.push(1);
    heap.push(1);
    heap.push(2);
    heap.push(2);
    heap.push(1);

    expect(heap.pop()).toEqual(2);
    expect(heap.pop()).toEqual(2);
    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(1);
  });
});
