import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import axios from "axios";

const ClientDetails = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});
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

    const handleRetour = () => {
        navigate("/clients");
    }

    return (
        <div>
            <center>
                <h1>Détails du client</h1>
                <p><strong>Identifiant :</strong> {client.id}</p>
                <p><strong>Nom :</strong> {client.nom}</p>
                <p><strong>Adresse :</strong> {client.adresse}</p>
                <p><strong>Téléphone :</strong> {client.tel}</p>
                <button onClick={handleRetour}>Retour à la liste des clients</button>
            </center>
        </div>
    )
}

export default ClientDetails