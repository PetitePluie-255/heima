/**
 * 目标：编写 web 服务，监听请求的是 /index.html 路径的时候，返回 dist/index.html 时钟案例页面内容
 * 步骤：
 *  1. 基于 http 模块，创建 Web 服务
 *  2. 使用 req.url 获取请求资源路径，并读取 index.html 里字符串内容返回给请求方
 *  3. 其他路径，暂时返回不存在提示
 *  4. 运行 Web 服务，用浏览器发起请求
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const server = http.createServer()
server.listen(3000, () => {
    console.log('服务已启动');
})
server.on('request', (req, res) => {
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
        if (err) return console.log('文件读取失败');
        // console.log(req.url)
        if (req.url === '/index.html') {
            console.log(data.toString());
            res.end(data.toString())
        }
        
    })
})