# 🚀 Portfolio Data Scientist - Marie Dubois

Un portfolio professionnel moderne et responsive pour un Data Scientist, construit avec React, Vite, Tailwind CSS et Framer Motion.

## ✨ Fonctionnalités

- **Design moderne et responsive** - Mobile-first design avec adaptation parfaite sur tous les écrans
- **Mode sombre/clair** - Toggle avec persistance dans localStorage
- **Animations fluides** - Intégration complète de Framer Motion pour une expérience utilisateur engageante
- **Optimisé SEO** - Meta tags, Open Graph et Twitter Cards configurés
- **Formulaire de contact** - Intégration EmailJS pour la gestion des messages
- **Performance optimisée** - Code splitting et lazy loading

## 🛠️ Technologies utilisées

- **Framework** : React 18 avec Vite
- **Styling** : Tailwind CSS avec configuration personnalisée
- **Animations** : Framer Motion
- **Icônes** : React Icons (Font Awesome, Simple Icons)
- **Formulaire** : EmailJS pour l'envoi d'emails
- **Build Tool** : Vite pour un développement ultra-rapide

## 📁 Structure du projet

```
data-scientist-portfolio/
├── public/
│   ├── images/          # Images du portfolio (projets, profil)
│   └── favicon.ico      # Favicon du site
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx   # Navigation avec toggle dark mode
│   │   ├── Footer.jsx   # Pied de page avec liens
│   │   ├── ProjectCard.jsx # Carte de projet
│   │   ├── SkillItem.jsx   # Composant de compétence
│   │   └── TimelineItem.jsx # Élément de timeline
│   ├── sections/        # Sections principales
│   │   ├── Hero.jsx     # Section d'accueil
│   │   ├── About.jsx    # À propos
│   │   ├── Projects.jsx # Portfolio projets
│   │   ├── Skills.jsx   # Compétences techniques
│   │   ├── Experience.jsx # Parcours professionnel
│   │   └── Contact.jsx  # Formulaire de contact
│   ├── constants.js     # Données du portfolio
│   ├── index.css       # Styles Tailwind + customs
│   ├── App.jsx         # Composant principal
│   └── main.jsx        # Point d'entrée React
├── tailwind.config.js  # Configuration Tailwind
├── postcss.config.js   # Configuration PostCSS
└── package.json        # Dépendances et scripts
```

## 🚀 Installation et lancement

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation

1. **Cloner le projet**
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

4. **Construire pour la production**
```bash
npm run build
```

5. **Prévisualiser la build de production**
```bash
npm run preview
```

## ⚙️ Configuration

### 1. Personnalisation du contenu

Éditez le fichier `src/constants.js` pour personnaliser :
- Informations personnelles (nom, titre, bio, contact)
- Projets portfolio avec images et descriptions
- Compétences techniques par catégories
- Expérience professionnelle et formation
- Liens des réseaux sociaux
- Configuration EmailJS

### 2. Configuration EmailJS

Pour activer le formulaire de contact :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template d'email
4. Modifiez `contactConfig` dans `constants.js` :

```javascript
export const contactConfig = {
  emailjsServiceId: "votre_service_id",
  emailjsTemplateId: "votre_template_id", 
  emailjsPublicKey: "votre_public_key"
};
```

### 3. Images du portfolio

Ajoutez vos images dans `public/images/` :
- `profile.jpg` - Photo de profil (recommandé : 400x400px)
- `project1.jpg` à `project6.jpg` - Images des projets (recommandé : 400x240px)
- `favicon.ico` - Icône du site

### 4. Personnalisation du design

Le design peut être personnalisé via :
- `tailwind.config.js` - Couleurs, fonts, animations
- `src/index.css` - Styles personnalisés et variables CSS

## 🎨 Couleurs et thème

Le portfolio utilise une palette de couleurs professionnelle :
- **Primaire** : Bleu (#3b82f6 à #1d4ed8)
- **Secondaire** : Variations de gris pour light/dark mode
- **Accents** : Vert, rouge, orange pour les états et niveaux

## 📱 Responsive Design

- **Mobile First** : Optimisé pour mobile puis étendu aux autres tailles
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation adaptative** : Menu hamburger sur mobile
- **Grilles flexibles** : Adaptation automatique du contenu

## 🔧 Scripts disponibles

```bash
# Développement avec hot reload
npm run dev

# Build de production optimisée
npm run build

# Prévisualisation de la build
npm run preview

# Lint du code
npm run lint
```

## 🌟 Fonctionnalités avancées

### Animations
- **Scroll-triggered animations** : Éléments qui s'animent au scroll
- **Hover effects** : Interactions fluides sur les éléments cliquables
- **Page transitions** : Transitions douces entre les sections
- **Loading states** : Animations de chargement pour le formulaire

### SEO
- **Meta tags dynamiques** : Titre, description, keywords
- **Open Graph** : Partage optimisé sur les réseaux sociaux
- **Twitter Cards** : Aperçus riches sur Twitter
- **Balises sémantiques** : Structure HTML optimisée pour le référencement

### Performance
- **Code splitting** : Chargement optimisé des composants
- **Lazy loading** : Images chargées à la demande
- **Compression** : Assets optimisés pour la production
- **Cache** : Stratégies de cache pour les performances

## 🚀 Déploiement

### Netlify (recommandé)
1. Connectez votre repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Importez votre projet depuis GitHub
2. Configuration automatique détectée
3. Déploiement automatique à chaque push

### GitHub Pages
```bash
npm run build
# Déployez le contenu du dossier 'dist'
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes ou avez des questions :
- Ouvrez une issue sur GitHub
- Consultez la documentation des technologies utilisées
- Vérifiez les logs de la console pour les erreurs

## 🙏 Remerciements

- [React](https://reactjs.org/) pour le framework
- [Vite](https://vitejs.dev/) pour l'outillage de développement
- [Tailwind CSS](https://tailwindcss.com/) pour le système de design
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [React Icons](https://react-icons.github.io/react-icons/) pour les icônes

---

💼 **Développé avec passion pour la communauté Data Science**

🚀 **Ready to showcase your data science journey!**
