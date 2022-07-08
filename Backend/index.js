//import express from "express";
import "dotenv/config"
//import Eslintrc from "./.eslintrc.js";
import app from "./app.js";
import cors from "cors"
import loginRoute from "./views/blogs/Users/login.views.js"
import connect_db from "./config/database.js";
import Users from "./views/blogs/Users/users.views.js";
import Blogs from "./views/blogs/blogs.views.js";
//import testRunner from "./tests/blog.test.js"
import requestLogger from "./middlewares/logger.js";
//import unKnownEndPoint from "./middlewares/unKnownEndPoint.js";
import errorHandler from "./middlewares/error.handler.js";
//import testHandler from "supertest";
//const app = express();
//app.use(testHandler)
//Allowing data in json format

//Allowing cross-origin-resource-sharing across different domains
app.use(cors())
//Allowing in coming data from the client

app.use(requestLogger)
//app.use(unKnownEndPoint)
app.use(errorHandler)
//Route handlers
app.use("/api/v1/blogs",Blogs);
app.use("/api/v1/users", Users)
app.use("/api/v1/users/accounts/login",loginRoute)


//Establishing port on which our local server is running
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    //Event listener attached to connection variable to check success connecting to database
     connect_db.once("open", () => console.log("Database Connected Successfully"));

     //Event listener attached to connection variable to check error connecting to database
    connect_db.on("error", () => console.log("Error Connecting Database"));
})
