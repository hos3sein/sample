const express = require('express');
const rooter = express.Router()
const control = require ( '../controler/controler')




rooter.post('/blog' , control.saveuser)
	
rooter.post('/savep' , control.saveidea )


module.exports = rooter