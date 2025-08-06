# 🎯 Instructions de personnalisation du Portfolio

Votre portfolio Data Scientist est maintenant prêt ! Voici comment le personnaliser rapidement.

## 📝 Étape 1 : Personnaliser vos informations

### Modifiez le fichier `src/constants.js` :

1. **Informations personnelles** - Ligne 2 à 10
   - Changez le nom, titre, email, téléphone, localisation
   - Réécrivez la bio pour refléter votre parcours

2. **Réseaux sociaux** - Ligne 13 à 19
   - Remplacez les URLs par vos vrais profils
   - Supprimez les plateformes que vous n'utilisez pas

3. **Projets** - Ligne 68 à 230
   - Remplacez par vos vrais projets
   - Modifiez les descriptions, technologies, liens GitHub et démos
   - Adaptez les catégories selon votre domaine

4. **Compétences** - Ligne 23 à 65
   - Ajustez les niveaux selon votre expertise
   - Modifiez les catégories et technologies
   - Les icônes se mettent à jour automatiquement

5. **Expérience** - Ligne 233 à 290
   - Remplacez par votre vraie expérience professionnelle
   - Modifiez les entreprises, dates, réalisations

6. **Formation** - Ligne 293 à 320
   - Ajoutez vos diplômes et formations
   - Modifiez les établissements et dates

## 🖼️ Étape 2 : Ajouter vos images

### Dans le dossier `public/images/` :

1. **Photo de profil** : `profile.jpg` (400x400px recommandé)
2. **Images de projets** : `project1.jpg` à `project6.jpg` (400x240px recommandé)
3. **CV** : Remplacez `public/cv-marie-dubois.pdf` par votre CV
4. **Favicon** : Remplacez `public/favicon.ico` par votre icône

## 📧 Étape 3 : Configurer EmailJS (optionnel)

Pour activer le formulaire de contact :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template d'email
4. Dans `src/constants.js`, ligne 347-351, remplacez :
   ```javascript
   export const contactConfig = {
     emailjsServiceId: "votre_service_id",
     emailjsTemplateId: "votre_template_id",
     emailjsPublicKey: "votre_public_key"
   };
   ```

## 🎨 Étape 4 : Personnaliser les couleurs (optionnel)

### Dans `tailwind.config.js` :
- Modifiez les couleurs primaires dans la section `colors.primary`
- Les couleurs actuelles sont des tons de bleu (#3b82f6 à #1d4ed8)

### Dans `src/index.css` :
- Personnalisez les gradients et effets visuels
- Modifiez les couleurs des boutons et composants

## 🚀 Étape 5 : Tester et déployer

### Tests locaux :
```bash
# Développement
npm run dev

# Build de production
npm run build

# Aperçu de la production
npm run preview
```

### Déploiement :

**Netlify** (recommandé) :
1. Connectez votre repo GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

**Vercel** :
1. Importez depuis GitHub
2. Configuration automatique

**GitHub Pages** :
```bash
npm run build
# Déployez le contenu du dossier 'dist'
```

## ✅ Checklist finale

- [ ] Informations personnelles mises à jour
- [ ] Photo de profil ajoutée
- [ ] Projets personnalisés avec vraies données
- [ ] Images de projets ajoutées
- [ ] CV mis à jour
- [ ] Liens réseaux sociaux corrects
- [ ] Compétences et niveaux ajustés
- [ ] Expérience professionnelle complétée
- [ ] Formation/éducation mise à jour
- [ ] EmailJS configuré (optionnel)
- [ ] Test local réussi
- [ ] Déploiement effectué

## 🆘 Besoin d'aide ?

- **Documentation complète** : Consultez le README.md
- **Problèmes techniques** : Vérifiez les logs de la console
- **Personnalisation avancée** : Modifiez les composants dans `src/components/` et `src/sections/`

---

🎉 **Votre portfolio est prêt à impressionner !**

💡 **Conseil** : Mettez à jour régulièrement vos projets et compétences pour maintenir votre portfolio actuel.