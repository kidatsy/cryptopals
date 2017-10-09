import _ from 'lodash';

export const hexBitsFor = {
  '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100', '5': '0101', '6': '0110', '7': '0111',
  '8': '1000', '9': '1001', 'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111',
};
export const hexDigitFor = _.invert(hexBitsFor); 

export const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

export const printableAsciiChars = _.reduce(_.range(32, 127), (string, i) => {return string + String.fromCharCode(i);}, '');
export const nonPrintableAsciiChars = '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000a\u000b\u000c\u000d\u000e\u000f'
                                    + '\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f';

export const stdFrequencies = {
  en: {
    e: 0.12702, t: 0.09056, a: 0.08167, o: 0.07507, i: 0.06966, n: 0.06749,
    s: 0.06327, h: 0.06094, r: 0.05987, d: 0.04253, l: 0.04025, c: 0.02782,
    u: 0.02758, m: 0.02406, w: 0.02360, f: 0.02228, g: 0.02015, y: 0.01974,
    p: 0.01929, b: 0.01492, v: 0.00978, k: 0.00772, j: 0.00153, x: 0.00150,
    q: 0.00095, z: 0.00074, ' ': 0.1918182
  }
};
