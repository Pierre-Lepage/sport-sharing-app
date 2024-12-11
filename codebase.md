# .aidigestignore

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Environment and config files
.env*
.DS_Store
*.config.js
tsconfig.json

# Cache and logs
.npm
.eslintcache
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.tsbuildinfo

# IDE
.vscode/
.idea/
*.swp
*.swo

# Package files
package-lock.json
yarn.lock

# Generated files
public/static/
public/assets/

# Keep only source code
!src/**/*
!public/index.html
```

# .gitignore

```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Environment Variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# IDE - IntelliJ
.idea/
*.iml
*.iws
*.ipr

# IDE - WebStorm
.idea/
.idea_modules/

# System Files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# TypeScript cache
*.tsbuildinfo

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn
.yarn-integrity
yarn.lock

# dotenv environment variable files
.env*

# Temporary files
*.swp
*.swo
*~

# Debug
debug.log
debug/

server/uploads/*
!server/uploads/.gitkeep
```

# package.json

```json
{
  "name": "sport-sharing-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^2.3.0",
    "@types/jest": "^27.5.2",
    "@types/multer": "^1.4.12",
    "@types/node": "^16.18.119",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.7",
    "multer": "^1.4.5-lts.1",
    "postcss": "^8.4.49",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.28.0",
    "react-scripts": "5.0.1",
    "sharp": "^0.33.5",
    "tailwindcss": "^3.4.14",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "dev": "react-scripts start",
    "dev:all": "concurrently \"npm start\" \"cd server && npm run dev\""
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "concurrently": "^8.2.2",
    "msw": "^2.6.4"
  }
}

```

# public/favicon.ico

This is a binary file of the type: Binary

# public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

# public/logo192.png

This is a binary file of the type: Image

# public/logo512.png

This is a binary file of the type: Image

# public/manifest.json

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

# public/robots.txt

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

# README.md

```md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

# server/package.json

```json
{
  "name": "sport-sharing-backend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon --exec ts-node src/app.ts",
    "build": "tsc",
    "test": "jest"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "helmet": "^7.0.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.6.3"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.23.9",
    "@babel/preset-typescript": "^7.23.3",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/bcryptjs": "^2.4.5",
    "@types/compression": "^1.7.5",
    "@types/cors": "^2.8.15",
    "@types/express": "^4.17.20",
    "@types/jest": "^29.5.6",
    "@types/jsonwebtoken": "^9.0.4",
    "@types/node": "^20.8.7",
    "@types/supertest": "^6.0.2",
    "@types/testing-library__jest-dom": "^5.14.5",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "msw": "^2.6.4",
    "nodemon": "^3.0.1",
    "supertest": "^6.3.4",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "moduleFileExtensions": ["ts", "tsx", "js"],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    "setupFilesAfterEnv": ["./src/setupTests.ts"]
  }
}
```

# server/src/app.ts

```ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/database';
import authRoutes from './routes/auth';
import articleRoutes from './routes/articles';
import uploadRoutes from './routes/upload';

// Chargement des variables d'environnement
dotenv.config();

// Initialisation de l'application Express
const app = express();

// Connexion à la base de données
connectDB();

// Configuration des middlewares essentiels
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Configuration Helmet modifiée pour permettre les images
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "blob:", "*"],
    },
  },
}));

app.use(compression());

// Configuration du chemin des uploads avec debug
const uploadsPath = path.join(__dirname, '../uploads/images');
console.log('Dossier uploads configuré:', uploadsPath);

// Middleware de logging basique
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Configuration du serveur statique pour les images AVANT les autres routes
app.use('/uploads/images', express.static(uploadsPath, {
  maxAge: '1d',
  etag: true,
  lastModified: true,
  index: false,
}));

// Routes principales
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/upload', uploadRoutes);

// Middleware de logging amélioré pour déboguer les requêtes d'images
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  if (req.path.includes('/uploads/images')) {
    console.log('Tentative d\'accès à une image:', {
      path: req.path,
      absolutePath: path.join(uploadsPath, path.basename(req.path)),
      exists: require('fs').existsSync(path.join(uploadsPath, path.basename(req.path)))
    });
  }
  next();
});

// Route de test
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// Middleware 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Gestion des erreurs
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`
    🚀 Server is running on port ${PORT}
    📝 Environment: ${process.env.NODE_ENV}
    🔗 Health check: http://localhost:${PORT}/api/health
    📁 Uploads directory: ${uploadsPath}
  `);
});

export default app;
```

# server/src/config/database.ts

```ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
```

# server/src/middleware/auth.ts

```ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models';

// Extension de l'interface Request pour inclure l'utilisateur
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      token?: string;
    }
  }
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentification requise' });
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé' });
    }

    // Ajouter l'utilisateur et le token à la requête
    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalide' });
  }
};

export default auth;
```

# server/src/models/Article.ts

```ts
import mongoose, { Document, Schema } from 'mongoose';

export enum SportCategory {
  SPORTS_HIVER = 'SPORTS_HIVER',
  SPORTS_NAUTIQUES = 'SPORTS_NAUTIQUES',
  SPORTS_RAQUETTE = 'SPORTS_RAQUETTE'
}

// Interface pour le document Article
export interface IArticle extends Document {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: SportCategory;
  searchTags: string[];
  owner: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  availability: boolean;
  location: string;
}

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Titre requis'],
    trim: true,
    minlength: [3, 'Le titre doit contenir au moins 3 caractères'],
    maxlength: [100, 'Le titre ne peut pas dépasser 100 caractères']
  },
  description: {
    type: String,
    required: [true, 'Description requise'],
    minlength: [10, 'La description doit contenir au moins 10 caractères'],
    maxlength: [1000, 'La description ne peut pas dépasser 1000 caractères']
  },
  price: {
    type: Number,
    required: [true, 'Prix requis'],
    min: [0, 'Le prix ne peut pas être négatif'],
    validate: {
      validator: function(value: number) {
        return value >= 0 && Number.isFinite(value);
      },
      message: 'Prix invalide'
    }
  },
  images: [{
    type: String,
    required: [true, 'Au moins une image est requise']
  }],
  category: {
    type: String,
    enum: Object.values(SportCategory),
    required: [true, 'Catégorie requise']
  },
  searchTags: [{
    type: String,
    lowercase: true,
    trim: true
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    required: [true, 'Localisation requise']
  }
}, {
  timestamps: true,
  // Options pour optimiser les performances
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index pour la recherche optimisée
articleSchema.index({ 
  title: 'text', 
  description: 'text', 
  searchTags: 'text',
  location: 'text'
});

// Index pour les filtres fréquents
articleSchema.index({ category: 1, availability: 1 });
articleSchema.index({ owner: 1 });
articleSchema.index({ createdAt: -1 });

export default mongoose.model<IArticle>('Article', articleSchema);
```

# server/src/models/index.ts

```ts
import User, { IUser } from './User';
import Article, { IArticle, SportCategory } from './Article';

export {
  User,
  Article,
  IUser,
  IArticle,
  SportCategory
};
```

# server/src/models/User.ts

```ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Interface pour le document User
export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  createdAt: Date;
  // Méthodes personnalisées
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateAuthToken(): string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email est requis'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(value: string) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: 'Format email invalide'
    }
  },
  password: {
    type: String,
    required: [true, 'Mot de passe requis'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
    // Ne jamais renvoyer le mot de passe dans les requêtes
    select: false
  },
  username: {
    type: String,
    required: [true, 'Nom d\'utilisateur requis'],
    unique: true,
    trim: true,
    minlength: [3, 'Le nom d\'utilisateur doit contenir au moins 3 caractères']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash du mot de passe avant sauvegarde
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Méthode pour comparer les mots de passe
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    return false;
  }
};

// Méthode pour générer le JWT
userSchema.methods.generateAuthToken = function(): string {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET || 'votre_secret_jwt',
    { expiresIn: process.env.JWT_EXPIRE || '24h' }
  );
};

export default mongoose.model<IUser>('User', userSchema);
```

# server/src/routes/articles.ts

```ts
import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { Article, SportCategory } from '../models';
import auth from '../middleware/auth';

const router = express.Router();

// Validation des données pour création/modification d'article
const articleValidation = [
  body('title')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Le titre doit contenir entre 3 et 100 caractères'),
  body('description')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('La description doit contenir entre 10 et 1000 caractères'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Le prix doit être un nombre positif'),
  body('category')
    .isIn(Object.values(SportCategory))
    .withMessage('Catégorie invalide'),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('La localisation est requise')
];

// Liste des articles avec filtres et pagination
router.get('/', auth, async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const category = req.query.category as SportCategory;
    const searchQuery = req.query.search as string;

    // Construction de la requête avec filtres
    let query: any = {};
    if (category) {
      query.category = category;
    }
    if (searchQuery) {
      query.$text = { $search: searchQuery };
    }

    // Exécution de la requête avec pagination
    const totalArticles = await Article.countDocuments(query);
    const articles = await Article.find(query)
      .populate('owner', 'username')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      articles,
      currentPage: page,
      totalPages: Math.ceil(totalArticles / limit),
      totalArticles,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des articles' });
  }
});

// Obtenir un article par son ID
router.get('/:id', auth, async (req: Request, res: Response) => {
  try {
    const article = await Article.findById(req.params.id).populate('owner', 'username');
    if (!article) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }
    res.json(article);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'article' });
  }
});

// Créer un nouvel article
router.post('/', auth, articleValidation, async (req: Request, res: Response) => {
  try {
    console.log('--- Création d\'article ---');
    console.log('Body reçu:', req.body);
    console.log('Utilisateur:', req.user);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Erreurs de validation:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    console.log('Données de l\'article à créer:', {
      ...req.body,
      owner: req.user!._id,
    });

    const article = new Article({
      ...req.body,
      owner: req.user!._id,
    });

    console.log('Article avant save:', article);

    await article.save();
    
    console.log('Article sauvegardé avec succès');

    await article.populate('owner', 'username');
    
    console.log('Article avec owner populé:', article);

    res.status(201).json(article);
  } catch (error) {
    console.error('Erreur détaillée:', error);
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message);
      console.error('Stack trace:', error.stack);
    }
    res.status(500).json({ error: 'Erreur lors de la création de l\'article' });
  }
});

// Mettre à jour un article
router.put('/:id', auth, articleValidation, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

    // Vérifier que l'utilisateur est le propriétaire
    if (article.owner.toString() !== req.user!._id.toString()) {
      return res.status(403).json({ error: 'Non autorisé à modifier cet article' });
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    ).populate('owner', 'username');

    res.json(updatedArticle);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'article' });
  }
});

// Supprimer un article
router.delete('/:id', auth, async (req: Request, res: Response) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

    // Vérifier que l'utilisateur est le propriétaire
    if (article.owner.toString() !== req.user!._id.toString()) {
      return res.status(403).json({ error: 'Non autorisé à supprimer cet article' });
    }

    await article.deleteOne();
    res.json({ message: 'Article supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'article' });
  }
});

export default router;

```

# server/src/routes/auth.ts

```ts
import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { User } from '../models';
import auth from '../middleware/auth';

const router = express.Router();

// Validation des entrées
const registerValidation = [
  body('email').isEmail().withMessage('Email invalide'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Le mot de passe doit contenir au moins 6 caractères'),
  body('username')
    .isLength({ min: 3 })
    .withMessage('Le nom d\'utilisateur doit contenir au moins 3 caractères')
];

// Route d'inscription
router.post('/register', registerValidation, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, username } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ 
        error: 'Un utilisateur existe déjà avec cet email ou ce nom d\'utilisateur' 
      });
    }

    // Créer le nouvel utilisateur
    const user = new User({ email, password, username });
    await user.save();

    // Générer le token
    const token = user.generateAuthToken();

    res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

// Route de connexion
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Trouver l'utilisateur avec le mot de passe (select('+password'))
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Vérifier le mot de passe
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Générer le token
    const token = user.generateAuthToken();

    res.json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
});

// Route pour obtenir le profil utilisateur
router.get('/me', auth, async (req: Request, res: Response) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du profil' });
  }
});

// Route de déconnexion
router.post('/logout', auth, (_req: Request, res: Response) => {
  try {
    res.json({ message: 'Déconnexion réussie' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la déconnexion' });
  }
});

export default router;
```

# server/src/routes/upload.ts

```ts
import express from 'express';
import { upload, imageService } from '../services/uploadService';
import auth from '../middleware/auth';

const router = express.Router();

// Route pour un seul fichier
router.post('/single', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Aucun fichier fourni' });
    }

    const processedImage = await imageService.processImage(req.file);
    
    res.status(200).json({
      message: 'Fichier téléchargé avec succès',
      image: processedImage
    });
  } catch (error) {
    console.error('Erreur lors du traitement de l\'image:', error);
    res.status(500).json({ error: 'Erreur lors du traitement de l\'image' });
  }
});

// Route pour plusieurs fichiers
router.post('/multiple', auth, upload.array('files', 4), async (req, res) => {
  try {
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      return res.status(400).json({ error: 'Aucun fichier fourni' });
    }

    const processedImages = await Promise.all(
      (req.files as Express.Multer.File[]).map(file => imageService.processImage(file))
    );

    res.status(200).json({
      message: 'Fichiers téléchargés avec succès',
      images: processedImages
    });
  } catch (error) {
    console.error('Erreur lors du traitement des images:', error);
    res.status(500).json({ error: 'Erreur lors du traitement des images' });
  }
});

// Route spécifique pour l'upload des images d'articles
router.post('/images', auth, upload.array('images', 4), async (req, res) => {
  try {
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      return res.status(400).json({ error: 'Aucun fichier fourni' });
    }

    const processedImages = await Promise.all(
      (req.files as Express.Multer.File[]).map(file => imageService.processImage(file))
    );

    res.status(200).json({
      message: 'Images téléchargées avec succès',
      images: processedImages
    });
  } catch (error) {
    console.error('Erreur lors du traitement des images:', error);
    res.status(500).json({ error: 'Erreur lors du traitement des images' });
  }
});

export default router;
```

# server/src/services/uploadService.ts

```ts
// server/src/services/uploadService.ts

import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';

// Définition centralisée des chemins pour l'upload des fichiers
// Ces chemins sont relatifs à la racine du projet et serviront pour tout le service
const UPLOAD_PATHS = {
  temp: path.join(__dirname, '../../uploads/temp'),    // Dossier temporaire pour les uploads
  final: path.join(__dirname, '../../uploads/images')  // Dossier final pour les images traitées
};

// Cette fonction génère un nom de fichier unique et sécurisé pour éviter les collisions
// Elle utilise un identifiant aléatoire cryptographique pour garantir l'unicité
const generateFileName = (originalname: string): string => {
  const uniqueId = crypto.randomBytes(16).toString('hex');
  const extension = path.extname(originalname).toLowerCase();
  return `${uniqueId}${extension}`;
};

// Configuration du stockage des fichiers avec multer
// Cette configuration définit où et comment les fichiers seront sauvegardés initialement
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOAD_PATHS.temp);
  },
  filename: (_req, file, cb) => {
    cb(null, generateFileName(file.originalname));
  }
});

// Validation des types de fichiers acceptés
// Cette fonction filtre les fichiers pour n'accepter que les images aux formats spécifiés
const fileFilter = (_req: any, file: any, cb: any) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Format de fichier non supporté. Utilisez JPG, PNG ou WebP.'), false);
  }
};

// Configuration complète de multer avec toutes nos options
// Cette configuration sera utilisée pour gérer les uploads de fichiers
export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite la taille des fichiers à 5MB
    files: 4                   // Maximum 4 fichiers par upload
  },
  fileFilter
});

// Service principal pour le traitement des images
// Cette classe gère tout le cycle de vie des images, de leur réception à leur optimisation
class ImageService {
  // Configuration des différentes tailles d'images qui seront générées
  private readonly FINAL_DIR = UPLOAD_PATHS.final;
  private readonly SIZES = {
    thumbnail: { width: 150, height: 150 },  // Pour les aperçus
    medium: { width: 800, height: 600 },     // Pour l'affichage standard
    large: { width: 1200, height: 900 }      // Pour l'affichage plein écran
  };

  constructor() {
    // Initialisation des dossiers nécessaires au démarrage du service
    this.initializeDirectories();
  }

  // Création des dossiers requis s'ils n'existent pas
  private async initializeDirectories() {
    const dirs = [
      UPLOAD_PATHS.temp,
      UPLOAD_PATHS.final
    ];

    for (const dir of dirs) {
      await fs.mkdir(dir, { recursive: true });
    }
  }

  // Méthode principale pour traiter une image
  // Cette méthode crée différentes versions de l'image et les optimise
  async processImage(file: Express.Multer.File) {
    try {
      const filename = path.parse(file.filename).name;
      const processedImages: Record<string, string> = {};

      // Génération des différentes tailles d'images
      for (const [size, dimensions] of Object.entries(this.SIZES)) {
        const outputFilename = `${filename}_${size}.webp`;
        const outputPath = path.join(this.FINAL_DIR, outputFilename);

        // Traitement de l'image avec sharp : redimensionnement et optimisation
        await sharp(file.path)
          .resize(dimensions.width, dimensions.height, {
            fit: 'inside',             // Conserve les proportions
            withoutEnlargement: true   // Évite l'agrandissement des petites images
          })
          .webp({ quality: 80 })       // Conversion en WebP pour une meilleure compression
          .toFile(outputPath);

        // Stockage du chemin public de l'image
        processedImages[size] = `/uploads/images/${outputFilename}`;
      }

      // Nettoyage : suppression du fichier temporaire original
      await fs.unlink(file.path);

      return processedImages;
    } catch (error) {
      console.error('Erreur lors du traitement de l\'image:', error);
      throw new Error('Échec du traitement de l\'image');
    }
  }
}

// Export d'une instance unique du service
export const imageService = new ImageService();
```

# server/tree

```
sport-sharing-app/
├── node_modules/
├── public/
├── server/           # Nouveau dossier pour le backend
│   ├── src/
│   │   ├── config/     # Configuration DB, env, etc.
│   │   ├── models/     # Modèles MongoDB
│   │   ├── routes/     # Routes API
│   │   ├── middleware/ # Middlewares personnalisés
│   │   └── app.ts      # Point d'entrée de l'application
│   ├── package.json
│   └── tsconfig.json
├── src/              # Frontend React existant
├── package.json      # Package.json du frontend
└── README.md
```

# server/uploads/images/1ad67526e74f6807346a21e18c197382_large.webp

This is a binary file of the type: Image

# server/uploads/images/1ad67526e74f6807346a21e18c197382_medium.webp

This is a binary file of the type: Image

# server/uploads/images/1ad67526e74f6807346a21e18c197382_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/3a33b68f3664b6c78ca7b66c58baec36_large.webp

This is a binary file of the type: Image

# server/uploads/images/3a33b68f3664b6c78ca7b66c58baec36_medium.webp

This is a binary file of the type: Image

# server/uploads/images/3a33b68f3664b6c78ca7b66c58baec36_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/4c4ad6c384160835ab2225669ee7442f_large.webp

This is a binary file of the type: Image

# server/uploads/images/4c4ad6c384160835ab2225669ee7442f_medium.webp

This is a binary file of the type: Image

# server/uploads/images/4c4ad6c384160835ab2225669ee7442f_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/6a312bf77ffcb3dc1451c4ea54cf103a_large.webp

This is a binary file of the type: Image

# server/uploads/images/6a312bf77ffcb3dc1451c4ea54cf103a_medium.webp

This is a binary file of the type: Image

# server/uploads/images/6a312bf77ffcb3dc1451c4ea54cf103a_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/6a88750fbf697fb49ab9a06c5bf44911_large.webp

This is a binary file of the type: Image

# server/uploads/images/6a88750fbf697fb49ab9a06c5bf44911_medium.webp

This is a binary file of the type: Image

# server/uploads/images/6a88750fbf697fb49ab9a06c5bf44911_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/18d856172ff3f5e3c2215b7726264b90_large.webp

This is a binary file of the type: Image

# server/uploads/images/18d856172ff3f5e3c2215b7726264b90_medium.webp

This is a binary file of the type: Image

# server/uploads/images/18d856172ff3f5e3c2215b7726264b90_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/90ba4a6312fd2dc648f63e3c9630abf3_large.webp

This is a binary file of the type: Image

# server/uploads/images/90ba4a6312fd2dc648f63e3c9630abf3_medium.webp

This is a binary file of the type: Image

# server/uploads/images/90ba4a6312fd2dc648f63e3c9630abf3_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/99e412dd20c95c43ab4239e79b98b3ce_large.webp

This is a binary file of the type: Image

# server/uploads/images/99e412dd20c95c43ab4239e79b98b3ce_medium.webp

This is a binary file of the type: Image

# server/uploads/images/99e412dd20c95c43ab4239e79b98b3ce_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/319eb0a6b4d47e94f2b58449e21d45e6_large.webp

This is a binary file of the type: Image

# server/uploads/images/319eb0a6b4d47e94f2b58449e21d45e6_medium.webp

This is a binary file of the type: Image

# server/uploads/images/319eb0a6b4d47e94f2b58449e21d45e6_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/d9e01ae54c419e5891311a076c231611_large.webp

This is a binary file of the type: Image

# server/uploads/images/d9e01ae54c419e5891311a076c231611_medium.webp

This is a binary file of the type: Image

# server/uploads/images/d9e01ae54c419e5891311a076c231611_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/ec67c5fa5d5a92833febb6a27262188d_large.webp

This is a binary file of the type: Image

# server/uploads/images/ec67c5fa5d5a92833febb6a27262188d_medium.webp

This is a binary file of the type: Image

# server/uploads/images/ec67c5fa5d5a92833febb6a27262188d_thumbnail.webp

This is a binary file of the type: Image

# server/uploads/images/fe9f0875edacf3eb2a9db1a1643ea700_large.webp

This is a binary file of the type: Image

# server/uploads/images/fe9f0875edacf3eb2a9db1a1643ea700_medium.webp

This is a binary file of the type: Image

# server/uploads/images/fe9f0875edacf3eb2a9db1a1643ea700_thumbnail.webp

This is a binary file of the type: Image

# src/App.tsx

```tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useAppSelector } from "./hooks/redux";
import ArticleList from "./components/articles/ArticleList";
import ArticleDetail from "./components/articles/ArticleDetail";
import ArticleForm from "./components/articles/ArticleForm";

// Page de tableau de bord basique pour le test
const Dashboard = () => (
  <div className="card">
    <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
    <p>Bienvenue sur votre tableau de bord !</p>
  </div>
);

const App: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/dashboard" replace /> : <LoginForm />
            }
          />
          <Route
            path="/register"
            element={
              token ? <Navigate to="/dashboard" replace /> : <RegisterForm />
            }
          />

          {/* Routes protégées */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles"
            element={
              <ProtectedRoute>
                <ArticleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/:id"
            element={
              <ProtectedRoute>
                <ArticleDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/new"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/edit/:id"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />

          {/* Route 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Suppression des doublons mais conservation des lignes inutilisées */}
          <Route
            path="/articles"
            element={
              <ProtectedRoute>
                <ArticleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/:id"
            element={
              <ProtectedRoute>
                <ArticleDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/new"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/edit/:id"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

```

# src/components/articles/ArticleCard.tsx

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../../types/article';
import { getImageUrl } from '../../utils/imageUtils';
interface ArticleCardProps {
  article: IArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link 
      to={`/articles/${article.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
      {article.images.length > 0 ? (
  <>
    <img
      src={getImageUrl(article.images[0])}
      alt={article.title}
      className="w-full h-full object-cover"
      onError={(e) => {
        console.error('Erreur de chargement de l\'image:', article.images[0]);
        e.currentTarget.src = 'chemin_vers_image_par_defaut';
      }}
    />
    <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
      {article.images[0]} {/* Affiche le chemin de l'image pour déboguer */}
    </div>
  </>
) : (
  <span className="text-gray-400">Image non disponible</span>
)}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {article.description}
        </p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold">
            {article.price.toFixed(2)} €
          </span>
          <span className="text-sm text-gray-500">
            {article.location}
          </span>
        </div>
        
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span>{article.owner.username}</span>
          <span>{new Date(article.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
```

# src/components/articles/ArticleDetail.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchArticleById } from '../../store/slices/articleSlice';
import { getImageUrl } from '../../utils/imageUtils';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentArticle, loading, error } = useAppSelector((state) => state.articles);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : currentArticle!.images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < currentArticle!.images.length - 1 ? prev + 1 : 0));
  };

  const handleGoBack = () => {
    navigate('/articles');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-500 p-4 rounded-md">
        {error}
      </div>
    );
  }

  if (!currentArticle) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Article non trouvé</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Bouton Retour */}
      <button
        onClick={handleGoBack}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Retour aux articles
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentArticle.title}
          </h1>

          {/* Carrousel d'images */}
          <div className="relative h-96 bg-gray-200 mb-6 rounded-lg overflow-hidden">
            {currentArticle.images.length > 0 ? (
              <>
                <img
                  src={getImageUrl(currentArticle.images[currentImageIndex])}
                  alt={`${currentArticle.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {currentArticle.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                      ←
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                      →
                    </button>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                      {currentArticle.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex
                              ? 'bg-white'
                              : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">Aucune image disponible</span>
              </div>
            )}
          </div>

          {/* Informations principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{currentArticle.description}</p>
            </div>
            <div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary">
                    {currentArticle.price.toFixed(2)} € / jour
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Catégorie:</span>{" "}
                    {currentArticle.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Localisation:</span>{" "}
                    {currentArticle.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Propriétaire:</span>{" "}
                    {currentArticle.owner.username}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Disponible:</span>{" "}
                    {currentArticle.availability ? "Oui" : "Non"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
```

# src/components/articles/ArticleForm.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createArticle, updateArticle, fetchArticleById } from '../../store/slices/articleSlice';
import { SportCategory } from '../../types/article';
import axios from 'axios';

// Créons une interface pour mieux gérer les images
interface UploadedImage {
  thumbnail: string;
  medium: string;
  large: string;
}
const initialFormData = {
  title: '',
  description: '',
  price: 0,
  category: SportCategory.SPORTS_HIVER,
  location: '',
  images: [] as string[],
};

const ArticleForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentArticle, loading, error } = useAppSelector((state) => state.articles);

  const [formData, setFormData] = useState(initialFormData);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && currentArticle) {
      setFormData({
        title: currentArticle.title,
        description: currentArticle.description,
        price: currentArticle.price,
        category: currentArticle.category,
        location: currentArticle.location,
        images: currentArticle.images
      });
    }
  }, [currentArticle, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadError(null);
      setUploadLoading(true);
  
      const files = e.target.files;
      if (!files || files.length === 0) return;
  
      // Vérification du nombre maximal d'images
      if (uploadedImages.length + files.length > 4) {
        setUploadError('Maximum 4 images autorisées');
        return;
      }
  
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('images', file);
      });
  
      const response = await axios.post('/api/upload/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });


    // Mise à jour des états
    const newImages = response.data.images as UploadedImage[];
    setUploadedImages(prev => [...prev, ...newImages]);
    
    // Mise à jour du formData avec les URLs des images (version medium)
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages.map(img => img.medium)]
    }));

  } catch (error) {
    console.error('Erreur upload:', error);
    setUploadError('Erreur lors de l\'upload des images. Veuillez réessayer.');
  } finally {
    setUploadLoading(false);
  }
};
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await dispatch(updateArticle({ id, data: formData })).unwrap();
      } else {
        await dispatch(createArticle(formData)).unwrap();
      }
      navigate('/articles');
    } catch (err) {
      console.error('Error submitting article:', err);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {id ? 'Modifier l\'article' : 'Créer un article'}
      </h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titre
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Prix par jour (€)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              required
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Catégorie
            </label>
            <select
              name="category"
              id="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="form-input"
            >
              {Object.values(SportCategory).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Localisation
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="form-input"
          />
        </div>

       <div>
  <label className="block text-sm font-medium text-gray-700">
    Images
  </label>
  
  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handleImageUpload}
    className="hidden"
    id="image-upload"
    disabled={uploadLoading || uploadedImages.length >= 4}
  />
  
  <label
    htmlFor="image-upload"
    className={`mt-2 block w-full p-4 border-2 border-dashed rounded-lg text-center cursor-pointer
      ${uploadedImages.length >= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
    `}
  >
    {uploadLoading ? (
      <span>Chargement en cours...</span>
    ) : (
      <span>
        {uploadedImages.length >= 4 
          ? 'Nombre maximum d\'images atteint'
          : 'Cliquez ou glissez pour ajouter des images'}
      </span>
    )}
  </label>

  {uploadError && (
    <p className="mt-2 text-sm text-red-600">
      {uploadError}
    </p>
  )}

  {/* Prévisualisation des images */}
  {uploadedImages.length > 0 && (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {uploadedImages.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={`http://localhost:5001${image.medium}`}
            alt={`Aperçu ${index + 1}`}
            className="w-full h-48 object-cover rounded"
          />
          <button
            type="button"
            onClick={() => handleRemoveImage(index)}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            aria-label="Supprimer l'image"
          >
            x
          </button>
        </div>
      ))}
    </div>
  )}
</div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/articles')}
            className="btn-outline"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Enregistrement...' : id ? 'Mettre à jour' : 'Créer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
```

# src/components/articles/ArticleList.tsx

```tsx
// src/components/articles/ArticleList.tsx

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchArticles } from '../../store/slices/articleSlice';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import { SportCategory } from '../../types/article';

const ArticleList: React.FC = () => {
  // Initialisation des hooks Redux et récupération du state
  const dispatch = useAppDispatch();
  const { 
    articles, 
    loading, 
    error, 
    currentPage, 
    totalPages 
  } = useAppSelector((state) => state.articles);
  
  // États locaux pour la gestion des filtres et de la pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(9); // Nombre d'articles par page

  // Composant pour gérer la pagination
  const PaginationSection = () => (
    <div className="mt-6 flex justify-center gap-2">
      <button
        onClick={() => setPage(page => Math.max(1, page - 1))}
        disabled={currentPage === 1}
        className="btn-outline"
      >
        Précédent
      </button>
      <span className="px-4 py-2 text-gray-700">
        Page {currentPage} sur {totalPages}
      </span>
      <button
        onClick={() => setPage(page => Math.min(totalPages, page + 1))}
        disabled={currentPage === totalPages}
        className="btn-outline"
      >
        Suivant
      </button>
    </div>
  );

  // Composant pour les filtres de recherche
  const FilterSection = () => (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Rechercher
          </label>
          <input
            type="text"
            id="search"
            className="form-input w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un article..."
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie
          </label>
          <select
            id="category"
            className="form-input w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {Object.values(SportCategory).map((category) => (
              <option key={category} value={category}>
                {category.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  // Effet pour charger les articles lors des changements de filtres ou pagination
  useEffect(() => {
    dispatch(fetchArticles({
      page,
      limit,
      search: searchQuery,
      category: selectedCategory
    }));
  }, [dispatch, page, limit, searchQuery, selectedCategory]);

  // Gestion des états de chargement et d'erreur
  if (loading) {
    return (
      <div role="progressbar" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-500 p-4 rounded-md">
        {error}
      </div>
    );
  }

  // Gestion du cas où il n'y a pas d'articles
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Aucun article disponible pour le moment</p>
        <Link to="/articles/new" className="btn-primary mt-4">
          Créer un article
        </Link>
      </div>
    );
  }

  // Rendu principal de la liste des articles
  return (
    <div>
      {/* En-tête avec titre et bouton de création */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Articles disponibles</h1>
        <Link to="/articles/new" className="btn-primary">
          Créer un article
        </Link>
      </div>

      {/* Section des filtres */}
      <FilterSection />

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Pagination (affichée uniquement s'il y a plus d'une page) */}
      {totalPages > 1 && <PaginationSection />}
    </div>
  );
};

export default ArticleList;
```

# src/components/auth/LoginForm.tsx

```tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login } from '../../store/slices/authSlice';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await dispatch(login(formData)).unwrap();
      if (result) {
        navigate('/dashboard'); // Rediriger vers le dashboard après connexion
      }
    } catch (error) {
      // L'erreur est déjà gérée dans le state Redux
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Connexion
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Chargement...
                </span>
              ) : (
                'Se connecter'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
```

# src/components/auth/ProtectedRoute.tsx

```tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    // Rediriger vers la page de connexion tout en sauvegardant la page demandée
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
```

# src/components/auth/RegisterForm.tsx

```tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { register } from '../../store/slices/authSlice';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Reset password error when user types
    if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Les mots de passe ne correspondent pas');
      return;
    }

    const { confirmPassword, ...registerData } = formData;
    
    try {
      const result = await dispatch(register(registerData)).unwrap();
      if (result) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Créer un compte
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm">
              {error}
            </div>
          )}
          {passwordError && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm">
              {passwordError}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nom d'utilisateur
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.username}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                minLength={6}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
                minLength={6}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Chargement...
                </span>
              ) : (
                'S\'inscrire'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
```

# src/components/layout/Footer.tsx

```tsx
// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p>© 2024 Sport Sharing. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

# src/components/layout/Header.tsx

```tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/slices/authSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, token } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/login");
    }
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            Sport Sharing
          </Link>

          <div className="flex items-center space-x-4">
            {token ? (
              <>
             
                <Link
                  to="/articles"
                  className="text-gray-600 hover:text-primary"
                >
                  Articles
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-primary"
                >
                  Tableau de bord
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{user?.username}</span>
                  <button onClick={handleLogout} className="btn-secondary">
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-primary">
                  Connexion
                </Link>
                <Link to="/register" className="btn-secondary">
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

```

# src/components/layout/Layout.tsx

```tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

# src/hooks/redux.ts

```ts
// src/hooks/redux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply antialiased;
  }
  
  body {
    @apply bg-gray-50 text-gray-900;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200;
  }
  
  .btn-primary {
    @apply btn bg-primary text-white hover:bg-primary-dark focus:ring-primary;
  }
  
  .btn-secondary {
    @apply btn bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary;
  }
  
  .btn-outline {
    @apply btn border-gray-300 bg-white text-gray-700 hover:bg-gray-50;
  }
  
  .form-input {
    @apply mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
           focus:outline-none focus:ring-primary focus:border-primary
           disabled:bg-gray-100 disabled:cursor-not-allowed;
  }
  
  .form-label {
    @apply block text-sm font-medium text-gray-700;
  }
  
  .error-message {
    @apply text-sm text-error mt-1;
  }
  
  .success-message {
    @apply text-sm text-success mt-1;
  }
  
  .card {
    @apply bg-white shadow-md rounded-lg p-6;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```

# src/index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './utils/axiosConfig';
import { store } from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

# src/pages/Home.tsx

```tsx
// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800">
        Bienvenue sur Sport Sharing
      </h1>
      <p className="mt-4 text-gray-600">
        Partagez et louez du matériel de sport facilement
      </p>
    </div>
  );
};

