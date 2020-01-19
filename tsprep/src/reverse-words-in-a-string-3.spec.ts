/**
 * Given a string, you need to reverse the order of characters in each
 * word within a sentence while still preserving whitespace and initial word order.
 */
describe('Reverse words', () => {
  test('Case 1', () => {
    expect(ReverseWordsInASting3.reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
  });
  test('Case 2', () => {
    expect(ReverseWordsInASting3.reverseWords('')).toEqual('');
  });
  test('Case 3', () => {
    expect(ReverseWordsInASting3.reverseWords(null)).toEqual(null);
  });
  test('Case 4', () => {
    expect(ReverseWordsInASting3.reverseWords(' ')).toEqual(' ');
  });
});

class ReverseWordsInASting3 {
  public static reverseWords(s: string | null): string | null {
    if(s === null) {
      return null;
    }
    if(!s) {
      return '';
    }
    const words = s.split(' ');
    let result = '';
    let firstWord = true;
    for(const w of words) {
      if(!firstWord) {
        result += ' ';
      } else {
        firstWord = false;
      }
      for(let i = w.length - 1; i >= 0; i--) {
        result += w[i];
      }
    }

    return result;
  }
}
