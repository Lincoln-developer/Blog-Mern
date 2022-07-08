import React from "react";
import Card from "../ui/card";
import { useState} from "react";
import axios from "axios";
//import blogServices from "../services/blogs.js"
const NewBlogForm = ()=>{
    /*const [blogInfor, setBlogInfor] = useState({
        blog_title:"",
        blog_body:"",
        blog_author:""
    })*/

    /*const submitBlogHandler = (event) => {
        event.preventDefault();
        console.log(blogInfor)
        setBlogInfor({blog_title:"",blog_body:"",blog_author:""})
        const blogObject = {
            blog_title:event.target.blog_title,
            blog_body:event.target.blog_body,
            blog_author:event.target.blog_author
        }
    }*/
    /*const handleChange = (event)=>{
        setBlogInfor({...blogInfor,[event.target.name]:event.target.value})
    }*/
    /*useEffect(()=>{
        console.log("effect");
        axios
        .post('http://localhost:3100/api/v1/blogs')
        .then((response)=>{
            console.log("promise fulfilled")
            setBlogInfor(response.data)
        })

    }, [])*/
    const [blogInfor,setBlogInfor] = useState({
        blog_title:"",
        blog_body:"",
        blog_author:""
    })
    const postBlog = async event => {
        console.log(blogInfor)
        event.preventDefault();
        await axios
        .post(
            "http://localhost:3100/api/v1/blogs",
            {
                blog_title:blogInfor.blog_title,
                blog_body:blogInfor.blog_body,
                blog_author:blogInfor.blog_title
            }
        )
        .then(response =>{
            setBlogInfor(response.data)
        })
        setBlogInfor("")
    }
    const handleChange = event =>{
        setBlogInfor({...blogInfor,[event.target.name]:event.target.value});
    }
    return(
        <Card>
            <form onSubmit={postBlog}>
                <div>
                    <label htmlFor="blog_title">Title</label>
                    <input 
                    type='text'
                    id='blog_title'
                    placeholder="Enter title"
                    name="blog_title"
                    //value={blogInfor.blogTitle}
                    value={blogInfor.blog_title}
                    required
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="blog_body">Body</label>
                    <textarea 
                    id="blog_body"
                    placeholder="write your blog"
                    name="blog_body"
                    //value={blogInfor.blogBody}
                    value={blogInfor.blog_body}
                    rows='5'
                    required
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="blog_author">Author</label>
                    <input 
                    type='text'
                    id='blog_author'
                    placeholder="Author name"
                    //value={blogInfor.blogAuthor}
                    value={blogInfor.blog_author}
                    name="blog_author"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Add blog</button>
                </div>
            </form>
        </Card>
    )
};

export default NewBlogForm