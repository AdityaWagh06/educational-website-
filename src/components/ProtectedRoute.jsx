import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../appwriteService';

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsAuth(!!user);
      } catch {
        setIsAuth(false);
      }
    };
    checkUser();
  }, []);

  if (isAuth === null) return <div className="text-white text-center mt-10">Loading...</div>;

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
