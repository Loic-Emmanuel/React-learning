import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

const ClientsList = () => {
    const [clients, setClients] = useState([]);

    const fetchData = async () => {
        const reponse = await axios.get("http://localhost:3001/clients");
        setClients(reponse.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await axios.detele(`http://localhost:3001/clients/${id}`);
        fetchData();
    }

    return (
        <div>
            <center>
                <h1>Liste des clients</h1>
                <Link to={`clients/create`}>
                    Ajouter
                </Link>
                <br />
                <br />

                <table style={{ border: "1px solid black" }}>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Nom client</th>
                            <th>Adresse</th>
                            <th>Téléphone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>
                                    <Link to={`/clients/${client.id}`}>{client.nom}</Link>
                                </td>
                                <td>{client.adresse}</td>
                                <td>{client.tel}</td>
                                <td>
                                    <Link to={`clients/${client.id}/update`}>
                                        <button>Modifier</button>
                                    </Link>

                                    <button onClick={() => handleDelete(client.id)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default ClientsList;