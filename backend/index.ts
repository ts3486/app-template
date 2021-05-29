const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const app = express();

//allow cors
app.use(cors());
//allows us to post raw json data 
app.use(express.json());

//Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

//PORT Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("MA Server started at port " + PORT);})
