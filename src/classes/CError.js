class NotImplemented extends Error {
  constructor (message = '', ...args) {
    super(message, ...args)
    this.message = 'Implementation Error: ' + message + ' has not yet been implemented.'

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotImplemented)
    }

    this.name = 'NotImplemented'
    // Custom debugging information
    this.date = new Date()
  }
}

class ExecutionError extends Error {
  constructor (message = '', ...args) {
    super(message, ...args)
    this.message = 'Execution Error: `' + message + '` failed during execution.'

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExecutionError)
    }

    this.name = 'ExecutionError'
    // Custom debugging information
    this.date = new Date()
  }
}

module.exports = {
  NotImplemented,
  ExecutionError
}
