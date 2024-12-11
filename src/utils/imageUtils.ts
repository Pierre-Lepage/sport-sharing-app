// src/utils/imageUtils.ts
export const getImageUrl = (path: string) => {
    if (!path) return '';
    // Si l'URL est déjà complète, la retourner telle quelle
    if (path.startsWith('http')) return path;
    // Sinon, ajouter l'URL de base
    return `${process.env.REACT_APP_API_URL || 'http://localhost:5001'}${path}`;
  };