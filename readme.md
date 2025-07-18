# 🏚️ Haunted House Three.js 🪦 👻

Une scène 3D interactive de maison hantée réalisée avec [Three.js](https://threejs.org/), inspirée du parcours Three.js Journey par Bruno Simon.

<img src="./docs/scene.png" alt="Aperçu de la maison hantée" width="480"/>

## 🚀 Démo

[Voir la démo](https://rekuiem84.github.io/haunted-house-threejs/)

## ✨ Fonctionnalités

- Maison 3D texturée avec murs, toit, porte et buissons
- Lumières dynamiques et effets de brouillard
- Feux follets animés autour de la maison
- Tombes générés procéduralement
- Contrôles de caméra interactifs (OrbitControls)
- Ombres réalistes et réactives

## 🛠️ Installation & Lancement

1. **Cloner le dépôt :**

   ```bash
   git clone https://rekuiem84.github.io/haunted-house-threejs/
   cd haunted-house-threejs
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Lancer le serveur :**

   ```bash
   npm run dev
   ```

4. **Build pour la production :**
   ```bash
   npm run build
   ```
   Les fichiers optimisés seront générés dans le dossier `dist/`.

## 📁 Structure du projet

```
├── src/           # Fichiers sources
├── static/        # Textures et assets statiques
├── dist/          # Fichiers générés pour la production
├── package.json   # Dépendances et scripts
└── vite.config.js # Configuration Vite
```

## 🖼️ Textures

Les textures utilisées proviennent de [Poly Haven](https://polyhaven.com/) et sont stockées dans le dossier [`static/`](static/).
