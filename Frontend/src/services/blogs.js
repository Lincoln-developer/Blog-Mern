import axios from "axios";
const blogsBaseUrl = "http://localhost:3100/api/v1/blogs"
const UserAccountBaseUrl = "http://localhost:3100/api/v1/users"


const getAllBlogs = () => {
    return axios.get(blogsBaseUrl);
};

const createBlogPost = (newObject) => {
    return axios.post(blogsBaseUrl, newObject)
};

const updateBlogPost = (id, newObject) => {
    return axios.put(`${blogsBaseUrl}/${id}`, newObject)
}

const createUserAccount = () => {
    return axios.post(UserAccountBaseUrl)
}

const loginToUserAccount = () => {
    return axios.post(UserAccountBaseUrl)
}
export default {
    getAllBlogs:getAllBlogs,
    createBlogPost:createBlogPost,
    updateBlogPost:updateBlogPost
}