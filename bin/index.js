#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const versions = require('../package.json').version

program.version(versions)

program
 .option('-i, init [name]', '初始化工程')

program
	.command('init')
	.description('初始化项目')
	.action(() => {
		require('../src/init')()
	})

program
 .command('list')
 .description('查看模板列表')
 .alias('-l')
 .action(() => {
	 require('../src/temp')()
 })

program.parse(process.argv)