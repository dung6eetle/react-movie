
import * as Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://api.themoviedb.org/`,
    headers: { "API-KEY": "5244641d-cf75-402c-bbdb-0144979168bb" }
})