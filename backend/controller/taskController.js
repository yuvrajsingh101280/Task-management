import Task from "../models/task.js";


export const createTask = async (req, res) => {
    const { title, description, dueDate, priority, status, tags } = req.body;

    try {
        if (!title || !dueDate) {
            return res.status(400).json({ success: false, message: "Title and due date are required" });
        }

        const task = new Task({
            title,
            description,
            dueDate,
            priority,
            status,
            tags,
            user: req.userId, // Use req.userId consistently
        });

        const savedTask = await task.save();

        return res.status(201).json({ success: true, message: "Task created successfully", savedTask });
    } catch (error) {
        console.log("Error in creating task:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const updateTask = async (req, res) => {
    // update the task

    try {

        const task = await Task.findById(req.params.id)
        if (!task) {

            return res.status(400).json({ success: false, message: "Task not found" })
        }


        // check if the logged in user is the owner of the task


        if (task.user.toString() !== req.userId) {


            return res.status(401).json({ success: false, message: "Unauthorized action" })

        }

        const updatedTask = await Task.findByIdAndUpdate(


            req.params.id, { ...req.body, updatedAt: Date.now() }, { new: true }

        )

        return res.status(200).json({ success: true, message: "Task updated successfully", updatedTask })

    } catch (error) {
        console.log("Error in updating task:--------   ", error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const getTasks = async (req, res) => {

    // get all the task 

    try {
        const gettasks = await Task.find({ user: req.userId }).sort({ dueDate: 1 })

        return res.status(200).json({ sucess: true, gettasks })
    } catch (error) {
        console.log("Error in getting tasks", error)
        res.status(500).json({ success: false, message: "Internal server error" })


    }

}
export const deleteTask = async (req, res) => {

    try {
        const task = await Task.findById(req.params.id)

        if (!task) {

            return res.status(400).json({ success: false, message: "Task not found" })



        }

        // check if the logged in user is the owner of the task

        if (task.user.toString() !== req.userId) {

            return res.status(401).json({ succees: false, message: "Unauthorized action" })

        }

        await Task.findByIdAndDelete(req.params.id)

        return res.status(200).json({ success: false, messsage: "Task deleted successfully" })
    } catch (error) {

    }

}