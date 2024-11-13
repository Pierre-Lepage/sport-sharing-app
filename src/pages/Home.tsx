// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800">
        Bienvenue sur Sport Sharing
      </h1>
      <p className="mt-4 text-gray-600">
        Partagez et louez du matériel de sport facilement
      </p>
    </div>
  );
};

export default Home;