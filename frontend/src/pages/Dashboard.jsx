import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Sidebar>
      <div className='container'>
        <div className='dashboardpage'>
          <h1>Dashboard</h1>
          {!!user && (<h2>Hello {user.name}!</h2>)}
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
