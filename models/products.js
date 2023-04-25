const mongoose=require('mongoose')

const productSchema= mongoose.Schema({
    productName:String,
    productDesc:String,
    amount:Number
})




module.exports=mongoose.model('products',productSchema)