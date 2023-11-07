import axios from "axios"
import { base_url } from "../constantes/url"

export const getPostsAll = (salvarPosts) => {
    axios.get(`${base_url}/post/all`)
    .then((response) => {
        salvarPosts(response.data)
    })
    .catch((err) => {console.log(err)})
}