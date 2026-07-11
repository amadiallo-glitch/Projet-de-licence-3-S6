# DEKKALIMMO - Projet Semestre 6 - Guide de Démarrage

## 🎉 Le projet est CRÉÉ DE A À Z!

Votre site web pour l'agence immobilière DEKKALIMMO a été créé avec toute la structure moderne et fonctionnelle.

---

## 📦 Qu'est-ce qui a été créé?

### Configuration & Dépendances
✅ `package.json` - Gestion des dépendances npm
✅ `tsconfig.json` - Configuration TypeScript
✅ `vite.config.ts` - Configuration du build (fast refresh)
✅ `tailwind.config.js` - Configuration des styles
✅ `postcss.config.js` - Configuration PostCSS

### Fichiers Source
✅ `index.html` - Page HTML principale
✅ `src/main.tsx` - Point d'entrée React
✅ `src/App.tsx` - Composant principal
✅ `src/index.css` - Styles globaux Tailwind

### Composants React (8 composants)
✅ `Header.tsx` - Navigation principale avec logo et contact
✅ `Hero.tsx` - Section hero avec image et titre
✅ `SearchSection.tsx` - Filtres de recherche de propriétés
✅ `PropertyCards.tsx` - Affichage des biens à vendre/louer
✅ `Services.tsx` - Section services avec cartes
✅ `Testimonials.tsx` - Logos des clients partenaires
✅ `CTA.tsx` - Appel à l'action
✅ `Footer.tsx` - Pied de page complet

### Documentation
✅ `README.md` - Documentation complète du projet
✅ `.github/copilot-instructions.md` - Instructions Copilot
✅ `INSTALLATION.md` - Ce fichier (guide de démarrage)

### Scripts
✅ `setup.bat` - Script d'installation automatique (Windows)
✅ `.gitignore` - Fichiers à ignorer pour git

---

## 🚀 Comment démarrer?

### Option 1: Script d'installation automatique (Recommandé)
1. Double-cliquez sur `setup.bat`
2. Le script installe automatiquement tout
3. Lancez `npm run dev` après

### Option 2: Installation manuelle
```bash
# 1. Installez Node.js si nécessaire
# https://nodejs.org/ (version LTS)

# 2. Allez dans le dossier du projet
cd c:\Users\abdou\Desktop\projets6

# 3. Installez les dépendances
npm install

# 4. Lancez le serveur
npm run dev
```

Le site ouvrira automatiquement sur **http://localhost:5173**

---

## 🎯 Structure du Projet

```
projets6/
├── .github/
│   └── copilot-instructions.md
├── .vscode/
│   └── mcp.json
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── SearchSection.tsx
│   │   ├── PropertyCards.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── setup.bat
```

---

## 🎨 Design & Couleurs

Le design provient directement de votre prototype Figma.

### Palette de couleurs
- **Principal**: #b2752a (Orange/Beige)
- **Succès**: #14ae5c (Vert)
- **Avertissement**: #bf6a02 (Orange foncé)
- **Info**: #2b51e8 (Bleu)
- **Dark**: #050621 (Noir profond)

### Fonts
- `Geom` - Police principale
- `Gravitas One` - Titres
- Chargées via Google Fonts

---

## 📝 Fonctionnalités Implémentées

### Header
- Logo DEKKALIMMO
- Navigation avec 8 liens (Accueil, Acheter, Louer, etc.)
- Numéro de contact
- Bouton "Estimer"
- Menu responsif mobile

### Hero Section
- Image de fond avec overlay
- Titre accrocheur
- Texte descriptif
- Responsive design

### Recherche (SearchSection)
- Filtres par type (À vendre, À louer, Terrain, Neuf)
- Champs de recherche (ville, type, prix)
- Bouton "VOIR PLUS"

### Propriétés (PropertyCards)
- 4 cartes avec images Figma
- Badge de type (À vendre, À louer, etc.)
- Prix et localisation
- Checkbox de sélection
- Hover effects

### Services
- 6 cartes de services avec icônes
- 2 cartes CTA (Estimer un bien, Contactez-nous)
- Design responsive

### Témoignages
- Logos de 5 clients partenaires
- Layout responsive grid

### Footer
- Sections (Company, Navigation, Villes, Liens utiles)
- Informations de contact
- Copyright

---

## 📦 Dépendances

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.3.3",
    "vite": "^5.1.6"
  }
}
```

---

## 🔧 Commandes Disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build
npm run preview

# Lancer ESLint (contrôle du code)
npm run lint
```

---

## 🌐 Déploiement

Le projet est prêt pour être déployé sur:
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- **Any static host**

Commande de build finale:
```bash
npm run build
```

Le dossier `dist/` contiendra tous les fichiers pour la production.

---

## 💡 Prochaines Étapes

1. **Installer Node.js** si ce n'est pas fait
2. **Lancer le script setup.bat** ou `npm install`
3. **Démarrer le dev server** avec `npm run dev`
4. **Personnaliser** les contenus (textes, images, couleurs)
5. **Ajouter des pages** supplémentaires si nécessaire
6. **Intégrer une API backend** pour les propriétés
7. **Ajouter un formulaire de contact**
8. **Déployer** le site

---

## 📞 Support

Pour toute question sur le projet:
- Consultez le `README.md`
- Vérifiez les commentaires dans le code
- Consultez la documentation React/Tailwind

---

**Créé: 2026-06-21**
**Framework: React 18 + TypeScript + Tailwind CSS**
**Build Tool: Vite**
**Design: Figma**

Bon développement! 🚀
