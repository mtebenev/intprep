/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 * NOT SOLVED YET
 */
describe('Unique binary search trees 2', () => {
  test('Case 1', () => {
    expect(numTrees(1)).toEqual(1);
  });
  test('Case 2', () => {
    expect(numTrees(2)).toEqual(2);
  });
  test('Case 3', () => {
    expect(numTrees(3)).toEqual(5);
  });
});

function numTrees(n: number): number {

  if(n === 1) {
    return 1;
  }

  let sum = 0;
  for(let vertex = 1; vertex <= n; vertex++) {

    // Calculate left subtrees
    sum += getTreesInRange(1, vertex - 1);
    // Calculate right subtrees
    sum += getTreesInRange(vertex + 1, n);
  }

  return sum;
}

function getTreesInRange(start: number, end: number): number {
  if(start === end) {
    return 1;
  }
  if(start > end) {
    return 0;
  }

  let sum = 0;
  for(let vertex = start; vertex <= end; vertex++) {

    // Calculate left subtrees
    sum += getTreesInRange(1, vertex - 1);
    // Calculate right subtrees
    sum += getTreesInRange(vertex + 1, end);
  }

  return sum;
}
