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