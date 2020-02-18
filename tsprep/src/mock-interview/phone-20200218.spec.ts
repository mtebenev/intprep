describe('Phone11', () => {
  test('Anagram 1', () => {
    expect(Phone11.isAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  test('Anagram 2', () => {
    expect(Phone11.isAnagram('rat', 'car')).toBeFalsy();
  });
  test('Excel 1', () => {
    expect(Phone11.titleToNumber('A')).toEqual(1);
  });
  test('Excel 2', () => {
    expect(Phone11.titleToNumber('Z')).toEqual(26);
  });
  test('Excel 3', () => {
    expect(Phone11.titleToNumber('AA')).toEqual(27);
  });
  test('Excel 4', () => {
    expect(Phone11.titleToNumber('ZY')).toEqual(701);
  });
});

class Phone11 {
  public static isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
      return false;
    }

    const dict: {[idx: string]: number} = {};
    for(let i = 0; i < s.length; i++) {
      if(!dict[s[i]]) {
        dict[s[i]] = 1;
      } else {
        dict[s[i]]++;
      }
    }

    for (let i = 0; i < t.length; i++) {
      if(!dict[t[i]]) {
        return false;
      } else {
        dict[t[i]]--;
        if(dict[t[i]] === 0) {
          delete dict[t[i]];
        }
      }
    }

    return true;
  }

  public static titleToNumber(s: string): number {
    let result = 0;
    let base = 1;
    const ca = 'A'.charCodeAt(0);
    for (let i = s.length - 1; i >= 0; i--) {
      const c = s.charCodeAt(i) - ca;
      result += base * (c + 1);

      base *= 26;
    }

    return result;
  }
}
