const router= require('express').Router()
const products=require('../models/products')
const Reg=require('../models/reg')
//http://localhost:5000/api
router.get('/',async(req,res)=>{
    try{
    const productrecord= await products.find()
    res.status(200).json(productrecord)
    }catch(error){
    res.status(500).json({message:error.message})
    }
})

router.post('/',(req,res)=>{
   //console.log(req.body)
    const {name,desc,price}=req.body
    const productrecord=new products({productName:name,productDesc:desc,amount:price})
   try{
    productrecord.save()
    res.status(201).json(productrecord)
   }
   catch(error){
    res.status(400).json({message:error.message})
   }
})


router.get('/:id',async(req,res)=>{
    const id= req.params.id
    try{
   const productREcord=await products.findById(id)
res.json(productREcord)
    }catch(error){
        res.json({message:error.message})
    }
})


router.put('/:id',async(req,res)=>{
   const{name,desc,price}=req.body
   const id=req.params.id
   try{
   await Products.findByIdAndUpdate(id,{productName:name,productDesc:desc,amount:price})
  res.json({message:"successfully Updated"})
   }catch(error){
    res.json({message:error.message})
   }
})


router.post('/login',async(req,res)=>{
    const{username,password}=req.body
   const regrecord=  await Reg.findOne({username:username})
   if(regrecord!==null){
   if(regrecord.password==password){
    res.json(regrecord)
   }else{
    res.json({message:"wrong credentails"})
   }
   }else{
    res.json({message:"wrong credentails"})
   }
})

router.delete('/:id',async(req,res)=>{
    const id=req.params.id
    try{
     await products.findByIdAndDelete(id)
     res.status(200).json({message:"Successfully Deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


module.exports=router
