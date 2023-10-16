import { useNavigate } from "react-router"
import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../constantes/url"
import { useForm } from "./useForm";

export const useUserOperations = (initialForm, path) => {

    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [form, onChangeForm] = useForm(initialForm)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            navigate('/home')
        }
    }, [navigate])

    const handleSubmit = (event) =>{
        event.preventDefault()

        axios.post(`${base_url} ${path}`, form)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            setMessage(response.data.message)
            navigate('/home')
        })
        .catch(error => console.log(error))
    }

    return{
        form,
        onChangeForm,
        handleSubmit,
        message
    }
}