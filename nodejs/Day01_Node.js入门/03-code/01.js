/**
 * 目标：编写 js 代码，用 node 命令执行
 * 终端作用：敲击命令，调用对应程序执行
 * 终端打开：目标文件->右键->在集成终端中打开
 * 命令：node xxx.js （注意路径）
 */
const a = 10
console.log(a);
for (let i = 0; i < 10; i ++) {
  console.log(i);
}
setInterval(() => {
  console.log(10);
}, 1000);
// console.log(document);   nodejs环境下不支持window / document