export default Home;
```

# src/react-app-env.d.ts

```ts
/// <reference types="react-scripts" />

```

# src/setupTests.ts

```ts
// src/setupTests.ts
/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock des handlers API
export const handlers = [
  rest.post('/api/auth/login', (req, res, ctx) => {
    const { email, password } = req.body as any;
    
    if (email === 'test@test.com' && password === 'password123') {
      return res(
        ctx.status(200),
        ctx.json({
          user: { id: '1', email, username: 'testuser' },
          token: 'fake-jwt-token'
        })
      );
    }
    
    return res(
      ctx.status(401),
      ctx.json({ error: 'Email ou mot de passe incorrect' })
    );
  }),

  rest.post('/api/auth/register', (req, res, ctx) => {
    const { email, password, username } = req.body as any;
    
    return res(
      ctx.status(201),
      ctx.json({
        user: { id: '1', email, username },
        token: 'fake-jwt-token'
      })
    );
  }),
];

// Création du serveur MSW
export const server = setupServer(...handlers);

// Setup des intercepteurs de requêtes pour les tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Mock de localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as Storage;
```

# src/store/index.ts

```ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import articleReducer from './slices/articleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articleReducer  // On ajoute le reducer articles
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

# src/store/slices/articleSlice.ts

```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IArticle } from '../../types/article';

interface ArticlesState {
  articles: IArticle[];
  currentArticle: IArticle | null;
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
}

const initialState: ArticlesState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null,
  totalPages: 1,
  currentPage: 1,
};

// Helper pour inclure le token JWT dans les requêtes
const getAuthHeaders = (token: string | null) => {
  return token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};
};

// Thunks
export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (
    params: { page?: number; limit?: number; category?: string; search?: string } = {},
    { rejectWithValue, getState }
  ) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.get('/api/articles', {
        params,
        ...getAuthHeaders(token),
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la récupération des articles');
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  'articles/fetchOne',
  async (id: string, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.get(`/api/articles/${id}`, getAuthHeaders(token));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la récupération de l\'article');
    }
  }
);

export const createArticle = createAsyncThunk(
  'articles/create',
  async (articleData: Partial<IArticle>, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.post('/api/articles', articleData, getAuthHeaders(token));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la création de l\'article');
    }
  }
);

export const updateArticle = createAsyncThunk(
  'articles/update',
  async ({ id, data }: { id: string; data: Partial<IArticle> }, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.put(`/api/articles/${id}`, data, getAuthHeaders(token));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la mise à jour de l\'article');
    }
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearCurrentArticle: (state) => {
      state.currentArticle = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Articles
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Single Article
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create Article
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = [...state.articles, action.payload];
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update Article
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.articles.findIndex(article => article.id === action.payload.id);
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCurrentArticle, clearError } = articleSlice.actions;
export default articleSlice.reducer;

```

