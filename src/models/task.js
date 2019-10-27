const mongoose = require("mongoose");

//
// Task
//

// Schema
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }
);

// // Middleware
// taskSchema.pre("save", async function(next) {
//   const task = this;
//   console.log("task middle");
//   next();
// });

// Model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
