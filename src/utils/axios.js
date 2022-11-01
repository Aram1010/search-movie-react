import axios from "axios";

const base = axios.create({
    baseURL: "http://www.omdbapi.com",
});

export default base