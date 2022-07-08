import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/form">BlogForm</Link></li>
                    <li ><Link to="/login">login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;