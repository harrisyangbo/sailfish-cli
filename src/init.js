const { choiceTemp } = require('./choice')
const { userInput } = require('./user_input')
const cwd = process.cwd()
const fs = require('fs')
let TemplateList = require('../src/temp')
var ctx = {
	__cwd: cwd
}
module.exports = function() {
	// 用户输入
	userInput(ctx.__cwd)
	.then((res) => {
		const { proName, description } = res
		// 判断是否有此目录
		const cwdArr = ctx.__cwd.split('/')
		if (proName !== cwdArr[cwdArr.length - 1]) {
			fs.mkdirSync(`./${proName}`, { recursive: true })
			// 修改执行路径
			ctx.__cwd = `${ctx.__cwd}/${proName}`
		}
		// 选择模板
		return choiceTemp()
	})
	.then((data) => {
		const { lang } = data
		let templageList = new TemplateList()
		return templageList.downloadTemp(lang, ctx.__cwd)
	})
	.catch((e) => {
		throw new Error(e)
	})
}