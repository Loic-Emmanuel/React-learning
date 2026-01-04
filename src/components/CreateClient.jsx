import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000/api";

const CreateClient = () => {
    const [client, setClient] = useState({
        nom: "",
        adresse: "",
        tel: ""
    });

    const navigate = useNavigate();

    const handleCreate = async (e) => {
        e.preventDefault();

        await axios.post(`${API_URL}/clients`, client);
        navigate("/clients", { replace: true });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="text-center mb-4 fw-bold">
                                <i className="fa-solid fa-user-plus me-2 text-success"></i>
                                Nouveau client
                            </h3>

                            <form onSubmit={handleCreate}>
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
                                            placeholder="Nom du client"
                                            value={client.nom}
                                            onChange={(e) =>
                                                setClient({ ...client, nom: e.target.value })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

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
                                            placeholder="Adresse du client"
                                            value={client.adresse}
                                            onChange={(e) =>
                                                setClient({ ...client, adresse: e.target.value })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

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
                                            placeholder="Numéro de téléphone"
                                            value={client.tel}
                                            onChange={(e) =>
                                                setClient({ ...client, tel: e.target.value })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        <i className="fa-solid fa-check me-1"></i>
                                        Créer
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => navigate("/clients")}
                                    >
                                        <i className="fa-solid fa-arrow-left me-1"></i>
                                        Annuler
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

export default CreateClient;
