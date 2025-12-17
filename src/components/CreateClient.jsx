import { Axios } from "axios";
import { useState } from "react"
import { replace, useNavigate } from "react-router-dom";

const CreateClient = () => {
    const [client, setClient] = useState({ nom: "", adresse: "", tel: "" });
    const navigate = useNavigate();

    const handleCreate = async () => {
        await Axios.post("http://localhost:3001/clients", client);
        navigate("/client", { replace: true })
    }

    return (
        <div>
            <center>
                <h1>Créer un nouveau client</h1>
                <form>
                    <label>Nom du client : </label>
                    <input 
                        type="text" 
                        value={ client.nom }
                        onClick={(e) => setClient({ ...client, nom: e.target.value })}
                    />
                    <br/>

                    <label>Adresse du client : </label>
                    <input 
                        type="text" 
                        value={ client.adresse }
                        onClick={(e) => setClient({ ...client, adresse: e.target.value })}
                    />
                    <br/>

                    <label>Tel du client : </label>
                    <input 
                        type="tel" 
                        value={ client.tel }
                        onClick={(e) => setClient({ ...client, tel: e.target.value })}
                    />
                    <br/>

                    <button onClick={handleCreate}>
                        Créer
                    </button>
                </form>
            </center>
        </div>
    )
}

export default CreateClient