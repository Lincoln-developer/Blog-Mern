import BlogItem from "./blog_item";
import React from "react";
const BlogList = (props) => {
    return(
        <div>
            <ul>
                {props.blogs.map(blog =>
                <BlogItem 
                key={blog.id}
                blog_title={blog.blog_title}
                blog_body={blog.blog_body}
                blog_author={blog.blog_author}
                />)}
            </ul>
        </div>
    )
};

export default BlogList;