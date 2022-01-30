const express = require("express");
require("../src/db/conn");
const menRouter = require("../src/routers/men.router");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(menRouter);

// listen server

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
