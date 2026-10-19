
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Garderie information
const garderie = {
  nom: 'GarderieKids',
  description:
    'Un espace chaleureux et sécurisé où chaque enfant apprend, joue et grandit à son rythme.',
  adresse: 'Tozeur, Tunisie',
  telephone: '+216 76 000 000',
  email: 'contact@garderiekids.tn',
};

// Services offered by the garderie
const services = [
  {
    id: 1,
    nom: 'Éveil éducatif',
    description:
      'Des activités ludiques pour développer la créativité et la curiosité.',
    icon: '📚',
  },
  {
    id: 2,
    nom: 'Jeux et créativité',
    description:
      "Du dessin, de la musique et des ateliers pour apprendre en s'amusant.",
    icon: '🎨',
  },
  {
    id: 3,
    nom: 'Accueil et bien-être',
    description:
      'Un environnement bienveillant qui favorise la sécurité et la socialisation.',
    icon: '🤗',
  },
];

// Activities organized for children
const activites = [
  {
    id: 1,
    nom: 'Atelier de dessin',
    categorie: 'Créativité',
    age: '3-5 ans',
  },
  {
    id: 2,
    nom: 'Lecture de contes',
    categorie: 'Éveil éducatif',
    age: '2-5 ans',
  },
  {
    id: 3,
    nom: 'Jeux en groupe',
    categorie: 'Socialisation',
    age: '3-5 ans',
  },
];

// GET /api/garderie
app.get('/api/garderie', (req, res) => {
  res.json(garderie);
});

// GET /api/services
app.get('/api/services', (req, res) => {
  res.json(services);
});

// GET /api/activites
app.get('/api/activites', (req, res) => {
  res.json(activites);
});

// Start server
app.listen(PORT, () => {
  console.log(`GarderieKids API is running at http://localhost:${PORT}`);
});
