var express = require('express')
var router = express.Router();

router.get('/user', (req, res) => res.send('get user finsh......'))
router.post('/user', (req, res) => res.send('post user finsh......'))
router.put('/user', (req, res) => res.send('put user finsh......'))
router.delete('/user', (req, res) => res.send('delete user finsh......'))


router.get('/blog', (req, res) => res.send('get blog finsh......'))
router.post('/blog', (req, res) => res.send('post blog finsh......'))
router.put('/blog', (req, res) => res.send('put blog finsh......'))
router.delete('/blog', (req, res) => res.send('delete blog finsh......'))

module.exports = router