import { Command, Flags } from '@oclif/core'
import * as path from 'path'
import { Parser } from '../classes/Parser'

const taskDirectory = path.resolve() + '/tasks'

export default class List extends Command {
  static description = 'list all available tasks'

  static examples = [
    `<%= config.bin %> <%= command.id %>`,
  ]

  static flags = {
    dir: Flags.string({ char: 'd', description: 'Where to load tasks from' })
  }

  async run () {
    const { flags } = await this.parse(List)

    const source = flags.dir ?? taskDirectory
    this.log(`loading from  ${taskDirectory}: cattal`)
    const parser = new Parser(source)
    const list = parser.getTasks()
    list.forEach((i) => {
      console.log(i.name)
    })
  }
}
