import {expect, test} from '@oclif/test'

describe('task', () => {
  test
  .stdout()
  .command(['cattal:task'])
  .it('runs cattal', ctx => {
    expect(ctx.stdout).to.contain('$ cattal task -d <path to tasks>')
  })

  test
  .stdout()
  .command(['cattal:task', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
