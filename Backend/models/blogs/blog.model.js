import Mongoose from "mongoose";

//Defining the data structure the blog  is to have
const blogSchema = new Mongoose.Schema({
    blog_title:{
        type:String,
        required:[true, "Blog title can not be missing"]
    },
    blog_body:{
        type:String,
        required:[true, "Blog_body can not be missing"]
    },
    createdBy:{
        type:Mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "Please provide author name"]
    }
}, {collection:"Blog_Notes_Storage"},{timestamps:true});

blogSchema.set('toJSON', {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    
    }
})

const Blog = Mongoose.model("Blog", blogSchema);

export default Blog;