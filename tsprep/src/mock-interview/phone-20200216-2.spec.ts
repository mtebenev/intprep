import {TreeNode} from '../utils/tree-node';

describe('Phone10', () => {
  test('smallest 1', () => {
    const tree = TreeNode.createFromArray2([3, 1, 4, null, 2])!;
    expect(Phone10.kthSmallest(tree, 1)).toEqual(1);
  });
  test('smallest 2', () => {
    const tree = TreeNode.createFromArray2([5, 3, 6, 2, 4, null, null, 1])!;
    expect(Phone10.kthSmallest(tree, 3)).toEqual(3);
  });
  test('tickets 1', () => {
    const tickets = [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']];
    const result = Phone10.findItinerary(tickets);
    expect(result).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);
  });
  test('tickets 2', () => {
    const tickets = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']];
    const result = Phone10.findItinerary(tickets);
    expect(result).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']);
  });
  test('tickets 3', () => {
    const tickets = [['JFK', 'SFO']];
    const result = Phone10.findItinerary(tickets);
    expect(result).toEqual(['JFK', 'SFO']);
  });
  test('tickets 4', () => {
    const tickets = [['JFK', 'SFO'], ['SFO', 'ATL']];
    const result = Phone10.findItinerary(tickets);
    expect(result).toEqual(['JFK', 'SFO', 'ATL']);
  });
});

class Phone10 {

  private static result?: TreeNode | null;
  private static counter: number;

  public static kthSmallest(root: TreeNode, k: number): number {
    this.result = null;
    this.counter = 0;

    this.traverseR(root, k);
    return this.result!.val;
  }

  public static traverseR(root: TreeNode | null, k: number): void {
    if(!root || this.result !== null) {
      return;
    }

    if(root.left) {
      this.traverseR(root.left, k);
    }

    this.counter++;
    if(this.counter === k) {
      this.result = root;
      return;
    }

    if(root.right) {
      this.traverseR(root.right, k);
    }
  }

  public static findItinerary(tickets: string[][]): string[] {

    // Prepare
    const dict: {[idx: string]: Array<{d: string, t: number}>} = {};
    for(let i = 0; i < tickets.length; i++) {
      const start = tickets[i][0];
      const end = tickets[i][1];
      if(!dict[start]) {
        dict[start] = [{d: end, t: i}];
      } else {
        dict[start].push({d: end, t: i});
      }
    }
    for(const key in dict) {
      dict[key].sort((a, b) => a.d < b.d ? -1 : a.d === b.d ? 0 : 1);
    }

    const usage = Array.from(Array(tickets.length).keys()).map(k => false);

    // Act
    const result = this.findR(dict, usage, ['JFK'], tickets.length + 1)!;
    return result;
  }

  public static findR(
    dict: {[idx: string]: Array<{d: string, t: number}>}, usage: boolean[],
    currentPath: string[], targetLen: number): string[] | null {
    if(currentPath.length === targetLen) {
      return currentPath;
    }

    const lastPoint = currentPath[currentPath.length - 1];
    if(!dict[lastPoint]) {
      return null;
    }
    for(let i = 0; i < dict[lastPoint].length; i++) {
      const dest = dict[lastPoint][i];
      if(!usage[dest.t]) {
        usage[dest.t] = true;
        const p = this.findR(dict, usage, [...currentPath, dict[lastPoint][i].d], targetLen);
        usage[dest.t] = false;
        if(p) {
          return p;
        }
      }
    }

    return null;
  }
}
