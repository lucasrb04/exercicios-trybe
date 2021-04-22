const myFizzBuzz = require('./myFizzBuzz');

describe('test  exercise 4', () => {
  it('Divisible by 3n5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Divisible by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Not divisible by 3 n 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('Not a number', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
})