# src/store/slices/authSlice.ts

```ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  username: string;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { user, token };
    } catch (error: any) {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      return rejectWithValue(
        error.response?.data?.error || 'Erreur lors de la connexion'
      );
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData: RegisterData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { user, token };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error || 'Erreur lors de l\'inscription'
      );
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/auth/logout');
      return null;
    } catch (error: any) {
      console.error('Erreur lors de la déconnexion:', error);
      return rejectWithValue('Erreur lors de la déconnexion');
    } finally {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/auth/me');
      return response.data;
    } catch (error: any) {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      return rejectWithValue('Session expirée');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isLoading = false;
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.user = null;
        state.token = null;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.user = null;
        state.token = null;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.error = action.payload as string;
        state.isLoading = false;
      })
      // Check Auth
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearAuth } = authSlice.actions;
export default authSlice.reducer;
```

# src/tests/integration/articles.test.tsx

```tsx
// src/tests/integration/articles.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import ArticleList from '../../components/articles/ArticleList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockArticles = [
  {
    id: '1',
    title: 'Skis',
    description: 'Skis pour débutant',
    price: 25,
    category: 'SPORTS_HIVER',
    location: 'Chamonix',
    owner: {
      id: '1',
      username: 'john'
    },
    images: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    availability: true
  }
];

const server = setupServer(
  rest.get('http://localhost:5001/api/articles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        articles: mockArticles,
        currentPage: 1,
        totalPages: 1,
        totalArticles: 1
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('ArticleList Integration', () => {
  test('should load and display articles', async () => {
    renderWithProviders(<ArticleList />);
    
    // Should show loading state first
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Skis')).toBeInTheDocument();
      expect(screen.getByText('25.00 €')).toBeInTheDocument();
      expect(screen.getByText('Chamonix')).toBeInTheDocument();
    });
  });

  test('should handle error state', async () => {
    server.use(
      rest.get('http://localhost:5001/api/articles', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<ArticleList />);
    
    await waitFor(() => {
      expect(screen.getByText(/erreur/i)).toBeInTheDocument();
    });
  });
});
```

