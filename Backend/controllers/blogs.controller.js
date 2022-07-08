import Blog from "../models/blogs/blog.model.js";
import  StatusCodes from "http-status-codes";
//import {NotFound_Error,Bad_Request_Error} from "../errors/index.error.js"

//Creating a blog post
const createBlog = async(req, res) => {
    try{
         req.body.createdBy = req.user.userId
        const {blog_title,blog_body} = req.body;
        const blog = await Blog.create({blog_title,blog_body})
        .then(blogItem => {
            return res.status(StatusCodes.CREATED).json({
                blogPost:blogItem,
                message:"Blog saved to database"
            })
        })
    }catch(error){
        return res.status(500).json({
            message:"Error, created blog not saved to database"
        })
    }
};
//fetching all blog posts
const getAllBlogPosts = async(req, res) => {
    try{
        const allBlogs = await Blog.find()
        return res.status(200).json(allBlogs);
    }catch(error){
        res.status(500).json({
            message:"Can not fetch created blogs"
        })
    }
};
//fetching single blog
const getSingleBlog = async(req, res) => {
    try{
        const blogId = req.params.blog;
        const singleBlog = await Blog.findById(blogId);
        return res.status(200).json(singleBlog)
    }catch(error){
        res.status(500).json({
            message:"Can not fetch single blog. error"
        })
    }
};
//updating single blog post
const updateBlogPost = async(req,res) => {
    try{
        const blogId = req.params.blog;
        const updateBlog = await Blog.findByIdAndUpdate(blogId);
        return res.status(200).json(updateBlog)
    }catch(error){
        res.status(500).json({
            message:"Error updating blog post"
        })
    }
};
//deleting a single blog post
const deleteSingleBlogPost = async(req,res) => {
    try{
        const blogId = req.params.blog;
        const deleteBlog = await Blog.findByIdAndDelete(blogId);
        return res.status(200).json(deleteBlog);
    }catch(error){
        res.status(500).json({
            message:"error deleting blog post"
        })
    }
}

export  {
    createBlog,
    getAllBlogPosts,
    getSingleBlog,
    updateBlogPost,
    deleteSingleBlogPost
}