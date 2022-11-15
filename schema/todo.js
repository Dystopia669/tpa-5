const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema ({
    todo: String,
    detail: String,
}, 
{collection: "todo"}
);

module.exports = mongoose.model("todo", todoSchema)