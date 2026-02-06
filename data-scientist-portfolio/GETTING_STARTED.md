# Guide de Démarrage Rapide

## 🚀 Lancement immédiat

```bash
# Installer les dépendances (déjà fait)
npm install

# Lancer le serveur de développement
npm run dev
```

Votre portfolio sera accessible sur `http://localhost:3000`

## ✏️ Personnalisation en 5 minutes

### 1. Modifier vos informations personnelles

Éditez le fichier `src/constants.js` :

```javascript
export const personalInfo = {
  name: "Votre Nom",
  title: "Data Scientist",
  bio: "Votre biographie...",
  email: "votre@email.com",
  phone: "+33 X XX XX XX XX",
  // ...
};
```

### 2. Ajouter vos projets

Dans `src/constants.js`, section `projects` :

```javascript
export const projects = [
  {
    id: 1,
    title: "Votre Projet",
    description: "Description de votre projet...",
    image: "/images/votre-projet.jpg",
    technologies: ["Python", "TensorFlow", "AWS"],
    githubUrl: "https://github.com/vous/votre-projet",
    liveUrl: "https://votre-demo.com",
    category: "Machine Learning"
  },
  // ...
];
```

### 3. Mettre à jour vos compétences

Modifiez les niveaux dans la section `skills` :

```javascript
export const skills = {
  programmation: [
    { name: "Python", level: 95, icon: "SiPython" },
    // Ajustez les niveaux selon votre expertise
  ],
  // ...
};
```

### 4. Ajouter votre expérience

Section `experience` et `education` :

```javascript
export const experience = [
  {
    id: 1,
    type: "work",
    title: "Votre Poste",
    company: "Votre Entreprise",
    startDate: "Jan 2023",
    endDate: "Présent",
    // ...
  },
];
```

### 5. Configurer EmailJS (optionnel)

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Dans `src/sections/Contact.jsx`, ligne 50-52 :
   ```javascript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id'; 
   const publicKey = 'your_public_key';
   ```
3. Décommenter ligne 69 :
   ```javascript
   await emailjs.send(serviceId, templateId, templateParams, publicKey);
   ```

## 📸 Ajouter vos images

Remplacez les fichiers dans `public/images/` :
- `profile.jpg` → Votre photo de profil
- `project1.jpg` à `project6.jpg` → Images de vos projets

## 🎨 Personnaliser les couleurs

Dans `tailwind.config.js`, modifiez la palette `primary` :

```javascript
primary: {
  50: '#eff6ff',   // Très clair
  500: '#3b82f6',  // Couleur principale
  600: '#2563eb',  // Hover
  900: '#1e3a8a',  // Très foncé
}
```

## 📱 Test sur mobile

Le design est responsive. Testez avec :
- Chrome DevTools (F12)
- Votre téléphone sur `http://[votre-ip]:3000`

## 🚢 Déploiement

### Netlify (Recommandé)
1. `npm run build`
2. Glisser le dossier `dist/` sur [Netlify](https://netlify.com)

### Vercel
1. Connecter votre repo GitHub
2. Vercel détecte automatiquement Vite

### GitHub Pages
1. `npm run build`
2. Déployer le contenu de `dist/`

## 🔧 Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Aperçu build
npm run preview

# Installer une nouvelle dépendance
npm install [package]
```

## 🆘 Dépannage

### Port déjà utilisé
```bash
npm run dev -- --port 3001
```

### Erreurs de build
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images qui ne s'affichent pas
- Vérifiez que les images sont dans `public/images/`
- Chemins dans `constants.js` doivent commencer par `/images/`

## 🎯 Prochaines étapes

1. **SEO** : Modifiez les meta dans `index.html`
2. **Analytics** : Ajoutez Google Analytics
3. **Blog** : Intégrez un système de blog
4. **PWA** : Transformez en Progressive Web App

---

**Besoin d'aide ?** Consultez le README.md complet ou ouvrez une issue !