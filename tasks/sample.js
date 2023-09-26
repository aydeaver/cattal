const fs = require('fs')
/**
 * @func task_make_sandbox
 * @desc Testing
 * @returns Object
 */
function task_simple () {
  return {
    actions: ['echo'],
    args: 'nothing'
  }
}

/**
 * @func task_simpler
 * @desc Used to demonstrae the fact you can execute JS code within a task
 * @returns Void
 */
function task_simpler () {
  console.log('log')
}

/**
 * @func task_complex
 * @desc Used to simulate more complex 'tasks' that
 * may require information from outside the task file
 * @returns Array
 */
function task_complex () {
  return {
    fileDeps: not_a_task()
  }
}

/**
 * @func not_a_task
 * @desc Used to simulate more complex 'tasks' that
 * may require information from outside the task file
 * @returns Array
 */
function not_a_task () {
  const files = fs.readdirSync('.')
  return files
}

module.exports = {
  task_simple,
  task_simpler,
  task_complex
}
