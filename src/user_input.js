const inquirer = require('inquirer')
const { type } = require('os')
const path = require('path')
const cwd = process.cwd()
let form = inquirer.createPromptModule()

exports.userInput = function() {
	const defaultPro = path.basename(cwd)
	return form([{
		message: '项目名称：',
		type: 'input',
		name: 'proName',
		default: defaultPro
	}, {
		message: '项目描述：',
		type: 'input',
		name: 'description',
		default: ''
	}])
}