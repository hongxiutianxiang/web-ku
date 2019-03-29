const express = require('express')
const app = express()
const port = 3000

app.use((res,req,next)=>{
	console.log("A1");
	next();
	console.log("A2");
})
app.use((res,req,next)=>{
	console.log("B1");
	next();
	console.log("B2");
})
app.use((res,req,next)=>{
	console.log("C1");
	next();
	console.log("C2");
})
/*
A1
B1
C1
C2
B2
A2
*/
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))











