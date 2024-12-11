import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createArticle, updateArticle, fetchArticleById } from '../../store/slices/articleSlice';
import { SportCategory } from '../../types/article';
import axios from 'axios';

// Créons une interface pour mieux gérer les images
interface UploadedImage {
  thumbnail: string;
  medium: string;
  large: string;
}
const initialFormData = {
  title: '',
  description: '',
  price: 0,
  category: SportCategory.SPORTS_HIVER,
  location: '',
  images: [] as string[],
};

const ArticleForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentArticle, loading, error } = useAppSelector((state) => state.articles);

  const [formData, setFormData] = useState(initialFormData);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && currentArticle) {
      setFormData({
        title: currentArticle.title,
        description: currentArticle.description,
        price: currentArticle.price,
        category: currentArticle.category,
        location: currentArticle.location,
        images: currentArticle.images
      });
    }
  }, [currentArticle, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadError(null);
      setUploadLoading(true);
  
      const files = e.target.files;
      if (!files || files.length === 0) return;
  
      // Vérification du nombre maximal d'images
      if (uploadedImages.length + files.length > 4) {
        setUploadError('Maximum 4 images autorisées');
        return;
      }
  
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('images', file);
      });
  
      const response = await axios.post('/api/upload/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });


    // Mise à jour des états
    const newImages = response.data.images as UploadedImage[];
    setUploadedImages(prev => [...prev, ...newImages]);
    
    // Mise à jour du formData avec les URLs des images (version medium)
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages.map(img => img.medium)]
    }));

  } catch (error) {
    console.error('Erreur upload:', error);
    setUploadError('Erreur lors de l\'upload des images. Veuillez réessayer.');
  } finally {
    setUploadLoading(false);
  }
};
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await dispatch(updateArticle({ id, data: formData })).unwrap();
      } else {
        await dispatch(createArticle(formData)).unwrap();
      }
      navigate('/articles');
    } catch (err) {
      console.error('Error submitting article:', err);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {id ? 'Modifier l\'article' : 'Créer un article'}
      </h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titre
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Prix par jour (€)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              required
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Catégorie
            </label>
            <select
              name="category"
              id="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="form-input"
            >
              {Object.values(SportCategory).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Localisation
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="form-input"
          />
        </div>

       <div>
  <label className="block text-sm font-medium text-gray-700">
    Images
  </label>
  
  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handleImageUpload}
    className="hidden"
    id="image-upload"
    disabled={uploadLoading || uploadedImages.length >= 4}
  />
  
  <label
    htmlFor="image-upload"
    className={`mt-2 block w-full p-4 border-2 border-dashed rounded-lg text-center cursor-pointer
      ${uploadedImages.length >= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
    `}
  >
    {uploadLoading ? (
      <span>Chargement en cours...</span>
    ) : (
      <span>
        {uploadedImages.length >= 4 
          ? 'Nombre maximum d\'images atteint'
          : 'Cliquez ou glissez pour ajouter des images'}
      </span>
    )}
  </label>

  {uploadError && (
    <p className="mt-2 text-sm text-red-600">
      {uploadError}
    </p>
  )}

  {/* Prévisualisation des images */}
  {uploadedImages.length > 0 && (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {uploadedImages.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={`http://localhost:5001${image.medium}`}
            alt={`Aperçu ${index + 1}`}
            className="w-full h-48 object-cover rounded"
          />
          <button
            type="button"
            onClick={() => handleRemoveImage(index)}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            aria-label="Supprimer l'image"
          >
            x
          </button>
        </div>
      ))}
    </div>
  )}
</div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/articles')}
            className="btn-outline"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Enregistrement...' : id ? 'Mettre à jour' : 'Créer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;