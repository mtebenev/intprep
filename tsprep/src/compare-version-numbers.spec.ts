describe('Compare version numbers', () => {
  test('Compare version 1', () => {
    expect(CompareVersionNumbers.compareVersion('1.0', '1')).toEqual(0);
  });
  test('Compare version 2', () => {
    expect(CompareVersionNumbers.compareVersion('0.1', '1.1')).toEqual(-1);
  });
  test('Compare version 3', () => {
    expect(CompareVersionNumbers.compareVersion('1.0.1', '1')).toEqual(1);
  });
  test('Compare version 4', () => {
    expect(CompareVersionNumbers.compareVersion('7.5.2.4', '7.5.3')).toEqual(-1);
  });
  test('Compare version 5', () => {
    expect(CompareVersionNumbers.compareVersion('1.01', '1.001')).toEqual(0);
  });
  test('Compare version 6', () => {
    expect(CompareVersionNumbers.compareVersion('1.0', '1.0.0')).toEqual(0);
  });
  test('Compare version 7', () => {
    expect(CompareVersionNumbers.compareVersion('', '0')).toEqual(0);
  });
  test('Compare version 8', () => {
    expect(CompareVersionNumbers.compareVersion('', '1')).toEqual(-1);
  });
  test('Compare version 9', () => {
    expect(CompareVersionNumbers.compareVersion('1', '')).toEqual(1);
  });
});

class CompareVersionNumbers {

  public static compareVersion(version1: string, version2: string): number {
    if(!version1 && !version2) {
      return 0;
    }
    const v1 = version1 ? version1 : '0';
    const v2 = version2 ? version2 : '0';
    const nums1 = v1.split('.').map(n => parseInt(n.trim(), 10));
    const nums2 = v2.split('.').map(n => parseInt(n.trim(), 10));

    const maxComps = Math.max(nums1.length, nums2.length);
    for(let i = 0; i < maxComps; i++) {
      const c1 = i < nums1.length ? nums1[i] : 0;
      const c2 = i < nums2.length ? nums2[i] : 0;
      if(c1 < c2) {
        return -1;
      } else if(c1 > c2) {
        return 1;
      }
    }

    return 0;
  }
}
