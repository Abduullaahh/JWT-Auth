import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Home from './components/Home';
import { getCurrentUser } from './services/auth';
import './App.css';

function PrivateRoute({ children }) {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser();
      setAuth(user);
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return auth ? children : <Navigate to="/auth" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
