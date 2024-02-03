require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = 3000;
const adminRouter = require("./Routes/admin");
const connection = require("./db");

connection();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/admin", adminRouter)
// app.use("/editor", editorRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});