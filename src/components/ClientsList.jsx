import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

const ClientsList = () => {
    const [clients, setClients] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/clients`);
            setClients(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des clients :", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer ce client ?")) {
            try {
                await axios.delete(`${API_URL}/clients/${id}`);
                fetchData();
            } catch (error) {
                console.error("Erreur lors de la suppression :", error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">
                    <i className="fa-solid fa-users me-2 text-primary"></i>
                    Liste des clients
                </h2>

                <Link to="/clients/create" className="btn btn-success btn-sm">
                    <i className="fa-solid fa-plus me-1"></i>
                    Ajouter
                </Link>
            </div>

            <div className="table-responsive shadow-sm rounded">
                <table className="table table-hover align-middle text-center mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Adresse</th>
                            <th>Téléphone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {clients.length > 0 ? (
                            clients.map((client, index) => (
                                <tr key={client.id}>
                                    <td className="fw-semibold">{index + 1}</td>

                                    <td>
                                        <Link
                                            to={`/clients/${client.id}`}
                                            className="text-decoration-none fw-semibold"
                                        >
                                            {client.nom}
                                        </Link>
                                    </td>

                                    <td className="text-muted">{client.adresse}</td>

                                    <td>
                                        <span className="badge bg-secondary">
                                            {client.tel}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="d-flex justify-content-center gap-2">
                                            <Link
                                                to={`/clients/${client.id}/update`}
                                                className="btn btn-outline-primary btn-sm"
                                            >
                                                Modifier
                                            </Link>

                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => handleDelete(client.id)}
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-muted py-4">
                                    Aucun client trouvé
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientsList;
