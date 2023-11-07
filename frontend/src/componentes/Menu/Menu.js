import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { useContext } from "react"



const Menu = () => {

    const navigate = useNavigate()
    const {selectedPostId, setSelectedPostId} = useContext(GlobalStateContext)

    return(
        <>
            <input
                type="text"
                value={selectedPostId}
                onChange={(e) => setSelectedPostId(e.target.value)}
            />
            <h3>Menu</h3>
            <button onClick={() => navigate('/')}>Feed</button>
            <button onClick={() => navigate('/criarPost')}>Criar</button>

            <button>postar</button>
        </>
    )
}

export default Menu