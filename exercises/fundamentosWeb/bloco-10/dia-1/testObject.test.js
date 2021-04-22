const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('teste  exercício 5', () => {
  it('obj1 is equal obj2?', () => {
    expect(obj1).toEqual(obj2);
  });
  it('obj2 is not equal obj3?', () => {
    expect(obj2).not.toEqual(obj3);
  });
})