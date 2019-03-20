const buf = Buffer.from('hello');
console.log(buf);  //<Buffer 68 65 6c 6c 6f>

const buf2 = Buffer.from('乖乖嘞')
console.log(buf2);  //<Buffer e4 b9 96 e4 b9 96 e5 98 9e>
