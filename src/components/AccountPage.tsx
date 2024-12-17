import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage, saveUserToLocalStorage, clearUserFromLocalStorage } from '../services/authService';
import { User } from '../types/types';

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<User | null>(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const userData = getUserFromLocalStorage();
    if (userData) {
      setUser(userData);
      setUpdatedUser(userData);  // Store a separate state for updating
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Handle Logout
  const handleLogout = (): void => {
    clearUserFromLocalStorage();
    navigate('/login');
  };

  // Handle Editing Mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle Save
  const handleSave = () => {
    if (updatedUser) {
      // Save updated user info to localStorage
      saveUserToLocalStorage(updatedUser);
      setUser(updatedUser);
      setIsEditing(false); // Exit editing mode
    }
  };

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (updatedUser) {
      setUpdatedUser({
        ...updatedUser,
        [name]: value,
      });
    }
  };

  if (!user) return null;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Account Information <span className='text-success'>Welcome, {user.username}</span></h2>

      {/* Display User Info */}
      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <strong>Username:</strong> 
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={updatedUser?.username}
              onChange={handleInputChange}
              className="form-control"
            />
          ) : (
            <span>{user.username}</span>
          )}
        </div>

        <div className="mb-3">
          <strong>Email:</strong>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={updatedUser?.email}
              onChange={handleInputChange}
              className="form-control"
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>

        {/* Edit and Save Buttons */}
        <div className="d-flex justify-content-between gap-2">
          <div>
            {isEditing ? (
             <>
             <button onClick={handleSave} className="btn btn-success" style={{ marginRight: '20px' }}>Save</button>
             <button onClick={toggleEdit} className="btn btn-secondary" style={{ marginLeft: '20px' }}>Cancel</button>
           </>
           
            ) : (
              <button onClick={toggleEdit} className="btn btn-warning">Edit</button>
            )}
          </div>

          <div>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
