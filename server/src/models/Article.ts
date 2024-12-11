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