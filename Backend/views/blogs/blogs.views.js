import express from "express";
import {
    createBlog,getAllBlogPosts,
    getSingleBlog,updateBlogPost,
    deleteSingleBlogPost
} from "../../controllers/blogs.controller.js"
const router = express.Router();

/***
 *@method:"POST,GET,PATCH,DELETE"
 *@description:
 "Here these http methods will add a new blog post, get a single blog post, change 
 the contents of a blog post and delete a blog post
 "
 */

//Getting all blog posts
router.route("/").get(getAllBlogPosts);

//Getting a single blog post
router.route("/:blog").get(getSingleBlog);

//Creating a blog
router.route("/").post(createBlog);

//Changing the content of a blog post
router.route("/:blog").patch(updateBlogPost);

//Deleting a single blog post
router.route("/:blog").delete(deleteSingleBlogPost)

export default router
