// import {TaskCommand} from './TaskCommand'
const { NotImplemented, ExecutionError } = require('./CError')
const { exec } = require('node:child_process')
const { once } = require('events')

class TaskProcessor {
  // Methods
  handler (taskName, taskDef) {
    if (!taskDef) return
    const {
      name,
      fileDeps,
      targets,
      args,
      actions,
      ...opt
    } = taskDef

    // If there is anything in opt we have a bad instruction
    try {
      const prop = this._isEmpty(opt)
      if (prop !== true) {
        throw new NotImplemented(prop, 'Task has an invalid property:')
      }
    } catch (e) {
      console.error(e.message)
      // this.error(e.stack);  // Uncomment if you want the stack
    }

    if (actions) {
      this._execute(actions, args)
        .then(({ output, err }) => {
          console.log(`returned output: ${output}`)
          console.log(`err: ${err}`)
          console.log(taskDef)
          if (err) { throw new ExecutionError(taskName, 'Task has an invalid property:') }
        })
    }
  }

  // 'Private' Methods
  _validate (task) {
    return true
  }

  _type () {

  }

  async _execute (cmd, args) {
    const res = exec(`"${cmd}" ${args}`)
    let output = ''
    let err = false

    res.stdout.on('data', (data) => {
      output += data.toString()
    })

    // Handle potential errors
    res.stderr.on('data', (data) => {
      err = true
      output = data
    })

    res.stdout.on('end', async function (code) {
      // console.log(`Exit code is: ${code}`);
    })

    await once(res, 'close')

    return { output, err }
  }

  _assemble () {

  }

  _isEmpty (obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return prop
      }
    }
    return true
  }
}

module.exports = { TaskProcessor }
