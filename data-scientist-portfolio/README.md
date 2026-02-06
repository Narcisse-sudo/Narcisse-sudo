# Portfolio Data Scientist Moderne

Un portfolio professionnel moderne, responsive et avec mode dark/light pour un Data Scientist, construit avec React, Vite, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- ✨ **Design moderne** avec animations fluides
- 🌙 **Mode dark/light** avec persistance localStorage
- 📱 **Responsive design** mobile-first
- ⚡ **Performance optimisée** avec Vite
- 🎨 **Animations élégantes** avec Framer Motion
- 📧 **Formulaire de contact** avec EmailJS
- 🔗 **Liens réseaux sociaux** intégrés
- 📊 **Visualisation des compétences** interactive
- 🏗️ **Architecture modulaire** et maintenable

## 🛠️ Technologies utilisées

- **Framework** : React 18
- **Build Tool** : Vite
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : React Icons
- **Formulaire** : EmailJS
- **Langue** : Français

## 📁 Structure du projet

```
data-scientist-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   └── ... (autres visuels de projets)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillItem.jsx
│   │   └── TimelineItem.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── constants.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🚀 Installation et développement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>
cd data-scientist-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le portfolio sera accessible sur `http://localhost:3000`

### Build de production
```bash
npm run build
```

### Aperçu de la production
```bash
npm run preview
```

## ⚙️ Configuration

### 1. Personnalisation du contenu

Modifier le fichier `src/constants.js` pour :
- Informations personnelles
- Projets
- Compétences
- Expérience professionnelle
- Formation
- Liens réseaux sociaux

### 2. Configuration EmailJS

Pour activer le formulaire de contact :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email
3. Créer un template d'email
4. Remplacer les placeholders dans `src/sections/Contact.jsx` :
   ```javascript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```
5. Décommenter la ligne EmailJS :
   ```javascript
   await emailjs.send(serviceId, templateId, templateParams, publicKey);
   ```

### 3. Images

Remplacer les images placeholder dans `public/images/` :
- `profile.jpg` : Votre photo de profil
- `project1.jpg` à `project6.jpg` : Images de vos projets

### 4. Favicon

Remplacer `public/favicon.ico` par votre propre favicon.

## 🎨 Personnalisation du design

### Couleurs
Modifier les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    // Vos couleurs personnalisées
  }
}
```

### Typographie
Les polices peuvent être modifiées dans :
- `tailwind.config.js` pour la configuration
- `index.html` pour les imports Google Fonts

## 📱 Sections du portfolio

### 1. Hero (Accueil)
- Nom et titre
- Photo de profil avec animations
- Boutons d'action (CV, contact)
- Liens réseaux sociaux

### 2. À propos
- Biographie professionnelle
- Statistiques clés
- Certifications

### 3. Projets
- Filtrage par catégorie
- Cartes projets interactives
- Liens GitHub et démos
- Statistiques des projets

### 4. Compétences
- Visualisation par catégories
- Barres de progression animées
- Onglets interactifs

### 5. Expérience
- Timeline interactive
- Expérience professionnelle
- Formation académique
- Filtrage par type

### 6. Contact
- Formulaire EmailJS
- Informations de contact
- Liens réseaux sociaux

## 🌙 Mode sombre

Le mode sombre est implémenté avec :
- Détection de la préférence système
- Persistance dans localStorage
- Toggle manuel dans le header
- Transitions fluides

## 📊 Performance

Le portfolio est optimisé pour :
- First Contentful Paint rapide
- Animations performantes
- Images optimisées
- Code splitting automatique avec Vite

## 🔧 Développement avancé

### Ajout de nouvelles sections
1. Créer le composant dans `src/sections/`
2. Importer dans `src/App.jsx`
3. Ajouter la navigation dans `src/constants.js`

### Ajout de nouveaux composants
1. Créer dans `src/components/`
2. Suivre la structure existante
3. Utiliser Framer Motion pour les animations

### Modification des animations
Les animations sont gérées via Framer Motion dans chaque composant.

## 🚢 Déploiement

### Netlify
1. Build : `npm run build`
2. Dossier de publication : `dist`

### Vercel
1. Connecter le repo GitHub
2. Vercel détecte automatiquement Vite

### GitHub Pages
```bash
npm run build
# Déployer le dossier dist/
```

## 📄 Licence

Ce projet est libre d'utilisation. Vous pouvez le modifier et l'adapter selon vos besoins.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Reporter des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 📧 Support

Pour toute question ou support, contactez-moi via le formulaire du portfolio ou par email.

---

**Créé avec ❤️ et React** par [Votre Nom]