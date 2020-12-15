const { templates, injectFilesName } = require('../config/templates')
const { colors } = require('../utils/colors')
const download = require('download-git-repo')
const path = require('path')
const { readFile, writeFile } = require('../utils/file_operate')
let loadings = require('loading-cli')
let reqLoad = loadings({
    "color":"yellow",
    "frames":["◰", "◳", "◲", "◱"]
})

class TemplateList {
	constructor() {}
	show() {
		Object.keys(templates).forEach((item) => {
			console.log(`${colors('cyan', item)}: ${colors('cyan', templates[item].desc)}`)
		})
	}
	downloadTemp(lang, cwd) {
		return new Promise((resolve, reject) => {
			if (!templates[lang].gitUri) {
				console.log(colors('red', '暂无此模板地址，请选择其他模板!'))
				reject(new Error('暂无此模板地址，请选择其他模板!'))
			} else {
				reqLoad.start('Get template ......')
				download(templates[lang].gitUri, cwd, function(err) {
					if (err) {
						reqLoad.fail('Get template error')
						reject(err)
					} else {
						reqLoad.succeed('Get template success')
						console.log(colors('green', '模板下载成功，开始在项目目录进行开发吧！'))
						resolve()
					}
				})
			}
		})
	}
	injectContent(cwd, proName) {
		// 替换模板中的变量
		return new Promise((resolve, reject) => {
			try {
				injectFilesName.forEach((item) => {
					const filePath = path.normalize(path.resolve(cwd, item))
					let res = readFile(filePath)
					if (res) {
						let newContent = res.replace(/\$\{X+\}/g, proName)
						writeFile(filePath, newContent)
					}
				})
				resolve()
			} catch(e) {
				reject(e)
			}
		})
	}
}

module.exports = TemplateList