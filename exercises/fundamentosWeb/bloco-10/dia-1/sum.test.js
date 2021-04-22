const sum = require('./sum');

describe('teste  exercício 1', () => {
  it('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('test zero value', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('testa se é lançado um erro quando se passa uma string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
})

