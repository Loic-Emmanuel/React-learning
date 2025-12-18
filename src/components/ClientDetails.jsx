import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ClientDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [client, setClient] = useState(null);

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/clients/${id}`
                );
                setClient(response.data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des détails du client :",
                    error
                );
            }
        };

        fetchClient();
    }, [id]);

    if (!client) {
        return (
            <div className="text-center mt-5">
                <i className="fa-solid fa-spinner fa-spin fa-2x text-primary"></i>
                <p className="mt-2 text-muted">Chargement des données...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="text-center fw-bold mb-4">
                                <i className="fa-solid fa-id-card text-info me-2"></i>
                                Détails du client
                            </h3>

                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">
                                    <strong>
                                        <i className="fa-solid fa-hashtag me-2 text-secondary"></i>
                                        Identifiant :
                                    </strong>
                                    <span className="ms-2">{client.id}</span>
                                </li>

                                <li className="list-group-item">
                                    <strong>
                                        <i className="fa-solid fa-user me-2 text-secondary"></i>
                                        Nom :
                                    </strong>
                                    <span className="ms-2">{client.nom}</span>
                                </li>

                                <li className="list-group-item">
                                    <strong>
                                        <i className="fa-solid fa-location-dot me-2 text-secondary"></i>
                                        Adresse :
                                    </strong>
                                    <span className="ms-2">{client.adresse}</span>
                                </li>

                                <li className="list-group-item">
                                    <strong>
                                        <i className="fa-solid fa-phone me-2 text-secondary"></i>
                                        Téléphone :
                                    </strong>
                                    <span className="ms-2">{client.tel}</span>
                                </li>
                            </ul>

                            <div className="d-flex justify-content-between">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => navigate("/clients")}
                                >
                                    <i className="fa-solid fa-arrow-left me-1"></i>
                                    Retour
                                </button>

                                <button
                                    className="btn btn-primary"
                                    onClick={() =>
                                        navigate(`/clients/${client.id}/update`)
                                    }
                                >
                                    <i className="fa-solid fa-pen me-1"></i>
                                    Modifier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;