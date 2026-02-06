# Configuration EmailJS

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Ajouter un service email
1. Dans votre dashboard EmailJS, cliquez sur "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Cliquez sur "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template de base :

```
Nouveau message de {{from_name}}

Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis le portfolio de Narcisse DALKO
```

4. Notez le **Template ID** généré

### 4. Obtenir votre clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Mettre à jour le code
Dans le fichier `src/sections/Contact.jsx`, remplacez :

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Remplacez par votre Service ID
  'YOUR_TEMPLATE_ID',    // Remplacez par votre Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'      // Remplacez par votre Public Key
);
```

### 6. Tester le formulaire
1. Lancez votre application : `npm run dev`
2. Allez sur la section Contact
3. Remplissez et soumettez le formulaire
4. Vérifiez que vous recevez l'email

## Variables disponibles dans le template

- `{{from_name}}` : Nom de l'expéditeur
- `{{from_email}}` : Email de l'expéditeur  
- `{{subject}}` : Sujet du message
- `{{message}}` : Corps du message

## Limites du plan gratuit

- 200 emails par mois
- Accès aux services email de base
- Support communautaire

Pour plus d'emails, considérez l'upgrade vers un plan payant.