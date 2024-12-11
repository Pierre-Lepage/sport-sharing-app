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