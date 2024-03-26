import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

const Settings = () => {
  const { user, setUser } = useContext(UserContext); 
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5173/settings/${user._id}`, {
        name,
        email,
      }, { withCredentials: true });
      alert('User details updated successfully!');
      setUser(response.data);
    } catch (error) {
      console.error('Failed to update user details:', error);
      alert('Failed to update user details.');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    try {
      await axios.put(`http://localhost:5173/settings/${user._id}`, {
        currentPassword,
        newPassword,
      }, { withCredentials: true });
      alert('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Failed to change password:', error);
      alert('Failed to change password.');
    }
  };

  return (
    <Sidebar>
      <div className='settingspage'>
        <div className='page-title'>Settings</div>
        <div className="profile-details">
          <h1>User Settings</h1>
          <form className="profile-form" onSubmit={handleUpdateDetails}><br />
            <input type='text' placeholder='User Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='User Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' className='submit-button'>Update User Details</button>
          </form>
          <form className="profile-form" onSubmit={handleChangePassword}><br />
            <input type='password' placeholder='Current Password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            <input type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <input type='password' placeholder='Confirm New Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type='submit' className='submit-button'>Change Password</button>
          </form>
        </div>
      </div>
    </Sidebar>
  )
}

export default Settings;
