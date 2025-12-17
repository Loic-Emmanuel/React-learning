import { useEffect, useState } from "react";
import { useNavigation, useParams, replace } from "react-router-dom";
import axios from "axios";

const UpdateClient = () => {
    const { id } = useParams();
    const [client, setClient] = useState({nom: "", adresse: "", tel: ""});
    const navigate = useNavigation();

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/clients/${id}`);
                setClient(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du client :", error);
            }
        };

        fetchClient();
    }, [id]);

    const handleUpdate = async () => {
        await axios.put(`http://localhost:3001/clients/${id}`, client);
        navigate("/clients", { replace: true });
    };

    return (
        <div>
            <h1>Modifier le client</h1>
            <form>
                <label>Nom du client : </label>
                <input 
                    type="text" 
                    value={ client.nom }
                    onChange={(e) => setClient({ ...client, nom: e.target.value })}
                />
                <br/>
                <label>Adresse du client : </label>
                <input 
                    type="text" 
                    value={ client.adresse }
                    onChange={(e) => setClient({ ...client, adresse: e.target.value })}
                />
                <br/>
                <label>Téléphone du client : </label>
                <input 
                    type="tel" 
                    value={ client.tel }
                    onChange={(e) => setClient({ ...client, tel: e.target.value })}
                />
                <br/>
            </form>

            <button onClick={handleUpdate}>
                Mettre à jour
            </button>
        </div>
    );
}

export default UpdateClient