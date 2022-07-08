import React from "react";
import Card from "../ui/card";
const BlogItem =(props) => {
    return(
        <div>
            <li>
                <Card>
                   <h1>{props.blog_title}</h1>
                   <main>{props.blog_body}</main>
                   <p>{props.blog_author}</p>
                   <div><button>Delete</button></div>
                </Card>              
            </li>
        </div>
        
    )
};

export default BlogItem;