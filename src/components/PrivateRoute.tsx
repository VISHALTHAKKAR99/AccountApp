import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserFromLocalStorage } from '../services/authService';

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const user = getUserFromLocalStorage();  // Check if the user is authenticated
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{element}</>;  // Return the protected element if authenticated
};

export default PrivateRoute;
