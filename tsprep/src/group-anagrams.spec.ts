/**
 * https://leetcode.com/problems/group-anagrams/
 * tags: medium, hash table, string
 */
describe('Group anagrams', () => {
  test('Case 1', () => {
    const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = GroupAnagrams.groupAnagrams(words);

    expect(result).toContainEqual(['eat', 'tea', 'ate']);
    expect(result).toContainEqual(['tan', 'nat']);
    expect(result).toContainEqual(['bat']);
    expect(result.length).toEqual(3);
  });
});

class GroupAnagrams {
  public static groupAnagrams(strs: string[]): string[][] {
    const anagramMap: {[key: string]: string[]} = {};
    const aCode = 'a'.charCodeAt(0);
    const symbolCounts = Array.from(Array(26).keys()).map(x => 0);
    for(let i = 0; i < strs.length; i++) {
      for(let x = 0; x < symbolCounts.length; x++) {
        symbolCounts[x] = 0;
      }

      const current = strs[i];
      for(let j = 0; j < current.length; j++) {
        symbolCounts[current.charCodeAt(j) - aCode]++;
      }

      const key = symbolCounts.join('#');
      if(!anagramMap[key]) {
        anagramMap[key] = [];
      }
      anagramMap[key].push(current);
    }

    const result: string[][] = [];
    for(const k in anagramMap) {
      result.push(anagramMap[k]);
    }

    return result;
  }
}
