// src/components/layout/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            Sport Sharing
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-primary">
              Connexion
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-primary">
              Inscription
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;