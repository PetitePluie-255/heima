/**
 * 目标一：压缩 html 里代码
 * 需求：把 public/index.html 里的，回车/换行符去掉，写入到 dist/index.html 中
 *  1.1 读取 public/index.html 内容
 *  1.2 使用正则替换内容字符串里的，回车符\r 换行符\n
 *  1.3 确认后，写入到 dist/index.html 内
 */

const fs = require('fs')
const path = require('path')
// 读取 public/index.html 内容
fs.readFile(path.join(__dirname,'public', 'index.html'), (err, data) => {
  if (err) {
    return console.log('文件读取失败', err)
  }
  const htmlStr = data.toString()
  // 使用正则替换内容字符串里的，回车符\r 换行符\n
  const resultStr = htmlStr.replace(/\r\n/g, '')
  // 写入到 dist/index.html 内
  fs.writeFile(path.join(__dirname, 'dist', 'index.html'), resultStr, err => {
    if (err) {
      return console.log('文件写入失败')
    }
    console.log('文件写入成功');
  })
})

