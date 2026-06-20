# Guide de Personnalisation Rapide

## 🎯 Éléments Essentiels à Modifier

### 1. Informations Personnelles

**Hero.jsx** (lignes principales à modifier)
```jsx
// Ligne 44-46 : Nom et titre
<span className="block">VOTRE NOM</span>
<span className="text-gradient">VOTRE TITRE</span>

// Ligne 52-54 : Description
Votre description personnelle...

// Ligne 86-90 : Liens sociaux
href="https://github.com/VOTRE_USERNAME"
href="https://linkedin.com/in/VOTRE_PROFIL"
href="mailto:VOTRE@EMAIL.com"
```

**Contact.jsx** (lignes 41-57)
```jsx
const contactInfo = [
  {
    title: 'Email',
    value: 'VOTRE@EMAIL.com',
    link: 'mailto:VOTRE@EMAIL.com'
  },
  {
    title: 'Téléphone', 
    value: 'VOTRE NUMÉRO',
    link: 'tel:VOTRE_NUMERO'
  },
  {
    title: 'Localisation',
    value: 'VOTRE VILLE'
  }
];
```

### 2. Contenu Professionnel

**About.jsx** (lignes 90-110) - Modifier votre biographie
**Projects.jsx** (lignes 10-80) - Ajouter vos projets
**Skills.jsx** (lignes 25-120) - Adapter vos compétences
**Experience.jsx** (lignes 10-85) - Votre parcours

### 3. Configuration EmailJS

**Contact.jsx** (lignes 30-34)
```jsx
const emailjsConfig = {
  serviceId: 'VOTRE_SERVICE_ID',
  templateId: 'VOTRE_TEMPLATE_ID', 
  publicKey: 'VOTRE_PUBLIC_KEY'
};
```

## 🎨 Personnalisation du Design

### Couleurs principales
**tailwind.config.js** - Modifier la palette `primary`

### Photos/Images
- Remplacer le placeholder dans Hero.jsx par votre photo
- Ajouter des screenshots de projets dans Projects.jsx

### Animation et Performance
- Ajuster les délais d'animation dans chaque composant
- Optimiser les images avec des formats modernes (WebP, AVIF)

## 🚀 Déploiement Rapide

1. **Netlify** : Glissez le dossier `dist/` après `npm run build`
2. **Vercel** : Connectez votre repo GitHub
3. **GitHub Pages** : Utilisez les scripts dans package.json

## ✅ Checklist Avant Publication

- [ ] Informations personnelles mises à jour
- [ ] Photos ajoutées et optimisées  
- [ ] Projets documentés avec liens valides
- [ ] EmailJS configuré et testé
- [ ] Build successful (`npm run build`)
- [ ] Test responsive sur mobile/tablette
- [ ] Liens sociaux fonctionnels
- [ ] CV téléchargeable disponible

## 🔧 Personnalisations Avancées

### Nouvelles Sections
Créez de nouveaux composants dans `src/components/` et ajoutez-les dans `App.jsx`

### Animations Personnalisées  
Utilisez Framer Motion avec de nouveaux variants dans chaque composant

### Nouvelles Couleurs
Étendez le thème Tailwind dans `tailwind.config.js`

### SEO et Métadonnées
Modifiez `index.html` pour ajouter méta-descriptions, Open Graph, etc.