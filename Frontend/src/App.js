import React from "react";
import{Route,Routes} from "react-router-dom";
import BlogForm from "./components/blog-form";
//import Footer from "./components/footer";
import AllBlogs from "./components/all_blogs";
import Login from "./components/Login";
import SignUpForm from "./components/SignUp";
import LayOut from "./layout/Layout";
import Class from "./styles/nav.module.css";
//import useToken from "./context/useToken";


function App() {
  /*const {token, setToken} = useToken()
  if(!token){
    return <Login setToken={setToken}/>
  }*/
  return (
    <div>
      <header className={Class.header}>
        <h1>WorldFlare</h1>
        <LayOut>
          <Routes>
            <Route exact path="/form" element={<BlogForm/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/blogs" element={<AllBlogs/>}/>
          </Routes>
        </LayOut>
      </header>
      <main>
      </main>
    </div>
  );
}


export default App;
