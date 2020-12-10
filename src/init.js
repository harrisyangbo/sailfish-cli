const { choiceTemp } = require('./choice')
const { userInput } = require('./user_input')
let TemplateList = require('../src/temp')

module.exports = function() {
	// 用户输入
	userInput()
	.then((res) => {
		console.log(111)
		const { proName, description } = res
		// 选择模板
		return choiceTemp()
	})
	.then((data) => {
		console.log(22)
		const { lang } = data
		let templageList = new TemplateList()
		return templageList.get(lang)
	})
}