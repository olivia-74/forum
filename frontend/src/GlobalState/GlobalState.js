import axios from "axios"
import { useState } from "react"
import { base_url } from "../constantes/url"
import { useEffect } from "react"
import {GlobalStateContext} from "./GlobalStateContext"

export const GlobalState = ({children}) => {
    let [forumTopics, setForumTopics] = useState([])
    const [selectedPostId, setSelectedPostId] = useState(null)

    function loadForumTopics(){
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: token
            }
        }

    
        axios.get(`${base_url}/post`, config)
        .then((response) => {
            setForumTopics(response.data)
        })
        .catch((error) => {
            console.error('Erro ao carregar topicos do forum', error)
        })
    }

    useEffect(() => {
        loadForumTopics()
    }, [])

    let states = {forumTopics}
    let setters = {setForumTopics}
    let requests = {loadForumTopics}


    return(
        <>
            <GlobalStateContext.Provider value={{states, setters, requests, selectedPostId, setSelectedPostId}}>
                {children}
            </GlobalStateContext.Provider>
        </>
    )
}