# src/tests/integration/auth.test.tsx

```tsx
// src/tests/integration/auth.test.ts
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

// Mock de react-router-dom pour les tests de navigation
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

// Helper pour le rendu avec providers
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('Auth Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe('Login Form', () => {
    beforeEach(() => {
      renderWithProviders(<LoginForm />);
    });

    test('should render login form', () => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/mot de passe/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /se connecter/i })).toBeInTheDocument();
    });

    test('should handle empty form submission', async () => {
      const submitButton = screen.getByRole('button', { name: /se connecter/i });
      
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/l'email est requis/i)).toBeInTheDocument();
        expect(screen.getByText(/le mot de passe est requis/i)).toBeInTheDocument();
      });
    });

    test('should show error with invalid credentials', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/mot de passe/i);
      const submitButton = screen.getByRole('button', { name: /se connecter/i });

      fireEvent.change(emailInput, { target: { value: 'invalid@test.com' } });
      fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/email ou mot de passe incorrect/i)).toBeInTheDocument();
      });
    });

    test('should login successfully with valid credentials', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/mot de passe/i);
      const submitButton = screen.getByRole('button', { name: /se connecter/i });

      fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
      });
    });

    test('should disable form during submission', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/mot de passe/i);
      const submitButton = screen.getByRole('button', { name: /se connecter/i });

      fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);

      expect(submitButton).toBeDisabled();
      expect(emailInput).toBeDisabled();
      expect(passwordInput).toBeDisabled();

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
      });
    });
  });

  describe('Register Form', () => {
    beforeEach(() => {
      renderWithProviders(<RegisterForm />);
    });

    test('should render register form', () => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/nom d'utilisateur/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/mot de passe/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/confirmer le mot de passe/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /s'inscrire/i })).toBeInTheDocument();
    });

    test('should handle empty form submission', async () => {
      const submitButton = screen.getByRole('button', { name: /s'inscrire/i });
      
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/l'email est requis/i)).toBeInTheDocument();
        expect(screen.getByText(/le nom d'utilisateur est requis/i)).toBeInTheDocument();
        expect(screen.getByText(/le mot de passe est requis/i)).toBeInTheDocument();
      });
    });

    test('should validate matching passwords', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const usernameInput = screen.getByLabelText(/nom d'utilisateur/i);
      const passwordInput = screen.getByLabelText(/mot de passe/i);
      const confirmInput = screen.getByLabelText(/confirmer le mot de passe/i);

      fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password124' } });

      const submitButton = screen.getByRole('button', { name: /s'inscrire/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/les mots de passe ne correspondent pas/i)).toBeInTheDocument();
      });
    });

    test('should register successfully with valid data', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const usernameInput = screen.getByLabelText(/nom d'utilisateur/i);
      const passwordInput = screen.getByLabelText(/mot de passe/i);
      const confirmInput = screen.getByLabelText(/confirmer le mot de passe/i);
      const submitButton = screen.getByRole('button', { name: /s'inscrire/i });

      fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
      });
    });
  });

  describe('Protected Route', () => {
    test('should redirect to login when not authenticated', () => {
      renderWithProviders(
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      );

      expect(mockNavigate).toHaveBeenCalledWith('/login', expect.any(Object));
    });

    test('should render content when authenticated', () => {
      localStorage.setItem('token', 'fake-token');
      store.dispatch({ type: 'auth/setToken', payload: 'fake-token' });

      renderWithProviders(
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      );

      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });
  });
});
```

