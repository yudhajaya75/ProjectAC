import axios from "axios";


const HTTPHandler = axios.create({
    baseURL: process.env.REACT_APP_UPLOAD_URL,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
    },

});

export default HTTPHandler;