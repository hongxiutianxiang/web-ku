const fs = require('fs');

/*
//1.打开文件
const fd = fs.openSync('./01.txt','w');//a
//2.写文件
fs.writeSync(fd,'hello...');
//3.关闭退出
fs.closeSync(fd);
*/

//合并
fs.writeFileSync('./01.txt','hello',{flag:'w'})

