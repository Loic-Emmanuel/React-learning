# Project Structure

Ce projet utilise une architecture basée sur des composants avec la structure suivante :

src/components/ - Tous les composants React

src/App.jsx - Composant principal de l'application

Côté backend :

app/Http/Controllers/Api/ - Contrôleurs API Laravel

routes/api.php - Routes API

app/Models/Client.php - Modèle Client (avec $fillable)

database/migrations/ - Migrations pour la base de données

Technologies Utilisées

Frontend : React (v19+), Vite, React Router, Axios, Bootstrap

Backend : Laravel 12 (API REST)

Base de données : MySQL / SQLite

Comment Démarrer
Backend (Laravel)

Installer les dépendances Laravel :

# composer install


Configurer le fichier .env pour la base de données

Migrer la base de données :

php artisan migrate


Démarrer le serveur Laravel :

php artisan serve


Le backend sera disponible sur :

http://localhost:8000

Frontend (React)

Installer les dépendances :

npm install


Démarrer l'application React :

npm run dev


Le frontend sera disponible sur :

http://localhost:5173

Structure des Composants React

ClientsList.jsx : Liste des clients avec options de suppression et de modification

ClientDetails.jsx : Affichage détaillé d'un client

CreateClient.jsx : Formulaire pour créer un nouveau client

UpdateClient.jsx : Formulaire pour modifier un client existant

API Laravel

Les routes API principales (dans routes/api.php) :

Route::apiResource('clients', ClientController::class);


Endpoints disponibles :

Méthode	URL	Description
GET	/api/clients	Liste de tous les clients
POST	/api/clients	Créer un nouveau client
GET	/api/clients/{id}	Détails d’un client
PUT	/api/clients/{id}	Mettre à jour un client
DELETE	/api/clients/{id}	Supprimer un client
Fonctionnalités Principales

Liste des clients : Affichage de tous les clients avec recherche et navigation

Détails client : Vue détaillée d'un client avec toutes ses informations

Création client : Formulaire complet avec validation Laravel côté backend

Modification client : Formulaire de modification avec validation

Suppression client : Confirmation avant suppression et message de succès

Bonnes Pratiques

Tous les appels API React utilisent Axios avec une base URL centralisée :

const API_URL = "http://localhost:8000/api";


Les champs de la base de données sont configurés avec $fillable dans le modèle pour éviter les erreurs de mass assignment

class Client extends Model {
    protected $fillable = ['nom', 'adresse', 'tel'];
}

