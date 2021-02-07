import axios from "axios";

export default axios.create({
    baseURL: "http://185.49.68.101/api/",
    responseType: "json"
});