import {ListNode} from '../utils/list-node';

describe('Phone MS3', () => {
  /*
  test('Compare version 1', () => {
    expect(PhoneMs3.compareVersion('1.0', '1')).toEqual(0);
  });
  test('Compare version 2', () => {
    expect(PhoneMs3.compareVersion('0.1', '1.1')).toEqual(-1);
  });
  test('Compare version 3', () => {
    expect(PhoneMs3.compareVersion('1.0.1', '1')).toEqual(1);
  });
  test('Compare version 4', () => {
    expect(PhoneMs3.compareVersion('7.5.2.4', '7.5.3')).toEqual(-1);
  });
  test('Compare version 5', () => {
    expect(PhoneMs3.compareVersion('1.01', '1.001')).toEqual(0);
  });
  test('Compare version 6', () => {
    expect(PhoneMs3.compareVersion('1.0', '1.0.0')).toEqual(0);
  });
  test('Compare version 7', () => {
    expect(PhoneMs3.compareVersion('', '0')).toEqual(0);
  });
  test('Compare version 8', () => {
    expect(PhoneMs3.compareVersion('', '1')).toEqual(-1);
  });
  test('Compare version 9', () => {
    expect(PhoneMs3.compareVersion('1', '')).toEqual(1);
  });
  */

  /*
  test('Multiply 1', () => {
    expect(PhoneMs3.multiply('2', '2')).toEqual('4');
  });
  */
  test('Multiply 2', () => {
    expect(PhoneMs3.multiply('11', '2')).toEqual('22');
  });
});

class PhoneMs3 {

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

  public static multiply(num1: string, num2: string): string {
    const sym0 = '0'.charCodeAt(0);
    const digits1 = Array.from(num1).map(c => c.charCodeAt(0) - sym0).reverse();
    const digits2 = Array.from(num2).map(c => c.charCodeAt(0) - sym0).reverse();

    let carry = 0;
    let base1 = 10;
    const resultArray: number[] = [];

    for(let i = 0; i <= digits2.length; i++) {
      let base2 = base1;
      resultArray.push(0);
      for(let j = 0; j < digits1.length; j++) {
        const sum = resultArray[i] + digits2[i] * digits1[j] + carry;
        resultArray[j] = sum % base2;
        carry = Math.floor(sum / base2);
        base2 *= 10;
      }
      base1 *= 10;
    }
    const result = resultArray.reverse().join();
    return result;
  }
}
