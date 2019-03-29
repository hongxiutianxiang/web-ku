const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('get finsh......'))
app.post('/', (req, res) => res.send('post finsh......'))
app.put('/', (req, res) => res.send('put finsh......'))
app.delete('/', (req, res) => res.send('delete finsh......'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))