# GarderieKids — Application Web pour une garderie

## 1. Présentation du projet

GarderieKids est une application web responsive destinée à une garderie d'enfants. Elle présente la garderie, ses services, ses activités et ses coordonnées. Les données sont fournies par une API REST développée avec Node.js et Express, puis affichées dans une interface Angular.

## 2. Technologies utilisées

- **Frontend :** Angular, TypeScript, HTML, CSS
- **Design :** Bootstrap 5
- **Backend :** Node.js, Express.js
- **API :** REST / JSON
- **Communication frontend-backend :** Angular HttpClient
- **Versioning :** Git et GitHub

## 3. Structure du projet

```text
garderie-app/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       │   ├── navbar/
│   │       │   ├── hero/
│   │       │   ├── services/
│   │       │   ├── activities/
│   │       │   └── contact/
│   │       └── services/
│   │           └── garderie-api.ts
│   └── package.json
└── README.md
```

## 4. Fonctionnalités

- Présentation de la garderie.
- Affichage dynamique des services.
- Affichage dynamique des activités avec leurs catégories et tranches d'âge.
- Affichage des coordonnées de contact.
- Interface responsive adaptée aux différentes tailles d'écran.
- Chargement des données depuis le backend via une API REST.

## 5. API REST

Le backend utilise le port `3000`.

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/garderie` | Informations et coordonnées de la garderie |
| GET | `/api/services` | Liste des services |
| GET | `/api/activites` | Liste des activités |

## 6. Installation et lancement

### Prérequis

- Node.js et npm
- Git

### Installation du backend

Ouvrir un terminal à la racine du projet, puis exécuter :

```bash
cd backend
npm install
npm start
```

L'API est accessible à l'adresse `http://localhost:3000`.

### Installation du frontend

Ouvrir un **deuxième terminal** à la racine du projet :

```bash
cd frontend
npm install
ng serve
```

L'application Angular est accessible à l'adresse `http://localhost:4200`.

Les deux serveurs doivent rester actifs pour que le frontend puisse récupérer les données du backend.

## 7. Intégration API

Le service Angular `GarderieApi` utilise `HttpClient` pour envoyer des requêtes HTTP au backend. Les composants Hero, Services, Activities et Contact affichent les données reçues depuis les endpoints correspondants.

## 8. Gestion de versions

Le projet utilise Git et GitHub avec des branches dédiées aux fonctionnalités :

- `feature/landing-page`
- `feature/components`
- `feature/backend`
- `feature/api-integration`
- `docs/readme`

Les fonctionnalités sont développées dans des branches séparées, puis fusionnées dans `main`.

## 9. Dépôt GitHub

Repository : https://github.com/alaadidene/garderie-app
