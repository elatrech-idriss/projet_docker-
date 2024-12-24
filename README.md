# projet_docker
# Gestion des Utilisateurs

Ce projet est une application web permettant de gérer une liste d'utilisateurs. Il est construit avec React pour le frontend, Flask pour le backend, et utilise Docker pour orchestrer les services.

---

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les éléments suivants :

- [Docker](https://www.docker.com/get-started) (avec Docker Compose)
- [Node.js](https://nodejs.org) (facultatif si vous souhaitez développer en dehors de Docker)

---

## Étapes pour exécuter l’application

1. **Cloner le projet** :
   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   
  Construire et lancer les conteneurs avec Docker Compose :
   docker-compose up --build

Accéder à l'application :

Frontend : http://localhost
API (via Nginx) : http://localhost/users

Pour arrêter les conteneurs :
docker-compose down

Méthode	Endpoint	Description
GET	/users	Récupère la liste des utilisateurs
POST	/users	Ajoute un nouvel utilisateur
DELETE	/users/:id	Supprime un utilisateur par ID

Fonctionnalités de l’interface utilisateur
1. Ajouter un utilisateur
Saisissez un nom et une adresse email dans le formulaire.
Cliquez sur "Ajouter" pour enregistrer l'utilisateur.
2. Afficher la liste des utilisateurs
Tous les utilisateurs ajoutés sont affichés sous forme de liste.
Les informations incluent le nom et l'adresse email.
3. Supprimer un utilisateur
Chaque utilisateur a un bouton "Supprimer".
Cliquez sur ce bouton pour retirer un utilisateur de la liste.
4. Tester la connexion API
Un bouton "Tester API" permet de vérifier si l'API est fonctionnelle.

projet_final/
├── frontend/          # Code source du frontend React
├── backend/           # Code source du backend Flask
├── nginx.conf         # Configuration du serveur Nginx
├── docker-compose.yml # Configuration des services Docker
└── README.md          # Documentation