import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className='container'>
      <Sidebar>
      <div className='dashboardpage'>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hi {user.name}!</h2>)}
      </div>
      </Sidebar>
    </div>

  )
}
