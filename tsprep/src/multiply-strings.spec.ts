describe('Multiply strings', () => {

  test('Multiply 1', () => {
    expect(PhoneMs3.multiply('2', '2')).toEqual('4');
  });
  test('Multiply 2', () => {
    expect(PhoneMs3.multiply('11', '2')).toEqual('22');
  });
  test('Multiply 3', () => {
    expect(PhoneMs3.multiply('2', '11')).toEqual('22');
  });
  test('Multiply 4', () => {
    expect(PhoneMs3.multiply('9', '9')).toEqual('81');
  });
  test('Multiply 5', () => {
    expect(PhoneMs3.multiply('9', '9')).toEqual('81');
  });
  test('Multiply 6', () => {
    expect(PhoneMs3.multiply('45', '12')).toEqual('540');
  });
  test('Multiply 7', () => {
    expect(PhoneMs3.multiply('123', '456')).toEqual('56088');
  });
  test('Multiply 8', () => {
    expect(PhoneMs3.multiply('66', '66')).toEqual('4356');
  });
  test('Multiply 9', () => {
    expect(PhoneMs3.multiply('0', '0')).toEqual('0');
  });
});

class PhoneMs3 {
  public static multiply(num1: string, num2: string): string {
    if(num1 === '0' || num2 === '0') {
      return '0';
    }
    const sym0 = '0'.charCodeAt(0);
    const digits1 = Array.from(num1).map(c => c.charCodeAt(0) - sym0).reverse();
    const digits2 = Array.from(num2).map(c => c.charCodeAt(0) - sym0).reverse();

    const resultArray: number[] = Array.from(Array(digits1.length + digits2.length).keys()).map(k => 0);

    for(let i = 0; i < digits1.length; i++) {
      let carry = 0;
      let j = 0;
      for(; j < digits2.length; j++) {
        const sum = resultArray[i + j] + digits1[i] * digits2[j] + carry;
        resultArray[j + i] = sum % 10;
        carry = Math.floor(sum / 10);
      }
      resultArray[j + i] += carry;
    }
    let notZero = 0;
    const reversed = resultArray.reverse();
    while(reversed[notZero] === 0) {
      notZero++;
    }
    const result = reversed.slice(notZero).join('');
    return result;
  }
}
