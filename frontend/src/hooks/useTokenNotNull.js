import {useEffect} from "react";
import {useNavigate} from "react-router-dom"

export const useTokenNotNull = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token !== null)
            navigate('/home')
    }, [navigate])
}

// tem token (login) -> home