const express = require("express");
const studentRouter = require("./routers/student");
// db
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
// student router
app.use(studentRouter);

// listen server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
