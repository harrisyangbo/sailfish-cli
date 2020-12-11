const inquirer = require('inquirer')
let form = inquirer.createPromptModule()

exports.choiceTemp = function() {
	return form([{
		message: '请选择你需要的模板:',
		type: 'list',
		name: 'lang',
		default: 'vue-app-template',
		choices: [
			new inquirer.Separator('----PC管理系统模板----'),
			"vue-app-template",
			"react-app-template",
			"angular-app-template",
			"sailfish-admin",
			new inquirer.Separator('----开发npm包模板----'),
			"vue-module",
			"npm-js",
			"npm-ts",
			new inquirer.Separator('----H5模板----'),
			"vue-h5-template",
			"react-h5-template",
			"h5-template",
			new inquirer.Separator('----小程序模板----'),
			"wx-miniapp",
			"mpvue-miniapp",
			"uni-miniapp",
			new inquirer.Separator('----Node服务端模板----'),
			"koa-server",
			"express-server"
		]
	}])
}