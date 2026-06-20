# Portfolio Data Scientist - Jean Dupont

Un portfolio professionnel moderne et responsive pour Data Scientist, créé avec React, Tailwind CSS et Framer Motion.

## 🚀 Aperçu

Ce portfolio présente de manière élégante et interactive :
- Expérience en Data Science et IA
- Projets techniques avec détails et démonstrations
- Compétences et certifications
- Parcours professionnel et académique
- Formulaire de contact fonctionnel

## ✨ Fonctionnalités

- **Design Moderne** : Interface épurée et professionnelle
- **Responsive** : Optimisé pour tous les appareils (mobile-first)
- **Animations Fluides** : Utilisation de Framer Motion pour des transitions subtiles
- **Performance** : Optimisé pour la vitesse et l'accessibilité
- **Contact Fonctionnel** : Formulaire intégré avec EmailJS
- **SEO Ready** : Structure optimisée pour les moteurs de recherche

## 🛠️ Technologies

- **Frontend** : React 18 + Vite
- **Styling** : Tailwind CSS 3
- **Animations** : Framer Motion
- **Icônes** : React Icons (Feather Icons)
- **Email** : EmailJS
- **Build** : Vite
- **Déploiement** : Compatible GitHub Pages, Netlify, Vercel

## 📁 Structure du Projet

```
data-scientist-portfolio/
├── public/
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation principale
│   │   ├── Hero.jsx           # Section d'accueil
│   │   ├── About.jsx          # À propos + compétences
│   │   ├── Projects.jsx       # Portfolio de projets
│   │   ├── Skills.jsx         # Compétences techniques
│   │   ├── Experience.jsx     # Timeline expérience/éducation
│   │   ├── Contact.jsx        # Formulaire de contact
│   │   └── Footer.jsx         # Pied de page
│   ├── assets/
│   │   └── images/            # Images du portfolio
│   ├── App.jsx                # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles globaux + Tailwind
├── tailwind.config.js         # Configuration Tailwind
├── postcss.config.js         # Configuration PostCSS
├── vite.config.js            # Configuration Vite
└── package.json              # Dépendances
```

## 🚀 Installation et Utilisation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/data-scientist-portfolio.git
cd data-scientist-portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en mode développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

### Build pour production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Prévisualisation du build

```bash
npm run preview
```

## ⚙️ Personnalisation

### 1. Informations Personnelles

Modifiez les données dans chaque composant :

**Hero.jsx** - Nom, titre, description
```jsx
<h1>Votre Nom</h1>
<span className="text-gradient">Votre Titre</span>
<p>Votre description...</p>
```

**Contact.jsx** - Informations de contact
```jsx
const contactInfo = [
  {
    title: 'Email',
    value: 'votre@email.com',
    link: 'mailto:votre@email.com'
  }
  // ...
];
```

### 2. Configuration EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template
4. Remplacez les clés dans `Contact.jsx` :

```jsx
const emailjsConfig = {
  serviceId: 'VOTRE_SERVICE_ID',
  templateId: 'VOTRE_TEMPLATE_ID', 
  publicKey: 'VOTRE_PUBLIC_KEY'
};
```

### 3. Projets

Modifiez le tableau `projects` dans `Projects.jsx` :

```jsx
const projects = [
  {
    title: "Votre Projet",
    description: "Description du projet...",
    technologies: ["React", "Python"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com"
  }
  // ...
];
```

### 4. Couleurs et Thème

Personnalisez les couleurs dans `tailwind.config.js` :

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#votre-couleur',
        600: '#votre-couleur-foncee',
        // ...
      }
    }
  }
}
```

## 🚀 Déploiement

### GitHub Pages

1. Installer gh-pages :
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans package.json :
```json
{
  "homepage": "https://votre-username.github.io/data-scientist-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Déployer :
```bash
npm run deploy
```

### Netlify

1. Connectez votre repository GitHub
2. Configuration build :
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. Importez le projet depuis GitHub
2. Vercel détecte automatiquement la configuration Vite

## 📱 Responsive Design

Le portfolio est optimisé pour :
- **Mobile** : 320px+
- **Tablet** : 768px+
- **Desktop** : 1024px+
- **Large Desktop** : 1280px+

## 🎨 Composants Principaux

### Header
- Navigation fixe avec effet de scroll
- Menu hamburger responsive
- Bouton de téléchargement CV

### Hero
- Animation d'entrée
- Photo/avatar avec effets flottants
- Boutons d'action
- Liens sociaux

### About
- Biographie professionnelle
- Grille de compétences avec icônes
- Barres de progression animées

### Projects
- Cartes interactives
- Filtres par catégorie
- Liens GitHub et démonstrations
- Animations de hover

### Skills
- Visualisations modernes
- Catégorisation des compétences
- Statistiques animées
- Certifications

### Experience
- Timeline interactive
- Alternance expérience/éducation
- Détails des réalisations
- Animations au scroll

### Contact
- Formulaire fonctionnel
- Validation côté client
- Envoi via EmailJS
- Informations de contact

## 🔧 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production  
- `npm run preview` - Prévisualisation du build
- `npm run lint` - Vérification du code

## 📄 Licence

MIT License - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Forker le projet
2. Créer une branche feature
3. Commiter vos changements  
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Si vous avez des questions ou besoin d'aide :
- Ouvrez une issue GitHub
- Contactez-moi par email : jean.dupont@email.com

---

**Créé avec ❤️ par Jean Dupont** - Portfolio moderne pour Data Scientists
