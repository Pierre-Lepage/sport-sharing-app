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