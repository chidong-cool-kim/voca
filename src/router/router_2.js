
const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken');
const html_main = require("./react/voca/public/index.html")



const goods = {
    get : [asyncHandler(async(req,res)=>{
        res.sendFile(html_goods)
    })],

    put : asyncHandler(async(req,res) => {
        res.status(200).send("put")
    }),
    
     post : asyncHandler(async(req,res) => {
        console.log("delete the token")
        res.clearCookie("token")
        res.redirect("/start")
    }),
     
     delete : asyncHandler(async(req,res) => {
        console.log("delete the token")
        res.clearCookie("token")
        res.redirect("/start")
     })}

const main = {
    get : [asyncHandler(async(req,res)=>{
        res.sendFile(html_main)
    })],
        
    put : asyncHandler(async(req,res) => {
            res.status(200).send("put")
    }),
        
    post : asyncHandler(async(req,res) => {
        console.log("delete the token")
    })
}

const login = {
    get : asyncHandler(async(req,res)=>{
        res.sendFile(html_login)
    }),
        
    put : asyncHandler(async(req,res) => {
        res.status(200).send("put")
    }),
        
    post : asyncHandler(async(req,res) => {

        console.log(req.body)

        const {name, classnum, number, password} = req.body

        const contact1 = await Login.findOne({name});
        
        console.log(contact1)
        
        if (contact1) {
            if (contact1.name === name && contact1.classnum === classnum && contact1.number === number && contact1.password === password) {
                const token = jwt.sign({id: contact1.id}, process.env.JWT_SECRET);
                res.cookie("token", token, {httpOnly: true})
                res.redirect("/teacher")
            } else {
                res.status(401).sendFile(html_error)
            }
        } else {
            res.status(401).sendFile(html_error);
        }        
    }),
         
    delete : asyncHandler(async(req,res) => {   
        res.status(200).send("delete")
    })}

    
const sign = {
    get : asyncHandler(async(req,res)=>{
        res.sendFile(html_sign)
    }),
        
    put : asyncHandler(async(req,res) => {
        res.status(200).send("put")
    }),
        
    post : asyncHandler(async(req,res) => {
        console.log(req.body)
    
        const {name,classnum,number,password} = req.body;
        
        if (!name || !classnum || !number || !password) {
           return res.status(400).sendFile(html_error)
        }
    
        if (typeof name !== 'string') {
          return res.status(400).sendFile(html_error)
        }
    
        if (typeof number !== 'string') {
          return res.status(400).sendFile(html_error)
        }
    
        if (typeof classnum !== 'string') {
          return res.status(400).sendFile(html_error)
        }
        
        if (typeof password !== 'string') {
          return res.status(400).sendFile(html_error)
        }
        
        await Login.create({name, classnum, number, password})
        res.status(201).redirect('/start')
     }),
         
    delete : asyncHandler(async(req,res) => {
        res.status(200).send("delete")
    })}





module.exports = {main, goods, login, sign}
