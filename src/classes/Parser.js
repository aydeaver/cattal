import { TaskProcessor } from './TaskProcessor'
// import { jsdocParse } from 'jsdoc-parse'
const fs = require('fs')
const esprima = require('esprima')

class Parser {
  constructor (taskDir) {
    this.source = taskDir
    // this.parseTasks(this.getFiles(this.source));
    // this.processor = new Processor()
  }

  // Method
  getFiles () {
    return fs.readdirSync(this.source)
  }

  getTasks () {
    return this._parseTasks()
  }

  parseTasks2 (files) {
    const processor = new TaskProcessor({})
    processor.execute()
  }

  _parseTasks () {
    const files = this.getFiles(this.source)
    const tasks = []

    files.forEach((f) => {
      const filename = `${this.source}/${f}`
      const contents = fs.readFileSync(filename, 'utf8')
      const tree = esprima.parseScript(contents, { comment: true, range: true })
      tree.body.forEach((el) => {
        if (el.type === 'FunctionDeclaration') {
          if (el.id.name.startsWith('task_')) {
            tasks.push({
              name: el.id.name,
              filename
            })
          }
        }
      })
    })

    return tasks
  }

  getTaskDef (task) {
    const tasks = this._parseTasks()

    const taskObj = tasks.filter(obj => {
      return obj.name === task
    })

    const req = require(taskObj[0].filename)
    const def = req[taskObj[0].name]()
    // Command Set
    if (typeof def === 'object') {
      return def
    } else {
      // console.log(def)
    }
  }
}

module.exports = { Parser }
