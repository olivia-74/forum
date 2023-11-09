import { useNavigate } from "react-router"
import { useState } from "react";
import axios from "axios";
import { base_url } from "../constantes/url"
import { useForm } from "./useForm";

export const useData = (initialForm, path) => {

    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [form, onChangeForm] = useForm(initialForm)

    const handleSubmit = (event) =>{
        event.preventDefault()

        axios.post(`${base_url}${path}`, form)
        .then(response => {
            if(response.data.token){
                localStorage.setItem('token', response.data.token)
                setMessage(response.data.message)
                alert(response.data.message)
                navigate('/')
            } else if(response.data.message){
                setMessage("Usuario ja cadastrado")
            }
        })
        .catch(error => {
            if(error.response && error.response.status === 401){
                setMessage("Credenciais invalidas. Verifique seu email e senha")
            } else(
                setMessage("Erro desconhecido. Verifique a conexao com a API")
            )
        })
    }

    return{
        form: form,
        onChangeForm: onChangeForm,
        handleSubmit: handleSubmit,
        message: message
    }
}