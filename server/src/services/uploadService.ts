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