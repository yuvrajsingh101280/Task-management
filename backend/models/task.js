import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({

    title: {

        type: String,
        required: true,
        trim: true,
        maxlength: 100,

    },
    description: {

        type: String,
        trim: true,
        maxlength: 500,

    },

    dueDate: {

        type: Date,
        required: true
    },

    priority: {

        type: String,
        enum: ["Low", "Medium", "High", "Critical"],
        default: "Low",
    },
    status: {

        type: String,
        enum: ["To Do", "In progress", "Completed", "Archived"],
        default: "To Do",

    },
    user: {

        type: mongoose.Schema.Types.objectId,
        ref: "User",
        required: true,
    },

    tags: [// it is for the tag associated like "work", "personal", "shopping" etc

        { type: String, },

    ],

    createdAt: {
        type: Date,
        default: Date.now,


    },


    updatedAt: {

        type: Date,
        default: Date.now,
    }



}, { timestamps: true })
const task = mongoose.model("Task", taskSchema)
export default task