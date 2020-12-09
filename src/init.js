const { choiceTemp } = require('./choice')
const { userInput } = require('./user_input')

module.exports = function() {
	userInput().then((res) => {
		console.log(111)
		console.log(res)
		return choiceTemp()
	}).then((data) => {
		console.log(22)
		console.log(data)
	})
}