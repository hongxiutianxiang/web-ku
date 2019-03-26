const buf = Buffer.from('hello');
console.log(buf);  //<Buffer 68 65 6c 6c 6f>

const buf2 = Buffer.from('乖乖嘞')
console.log(buf2);  //<Buffer e4 b9 96 e4 b9 96 e5 98 9e>


const buf3 = Buffer.alloc(10);//<Buffer 00 00 00 00 00 00 00 00 00 00>

buf3[1] = 10;
buf3[2] = 0x10;
console.log(buf3);


const buf4 = Buffer.alloc(9);
buf4[0] = 0xe4;
buf4[1] = 0xb9;
buf4[2] = 0x96;
console.log(buf4.toString());