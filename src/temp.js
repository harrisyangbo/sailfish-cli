const { templates } = require('../config/templates')
const { colors } = require('../utils/colors')
class TemplateList {
	constructor() {}
	get() {
		return new Promise((resolve, reject) => {
			
		})
	}
	show() {
		Object.keys(templates).forEach((item) => {
			console.log(`${colors('cyan', item)}: ${colors('cyan', templates[item].desc)}`)
		})
	}
}

module.exports = TemplateList