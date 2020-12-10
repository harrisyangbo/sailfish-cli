const inquirer = require('inquirer')
const path = require('path')
let form = inquirer.createPromptModule()

exports.userInput = function(cwd) {
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