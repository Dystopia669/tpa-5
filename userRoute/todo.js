const express = require("express")
const router = express.Router() 
const mongoose = require("mongoose")
const todo = require("../schema/todo")
const todoSchema = require("../schema/todo")
const validationToken = require("../validationToken/validationToken")

// membuat Todo
router.post("/createTodo", validationToken, async (req, res) => {
    const {judulTodo, detailTodo} = req.body

    try {
        const data = await todoSchema.create({
            todo : judulTodo,
            detail : detailTodo
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
// menampilkan semua Todo
router.get("/getTodo", (req, res) => {
    todo.find({}, function (error, todoSchema) {
        if(error){
            res.send("error")
            next;
        }
        res.json(todoSchema)
    })
})
// menampilkan todo berdasarkan id
router.get("/getTodo/:id", async (req, res) => {
    try {
        const getTodoById = await todoSchema.findById(req.params.id)
        .then(doc => {
            if(doc){
                return res.status(200).json({doc})
                res.send(getTodoById)
            }else {
                return res.status(404)
            }
        })
        
    } catch (error) {
        res.send(error)
    }
})
// mengubah todo
router.put("/updateTodo", async (req, res) =>{
    res.send("cek update todo")
})

module.exports = router