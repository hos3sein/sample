const BLOG = require("../views/database.js");



const saveuser = (req , res)=>{
    const b = new BLOG(
		req.body
		)
	b.save()
	.then((resault) => res.redirect('contactme'))
	.catch((err) => console.log(err))
}


const saveidea = (req , res)=>{
    const b2 = new BLOG(
		req.body
	)

	b2.save()
	.then((resault)=> {
		res.redirect('mpr')})
	.catch((err)=>(err))
}



module.exports = {
    saveuser,
    saveidea
}