#!/usr/bin/env node
'use strict';

const timestamp = require('timestamp-file')
const chalk = require('chalk')

const [, , args] = process.argv

if (args === '-h' || args === '--help' || args === undefined) {
  console.log(`
    Usage: timestamp-file <path>

    Create a timestamp prepended file

    Options:

      -h, --help           output usage information
  `)
  process.exit(1)
} else {
  timestamp.create(args)
    .then(
      (path) => console.log(chalk.green(`file created at: ${path}`)),
      (err) => {
        console.error(chalk.red(err))
        process.exit(1)
      }
    )

}
