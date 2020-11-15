const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./config/db/index");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
// app.set("views", "views")
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
db.connect();

const userRouter = require("./Routes/User");
app.use("/user", userRouter);
app.listen(PORT, () => console.log("App is listening"));
