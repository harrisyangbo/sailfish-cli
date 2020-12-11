const fs = require('fs')
const path = require('path')
// rimraf 的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
const rm = require('rimraf')

function copyFile(sourceFile, destinationFile) {
	fs.copyFileSync(sourceFile, destinationFile)
}

function readFile(sourceFile) {
  return fs.readFileSync(sourceFile, {
    encoding: 'utf8'
  }).toString();
}

function writeFile(destinationFile, data) {
  fs.writeFileSync(destinationFile, data, {
    encoding: 'utf8'
  });
}

function isDirExist(dir) {
  return fs.existsSync(dir);
}

function readDir(dir) {
  const dirents = fs.readdirSync(dir, {
    encoding: 'utf8',
    withFileTypes: true
  });
  return dirents;
}

function removeDir(dir) {
  if (isDirExist(dir)) {
    rm.sync(dir);
  }
}

function makeDir(dir) {
  fs.mkdirSync(dir, {
    recursive: true
  });
}

function traverse(baseDir, relativeDir, handleFileContent) {
	const fullDir = path.normalize(path.join(baseDir, relativeDir))
	const dirents = fs.readdirSync(fullDir, {
    encoding: 'utf8',
    withFileTypes: true
  });
  dirents.forEach(d => {
    if (d.isDirectory()) {
      traverse(baseDir, path.normalize(path.join(relativeDir, d.name)), handleFileContent);
    } else if (d.isFile()) {
      if (handleFileContent) {
        handleFileContent(baseDir, relativeDir, d.name);
      }
    }
  });
}
module.exports = {
	copyFile,
	readFile,
	writeFile,
	readDir,
	removeDir,
	makeDir,
	traverseDir: traverse
}