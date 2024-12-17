import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Route using PrivateRoute */}
          <Route
            path="/account"
            element={
              <PrivateRoute element={<AccountPage />} />
            }
          />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
