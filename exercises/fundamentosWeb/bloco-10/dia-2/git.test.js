const { getRepos } = require('./git');

describe('Verifica se existe alguns projetos no repositorio', () => {
  it('Verifica se existe o projeto sd-01-week4-5-project-todo-list', () => {
    return expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list')
  })
  it('Verifica se existe o projeto sd-01-week4-5-project-meme-generator', () => {
    return expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-meme-generator')
  })
})