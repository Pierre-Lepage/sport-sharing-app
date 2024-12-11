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
