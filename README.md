# Task Manager — Gestionnaire de tâches

Application web de gestion de tâches développée avec React JS dans le cadre d'un projet scolaire.

## Aperçu

Task Manager permet de visualiser, organiser et ajouter des tâches avec différents niveaux de priorité. L'interface adopte un design sombre et raffiné (dark theme) avec une palette amber.

## Fonctionnalités

- Afficher la liste des tâches avec leur priorité (Haute / Moyenne / Basse)
- Ajouter une nouvelle tâche via un formulaire dédié
- Masquer / afficher la liste des tâches
- Afficher des catégories de tâches
- Récupération de données externes via une API (JSONPlaceholder)
- Page 404 pour les routes inconnues

## Technologies utilisées

- React 19
- Vite
- React Router DOM
- CSS Modules

## Notions React appliquées

- Composants fonctionnels avec props
- `useState` — gestion de l'état local et partagé
- `useEffect` — appel API au montage du composant
- `useNavigate` — redirection après soumission du formulaire
- `.map()` avec prop `key` pour le rendu de listes
- State lifting — état partagé remonté dans `App.jsx`
- `NavLink` — navigation active dans la barre de navigation
- CSS Modules — styles scoped par composant

## Structure du projet

```
src/
├── components/
│   ├── NavBar.jsx
│   ├── TaskDetails.jsx
│   └── TaskCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── AddTask.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx
```

## Installation et lancement

```bash
npm install
npm run dev
```