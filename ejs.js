const express = require('express');
const app = express();
const BLOG = require("./views/database.js");
const simplerout = require('./routin/simplerout')
const databaserout = require('./routin/databaseroute')



app.listen(3000);
app.set('view engine' , 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


// routing 
app.use(simplerout)
app.use(databaserout)


// 404 error 
app.use((req , res)=>{
	res.status(200).render('4_0_4_page' ,  {title : 'oops!'})
})