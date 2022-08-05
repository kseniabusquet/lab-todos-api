import mongoose from "mongoose";

const {Schema, model} = mongoose

/**
 * title - Type String. It should be required.
 *completed - Type Boolean, should have default false
 *timestamps - use, timstamps config of mongoose
 */

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
}, 

    {timestamps: true}
)

const Todo = model("Todo", todoSchema)

export default Todo