const standard = require('eslint-config-standard')

module.exports = [
  standard,
  {
    extends: [
      'oclif',
      'oclif-typescript'
    ]
  }
]
