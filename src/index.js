const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// Server init
const app = express();
const port = process.env.PORT;

// Routers
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Server up
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
