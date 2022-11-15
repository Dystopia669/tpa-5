const express = require("express")
const router = express.Router() 
const mongoose = require("mongoose")
const userSchema = require("../schema/user")
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")


router.post("/register", async (req, res) => {
    const { username, password } = req.body
     
    try {
        const hash = await bcrypt.hash(password, 10);
        const data = await userSchema.create({
            username : username,
            password : hash
        })

        if(data){
            res.send(data)
        }else {
            res.send("error")
        }
        } catch (error) {
            res.send(error)
        }
})

router.post("/login", async (req,res) => {
    const { username, password } = req.body
    
    try {
        const checkUsername = await userSchema.findOne({
            username: username
        })

        if(checkUsername){
            const checkPassword = await bcrypt.compare(password, checkUsername.password)

            if(checkPassword){
                const token = jsonwebtoken.sign ({
                    username: checkUsername.username
                },
                process.env.jwt_key
                )
                res.send(token)
            }
            else{
                res.send("wrong password")
            }
        }
        else {
            res.send("wrong username")
        }
        
    } catch (error) {
        res.send("account not found")
    }
})

module.exports = router