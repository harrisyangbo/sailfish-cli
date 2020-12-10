const semver = require('semver')
const { colors } = require('../utils/colors')

module.exports = function(wanted, id) {
	if (!semver.satisfies(process.version, wanted)) {
		console.log(colors('red', 'You are using Node ' + process.version + ', but this version of ' + id +
		' requires Node ' + wanted + '.\nPlease upgrade your Node version.'))
		process.exit(1)
	}
}