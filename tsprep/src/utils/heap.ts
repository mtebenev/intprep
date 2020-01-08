type ComparerFunc<T> = (l: T, r: T) => boolean;
export class Heap<T> {

  private heapSize: number;
  private heapArray: T[];

  constructor(private readonly comparer: ComparerFunc<T>) {
    this.heapSize = 0;
    this.heapArray = [];
  }

  public peek(): T {
    throw new Error();
  }

  public push(value: T): void {
    this.heapSize++;
    let itemPos = this.heapSize - 1;
    if(itemPos <= this.heapArray.length) {
      this.heapArray.push(value);
    } else {
      this.heapArray[itemPos] = value;
    }

    while(itemPos !== 0
      && this.comparer(this.heapArray[this.getParentPos(itemPos)], this.heapArray[itemPos])) {
      const tmp = this.heapArray[itemPos];
      this.heapArray[itemPos] = this.heapArray[this.getParentPos(itemPos)];
      this.heapArray[this.getParentPos(itemPos)] = tmp;
      itemPos = this.getParentPos(itemPos);
    }
  }

  public pop(): T | undefined {
    if(this.heapSize === 0)
      return undefined;
    if(this.heapSize === 1) {
      this.heapSize--;
      return this.heapArray[0];
    }

    // Store the minimum value, and remove it from heap
    const root = this.heapArray[0];
    this.heapArray[0] = this.heapArray[this.heapSize - 1];
    this.heapSize--;
    this.heapify(0);

    return root;
  }

  private getParentPos(pos: number): number {
    return (pos - 1) >> 1;
  }

  private getLeft(index: number) {
    return (2 * index + 1);
  }

  // to get index of right child of node at index i
  private getRight(index: number) {
    return (2 * index + 2);
  }

  private heapify(index: number): void {
    const l = this.getLeft(index);
    const r = this.getRight(index);
    let top = index;
    if(l  < this.heapSize && this.comparer(this.heapArray[l], this.heapArray[index]) === false)
      top = l;
    if(r < this.heapSize && this.comparer(this.heapArray[r], this.heapArray[top]) === false)
      top = r;
    if(top != index) {
      const tmp = this.heapArray[index];
      this.heapArray[index] = this.heapArray[top];
      this.heapArray[top] = tmp;
      this.heapify(top);
    }
  }
}
