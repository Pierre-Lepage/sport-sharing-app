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