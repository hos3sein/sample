const express = require('express');

const rooter = express.Router()




rooter.get('/' , (req , res)=>{
	res.render('index' ,  {title : 'home'});
})

rooter.get('/gpage2' , (req , res)=>{
	const content = {title : ' page2' , snipet: 'you can contact me!'}
	res.status(200).render('Page2' , content)
})


rooter.get('/mpr' , (req , res)=>{
	res.status(200).render('m_project' ,  {title : 'my projects'})
})


rooter.get('/mp' , (req , res)=>{
	res.status(200).render('m_profile' ,  {title : 'know me'})
})


rooter.get('/contactme' , (req , res)=>{
	res.status(200).render('contact-me' , {title:'contact' })
})

rooter.get('/projectR' , (req , res)=>{
	res.status(200).render('pregister' , {title : 'register-the-project'})
})


module.exports = rooter