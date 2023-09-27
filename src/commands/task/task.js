import { Args, Command, Flags } from '@oclif/core'
import * as path from 'path'
import { Parser } from '../../classes/Parser.js'
import { TaskProcessor } from '../../classes/TaskProcessor.js'

const processor = new TaskProcessor()
const taskDirectory = path.resolve() + '/tasks'

export default class Task extends Command {
  static description = 'executes single or list of tasks defined in a JS file'

  static examples = [
    `<%= config.bin %> <%= command.id %>`,
  ]

  static flags = {
    dir: Flags.string({ char: 'd', description: 'Where to load tasks from' })
  }

  static args = {
    task: Args.string({ description: 'a specific task to run', required: false })
  }

  async run () {
    const { args, flags } = await this.parse(Task)
    // this.log(args)

    const source = flags.dir ?? taskDirectory
    this.log(`loading from  ${taskDirectory}: cattal`)
    const parser = new Parser(source)
    if (args.task) {
      const task = parser.getTaskDef(args.task)
      processor.handler(args.task, task)
    } else {
      const list = parser.getTasks()
      list.forEach((iter) => {
        // console.log(iter.name)
        processor.handler(iter.name, parser.getTaskDef(iter.name))
      })
    }
  }
}
