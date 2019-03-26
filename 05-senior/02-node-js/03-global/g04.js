// console.log(1);
// let timer1 = setTimeout(()=>{
// 	console.log(2)
// },2000)
// clearTimeout(timer1)
// console.log(3);


// console.log(1);
// let timer2 = setInterval(()=>{
// 	console.log(2)
// },2000)
// clearTimeout(timer2)
// console.log(3);

console.log(1);
let timer3 = setImmediate(()=>{
	console.log(2)
},2000)
clearTimeout(timer3);
console.log(3);