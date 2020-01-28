describe('Most common word', () => {
  test('Mostcommonword 1', () => {
    const p = 'Bob hit a ball, the hit BALL flew far after it was hit.';
    const b = ['hit'];
    expect(MostCommonWord.mostCommonWord(p, b)).toEqual('ball');
  });
});

/**
 * https://leetcode.com/problems/most-common-word/
 * tags: easy, string
 */
class MostCommonWord {
  public static mostCommonWord(paragraph: string, banned: string[]): string {
    const words: {[idx: string]: number} = {};
    banned.forEach(w => {
      words[w] = -1;
    });

    const tokens = paragraph
      .split(/[\s!?',;.]+/)
      .filter(t => t.length > 0)
      .map(t => t.toLowerCase());

    let result = '';
    let maxRate = 0;
    tokens.forEach(t => {
      if(words[t] !== -1) {
        let frequency = 1;
        if(words[t] === undefined) {
          words[t] = 1;
        } else {
          words[t]++;
          frequency = words[t];
        }
        if(frequency > maxRate) {
          maxRate = frequency;
          result = t;
        }
      }
    });

    return result;
  }
}
