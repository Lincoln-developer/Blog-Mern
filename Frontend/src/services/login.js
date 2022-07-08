import axios from "axios";
import config from "../context/useToken"
const baseUrl = "http://localhost:27017/api/v1/users/accounts/login";

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials, config);
    return response.data
};

export default {login};