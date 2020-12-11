const { choiceTemp } = require('./choice')
const { userInput } = require('./user_input')
const requiredVersion = require('../package.json').engines.node
const checkoutVersion = require('../utils/checkout_version')
const { colors } = require('../utils/colors')
const cwd = process.cwd()
const fs = require('fs')
// 检查版本
checkoutVersion(requiredVersion, 'sailfish-cli')

let TemplateList = require('../src/temp')
let templageList = new TemplateList()

var ctx = {
	__cwd: cwd,
	proName: '',
	description: '',
	__lang: ''
}
module.exports = function() {
	userInput(ctx.__cwd)
	.then((res) => {
		const { proName, description } = res
		ctx.proName = proName
		ctx.description = description
		// 判断是否有此目录
		const cwdArr = ctx.__cwd.split('/')
		if (proName !== cwdArr[cwdArr.length - 1]) {
			fs.mkdirSync(`./${proName}`, { recursive: true })
			// 修改执行路径
			ctx.__cwd = `${ctx.__cwd}/${proName}`
			// 进入项目目录
			process.chdir(ctx.__cwd)
		}
		// 选择模板
		return choiceTemp()
	})
	.then((data) => {
		const { lang } = data
		ctx.__lang = lang
		return templageList.downloadTemp(lang, ctx.__cwd)
	})
	.then(() => {
		return templageList.injectContent(ctx.__cwd, ctx.proName)
	})
	.then(() => {
		console.log(colors('green', '-----init success----'))
	})
	.catch((e) => {
		throw new Error(e)
	})
}