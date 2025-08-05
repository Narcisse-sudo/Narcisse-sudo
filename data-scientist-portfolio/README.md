# Portfolio Data Scientist - Dr. Alex Martin

Un portfolio professionnel moderne et responsive créé avec React, Vite, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design responsive** : Interface adaptée à tous les appareils (mobile-first)
- **Mode sombre** : Toggle dark/light mode avec sauvegarde locale
- **Animations fluides** : Utilisation de Framer Motion pour des transitions élégantes
- **Formulaire de contact** : Intégration EmailJS pour l'envoi d'emails
- **SEO optimisé** : Métadonnées complètes et structured data
- **Performance** : Build optimisé avec Vite
- **Accessibilité** : Interface accessible avec navigation clavier

## 🛠️ Technologies utilisées

- **Frontend** : React 18, Vite
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : React Icons, Simple Icons
- **Formulaire** : EmailJS
- **Build** : Vite

## 📁 Structure du projet

```
src/
├── components/         # Composants réutilisables
│   ├── DarkModeToggle.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── sections/          # Sections principales
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── constants.js       # Données du portfolio
├── index.css         # Styles Tailwind
└── App.jsx           # Composant principal
```

## 🚀 Installation et utilisation

### Prérequis
- Node.js (version 16+)
- npm ou yarn

### Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/data-scientist-portfolio.git
cd data-scientist-portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à [http://localhost:5173](http://localhost:5173)

### Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## ⚙️ Configuration

### Personnalisation des données

Modifiez le fichier `src/constants.js` pour personnaliser :
- Informations personnelles
- Projets
- Compétences
- Expérience professionnelle
- Liens sociaux

### Configuration EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template d'email
4. Remplacez dans `src/sections/Contact.jsx` :
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`  
   - `YOUR_PUBLIC_KEY`

### Images

Placez vos images dans le dossier `public/` :
- `profile-image.jpg` : Photo de profil
- `project1.jpg` à `project6.jpg` : Images des projets
- `cv-alex-martin.pdf` : CV à télécharger

## 🎨 Personnalisation du design

### Couleurs

Modifiez les couleurs dans `tailwind.config.js` :

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Vos couleurs personnalisées
      }
    }
  }
}
```

### Animations

Les animations sont configurées dans chaque composant avec Framer Motion. Vous pouvez les modifier dans les objets `variants` de chaque section.

## 📱 Responsive Design

Le portfolio est conçu avec une approche mobile-first :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Scripts disponibles

- `npm run dev` : Serveur de développement
- `npm run build` : Build de production
- `npm run preview` : Prévisualisation du build
- `npm run lint` : Vérification du code

## 🌐 Déploiement

### Netlify
1. Connectez votre repository GitHub
2. Configurez la commande de build : `npm run build`
3. Dossier de publication : `dist`

### Vercel
1. Importez votre projet depuis GitHub
2. Les paramètres sont détectés automatiquement

### GitHub Pages
1. Installez `gh-pages` : `npm install --save-dev gh-pages`
2. Ajoutez dans `package.json` :
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```
3. Déployez : `npm run build && npm run deploy`

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Dr. Alex Martin**
- Email : alex.martin@example.com
- LinkedIn : [Alex Martin](https://linkedin.com/in/alexmartin)
- GitHub : [alexmartin](https://github.com/alexmartin)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📋 TODO

- [ ] Ajouter un blog intégré
- [ ] Système de commentaires
- [ ] Mode offline avec service worker
- [ ] Tests unitaires
- [ ] Storybook pour les composants

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
