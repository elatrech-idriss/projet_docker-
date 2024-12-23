# Utilise l'image officielle Node.js comme base
FROM node:16

# Crée et définit le répertoire de travail
WORKDIR /app

# Copie le fichier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installe les dépendances
RUN npm install

# Copie tout le code source
COPY . .

# Expose le port 3000 pour React
EXPOSE 3000

# Commande pour démarrer l'application React
CMD ["npm", "start"]

ENV WDS_SOCKET_PORT=0