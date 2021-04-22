const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('test  exercise 2', () => {
  it('expected result', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('expected not this result', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verificando se altera valor inicial', () => {
    const array = [1, 2, 3, 4]
    myRemoveWithoutCopy(array, 3)
    expect(array).toEqual([1, 2, 4]);
  });
  it('expected result', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})
