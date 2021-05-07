const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}
// peguei gabarito mas não compreendi 100% as funcionalidade e o fluxo dos testes
it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});