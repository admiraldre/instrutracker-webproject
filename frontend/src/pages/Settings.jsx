import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

const Settings = () => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <Sidebar>
      <div className='settingspage'>
        <div className='page-title'>Settings</div>
        <div className="profile-details">
          <h1>{!!user && (<h2>{user.name}</h2>)}</h1>
          <form className="profile-form"><br />
            <input type='text' placeholder='User Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='User Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Current Password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            <input type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <input type='password' placeholder='Confirm New Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type='submit' className='submit-button'>Update User Details</button>
          </form>
        </div>
      </div>
    </Sidebar>

  )
}

export default Settings
