import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/slices/authSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, token } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/login");
    }
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            Sport Sharing
          </Link>

          <div className="flex items-center space-x-4">
            {token ? (
              <>
             
                <Link
                  to="/articles"
                  className="text-gray-600 hover:text-primary"
                >
                  Articles
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-primary"
                >
                  Tableau de bord
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{user?.username}</span>
                  <button onClick={handleLogout} className="btn-secondary">
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-primary">
                  Connexion
                </Link>
                <Link to="/register" className="btn-secondary">
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
