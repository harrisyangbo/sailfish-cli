module.exports = {
	templates: {
		'vue-app-template': {
			gitUri: 'direct:https://github.com/harrisyangbo/vue-app-template/archive/master.zip',
			desc: 'Vue单页面应用模板'
		},
		'vue-app-template-ts': {
			gitUri: 'direct:https://github.com/harrisyangbo/vue-app-template-ts/archive/master.zip',
			desc: 'Vue单页面应用模板typescript版'
		},
		'react-app-template': {
			gitUri: '',
			desc: 'React单页面应用模板'
		},
		'sailfish-admin': {
			gitUri: '',
			desc: '旗鱼系列-中后台管理系统模板'
		},
		'angular-app-template': {
			gitUri: '',
			desc: 'Angular单页面应用模板'
		},
		'vue-module': {
			gitUri: 'direct:https://github.com/harrisyangbo/module-vue/archive/master.zip',
			desc: '开发vue模块(组件)模板'
		},
		'npm-js': {
			gitUri: 'direct:https://github.com/harrisyangbo/npm-js/archive/master.zip',
			desc: 'npm包开发模板(js)'
		},
		'npm-ts': {
			gitUri: 'direct:https://github.com/harrisyangbo/npm-ts/archive/master.zip',
			desc: 'npm包开发模板(typescript)'
		},
		'vue-h5-template': {
			gitUri: '',
			desc: 'H5页面开发模板(vue)'
		},
		'react-h5-template': {
			gitUri: '',
			desc: 'H5页面开发模板(react)'
		},
		'h5-template': {
			gitUri: '',
			desc: 'H5页面开发模板(原生)'
		},
		'wx-miniapp': {
			gitUri: '',
			desc: '微信小程序开发模板'
		},
		'mpvue-miniapp': {
			gitUri: '',
			desc: '跨端小程序开发模板(mpvue)'
		},
		'uni-miniapp': {
			gitUri: '',
			desc: '跨端小程序开发模板(uni)'
		},
		'koa-server': {
			gitUri: '',
			desc: 'Node 服务端开发模板(koa)'
		},
		'express-server': {
			gitUri: '',
			desc: 'Node 服务端开发模板(express)'
		}
	},
	// 需要替换内容的文件
	injectFilesName: [
		'package.json',
		'readme.md',
		'conf/webpack.prod.config.js',
		'conf/index.html',
		'rollup.config'
	]
}