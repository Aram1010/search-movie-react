import axios from "axios";

const base = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default base