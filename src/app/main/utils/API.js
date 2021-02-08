import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';

export default axios.create({
    baseURL: "http://185.49.68.101/api/",
    responseType: "json",
    proxy: {
        host: proxy
    }
});