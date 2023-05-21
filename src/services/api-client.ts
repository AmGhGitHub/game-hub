import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"cafc27c876e44c1da4ceb1beb61a5584"
    }
})