
const crypto = require('crypto')
//1.根据算法生成hash对象
// const hash = crpto.createHash('md5')
//2.添加明文
// hash.updte('aaaa')
//3.生成密文
// hash.digest('hex')

//1.根据算法生成hmac对象
// const hmac = crypto.createHmac('sha256','rgpapgrk');
//2.添加明文
// hmac.updte('aaaa')
//3.生成密文
// hmac.digest('hex')

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512','rgpapgrk');
	hmac.update(str)
	return hmac.digest('hex')
}





