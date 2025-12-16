# Project Structure

Ce projet utilise une architecture basée sur des composants avec la structure suivante :
- `src/components/` - Tous les composants React
- `src/App.jsx` - Composant principal de l'application
- `db.json` - Fichier de base de données fictive (pour les tests)

## Technologies Utilisées

- React (v19+)
- Vite
- JSON Server (pour l'API fictive)
- React Router (pour la navigation)
- Axios (pour les appels API)
- Bootstrap (pour le style)

## Comment Démarrer

1. Installez les dépendances : `npm install`
2. Démarrez le serveur JSON : `npx json-server --watch db.json --port 3001`
3. Démarrez l'application React : `npm run dev`

## Structure des Composants

- `ClientsList.jsx` : Liste des clients avec options de suppression et de modification
- `ClientDetails.jsx` : Affichage détaillé d'un client
- `CreateClient.jsx` : Formulaire pour créer un nouveau client
- `UpdateClient.jsx` : Formulaire pour modifier un client existant

## Fonctionnalités Principales

- **Liste des clients** : Affichage de tous les clients avec pagination et recherche
- **Détails client** : Vue détaillée d'un client avec toutes ses informations
- **Création client** : Formulaire complet pour ajouter un nouveau client
- **Modification client** : Formulaire de modification avec validation
- **Suppression client** : Confirmation avant suppression avec message de succès

