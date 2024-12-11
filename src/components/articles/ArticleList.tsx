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