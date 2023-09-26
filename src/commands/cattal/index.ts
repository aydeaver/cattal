import {Command} from '@oclif/core'

export default class Cattal extends Command {
  static description = 'Say hello'

  static examples = [
    `$ cattal task -d <path to tasks>
    `,
  ]

  async run(): Promise<void> {
    this.parse(Cattal)

    this.log(Cattal.examples.toString())
  }
}
