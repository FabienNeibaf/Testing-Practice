import {
  capitalize,
  reverseString,
  caesar,
  calculator,
  analyze,
} from './index';

test('It returns the capitalized string', () => {
  expect(capitalize('microVerse')).toBe('Microverse');
});

test('It returns the reversed string', () => {
  expect(reverseString('microverse')).toBe('esrevorcim');
});

test('It adds numbers', () => {
  expect(calculator.add(2, 3, 5)).toBe(10);
  expect(calculator.add(3, 2, 5)).toBe(10);
});

test('It substructs numbers', () => {
  expect(calculator.substruct(8, 10)).toBe(-2);
  expect(calculator.substruct(4, 7, -5)).toBe(2);
  expect(calculator.substruct(8, 7, -5)).toBe(6);
});

test('It multiplies numbers', () => {
  expect(calculator.multiply(0, 3, 7)).toBe(0);
  expect(calculator.multiply(3, 3, 7)).toBe(63);
  expect(calculator.multiply(-3, 3, 7)).toBe(-63);
  expect(calculator.multiply(-3, -4, 7)).toBe(84);
});

test('It divides numbers', () => {
  expect(calculator.divide(0, 3, 7)).toBe(0);
  expect(calculator.divide(3, 0, 7)).toBe(Infinity);
  expect(calculator.divide(-3, 3, 7)).toBeCloseTo(-0.1428571429);
});

test('It encrypts string', () => {
  expect(caesar(1).encrypt('microverse')).toBe('njdspwfstf');
  expect(caesar(5).encrypt('miCro!verse')).toBe('rnHwt!ajwxj');
});

test('It decrypts string', () => {
  expect(caesar(1).decrypt('njdspwfstf')).toBe('microverse');
  expect(caesar(5).decrypt('rnHwt! Ajwxj?')).toBe('miCro! Verse?');
});

test('It returns statistical summary', () => {
  const { average, min, max, length } = analyze([10, 7, 12, 24, 30]);
  expect(min).toBe(7);
  expect(max).toBe(30);
  expect(length).toBe(5);
  expect(average).toBeCloseTo(16.6);
});
