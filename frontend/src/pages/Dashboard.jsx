import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (

    <Sidebar>
      <div className='container'>
        <div className='dashboardpage'>
          <h1>Dashboard</h1>
          {!!user && (<h2>Hi {user.name}!</h2>)}
        </div>
      </div>

    </Sidebar>


  )
}
