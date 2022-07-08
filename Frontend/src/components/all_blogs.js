import React from "react";
import BlogList from "./blog_list";
//import BlogForm from "./blog-form";
//import axios from "axios";
import { useState,useEffect } from "react";
import axios from "axios";

/*const dummy_data = [
    {
        "id":"m1",
        "blog_title":"Building Single Page Applications with React.Js",
        "blog_body":"React.Js is a frontend library developed by Facebook for building SPAs",
        "blog_author":"Lincoln_dev"
    },
    {
        "id":"m2",
        "blog_title":"Building web applications with the MERN-stack",
        "blog_body":"The MERN_stack is one of the popular stacks for building both frontend and backend",
        "blog_author":"angLincoln"
    }
]*/
const AllBlogs = () => {
    /*const [isLoading,setIsLoading] = useState(true)
    const [postedBlogs, setPostedBlogs] = useState([]);
    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(
            'http://localhost:3100/api/v1/blogs'
        )
        .then(response => {
            return response.json()
        })
        .then((data) => {
            const blogs = []
                for(const key in data){
                    const blog = {
                        id:key,
                        ...data[key]
                    }
                    blogs.push(blog)
                }
                setIsLoading(false)
                setPostedBlogs(blogs)
        })
    
    },[]);
    if(isLoading){
        return <section>
            <p>loading.......</p>
        </section>
    }*/
    const [blogs, setBlogs] = useState([])
    const url = "http://localhost:3100/api/v1/blogs"
    useEffect(() => {
        axios.get(url)
        .then(res => setBlogs(res.data))
        .catch(err => console.log(err))
    })
    return(
        <div>
            <div>
                <h1>Blogs</h1>
                <div>
                  <BlogList blogs={blogs}/>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;