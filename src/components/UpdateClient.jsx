import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateClient = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [client, setClient] = useState({
        nom: "",
        adresse: "",
        tel: ""
    });

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/clients/${id}`
                );
                setClient(response.data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération du client :", error
                );
            }
        };

        fetchClient();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:3001/clients/${id}`, client);
        navigate("/clients", { replace: true });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="text-center fw-bold mb-4">
                                <i className="fa-solid fa-user-pen text-primary me-2"></i>
                                Modifier le client
                            </h3>

                            <form onSubmit={handleUpdate}>
                                {/* Nom */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Nom du client
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-user"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={client.nom}
                                            onChange={(e) =>
                                                setClient({
                                                    ...client,
                                                    nom: e.target.value
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Adresse */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Adresse
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={client.adresse}
                                            onChange={(e) =>
                                                setClient({
                                                    ...client,
                                                    adresse: e.target.value
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Téléphone */}
                                <div className="mb-4">
                                    <label className="form-label">
                                        Téléphone
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            value={client.tel}
                                            onChange={(e) =>
                                                setClient({
                                                    ...client,
                                                    tel: e.target.value
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        <i className="fa-solid fa-save me-1"></i>
                                        Mettre à jour
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => navigate("/clients")}
                                    >
                                        <i className="fa-solid fa-arrow-left me-1"></i>
                                        Retour
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateClient;