import {Command} from '@oclif/core'

export default class Help extends Command {
  static description = 'Display Cattal Help'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log('./cattal task -d <directory to tasks>')
    this.log(Help.examples[0])
  }
}
