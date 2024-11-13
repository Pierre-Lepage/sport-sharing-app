/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1a8cff',  // Plus clair
          DEFAULT: '#0066cc', // Votre couleur actuelle
          dark: '#004d99',   // Plus foncé
        },
        secondary: {
          light: '#47d35c',  // Plus clair
          DEFAULT: '#2fb344', // Votre couleur actuelle
          dark: '#248f35',   // Plus foncé
        },
        // Couleurs spécifiques à l'application
        success: '#10B981',  // Pour les confirmations
        warning: '#F59E0B',  // Pour les alertes
        error: '#EF4444',    // Pour les erreurs
        info: '#3B82F6',     // Pour les informations
      },
      spacing: {
        '128': '32rem',  // Pour les grandes sections
        '144': '36rem',
      },
      borderRadius: {
        'card': '0.75rem',  // Pour les cartes produits
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
        'hover': '0 4px 6px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
      maxWidth: {
        'card': '18rem',
        'container': '1280px',
      },
    },
  },
  plugins: [],
}