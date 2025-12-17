import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
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

    const handleRetour = () => {
        navigate("/clients");
    }

    return (
        <div>
            <h1>Modifier le client</h1>
        </div>
    );
}

export default UpdateClient