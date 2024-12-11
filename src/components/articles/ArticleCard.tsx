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