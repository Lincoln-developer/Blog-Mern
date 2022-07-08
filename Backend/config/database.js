import Mongoose from "mongoose";

//Database_Url
//const DATABASE_URL = "mongodb://localhost:27017/Blog_Notes";

//Establishing a mongoose connection to the database url
Mongoose.connect(process.env.DATABASE_URL,(error) => {
    return error
});

const connect_db = Mongoose.connection;

export default connect_db;