# src/types/article.ts

```ts
// src/types/article.ts

export enum SportCategory {
  SPORTS_HIVER = 'SPORTS_HIVER',
  SPORTS_NAUTIQUES = 'SPORTS_NAUTIQUES',
  SPORTS_RAQUETTE = 'SPORTS_RAQUETTE'
}

// Interface pour un article individuel
export interface IArticle {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: SportCategory;
  location: string;
  owner: {
      id: string;
      username: string;
  };
  createdAt: string;
  updatedAt: string;
  availability: boolean;
}

// Nouvelle interface pour la réponse paginée
export interface ArticlesResponse {
  articles: IArticle[];
  currentPage: number;
  totalPages: number;
  totalArticles: number;
}
```

# src/utils/axiosConfig.ts

```ts
import axios from 'axios';

// Configuration de base
axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Intercepteur pour ajouter le token à chaque requête
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axios;
```

# src/utils/imageUtils.ts

```ts
// src/utils/imageUtils.ts
export const getImageUrl = (path: string) => {
    if (!path) return '';
    // Si l'URL est déjà complète, la retourner telle quelle
    if (path.startsWith('http')) return path;
    // Sinon, ajouter l'URL de base
    return `${process.env.REACT_APP_API_URL || 'http://localhost:5001'}${path}`;
  };
```

