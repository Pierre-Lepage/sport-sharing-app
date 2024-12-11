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