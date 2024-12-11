import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useAppSelector } from "./hooks/redux";
import ArticleList from "./components/articles/ArticleList";
import ArticleDetail from "./components/articles/ArticleDetail";
import ArticleForm from "./components/articles/ArticleForm";

// Page de tableau de bord basique pour le test
const Dashboard = () => (
  <div className="card">
    <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
    <p>Bienvenue sur votre tableau de bord !</p>
  </div>
);

const App: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/dashboard" replace /> : <LoginForm />
            }
          />
          <Route
            path="/register"
            element={
              token ? <Navigate to="/dashboard" replace /> : <RegisterForm />
            }
          />

          {/* Routes protégées */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles"
            element={
              <ProtectedRoute>
                <ArticleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/:id"
            element={
              <ProtectedRoute>
                <ArticleDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/new"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/edit/:id"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />

          {/* Route 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Suppression des doublons mais conservation des lignes inutilisées */}
          <Route
            path="/articles"
            element={
              <ProtectedRoute>
                <ArticleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/:id"
            element={
              <ProtectedRoute>
                <ArticleDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/new"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/articles/edit/:id"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
