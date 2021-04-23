const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[id]) {
        return resolve(users[id]);
      }
      return reject({ error: 'User with ' + id + ' not found.' });
    }, 500);
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

//testes com resolve/reject
describe('Testando existencia ou não de ID somente com return resolve e reject', () => {
  it('testando se existe o ID', () => {
    return expect(getUserName(4)).resolves.toBe('Mark')
  })
  it('testando se não existe o ID', () => {
    return expect(getUserName(2)).rejects.toEqual({ "error": "User with 2 not found." })
  })
})

//com await s/ resolve/reject
describe('Testando existencia ou não de ID com await s/ resolve e reject', () => {
  it('testando se existe o ID', async () => {
    const employee = await getUserName(4)
    expect(employee).toBe('Mark')
  })
  it('testando se existe ou nao o ID', async () => {
    try {
      await getUserName(2)
    } catch (error) {
      expect(error).toEqual({ "error": "User with 2 not found." })
    }
  });
})

//com await c/ resolve/reject
describe('Testando existencia ou não de ID com await com resolve/reject', () => {
  it('testando se existe o ID', async () => {
    await expect(getUserName(4)).resolves.toBe('Mark')
  })
  it('testando se existe ou nao o ID', async () => {
    await expect(getUserName(2)).rejects.toEqual({ "error": "User with 2 not found." })
  });
})
