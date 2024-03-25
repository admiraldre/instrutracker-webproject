import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Sidebar>
      <div className='container'>
        <div className='dashboardpage'>
          <div className='page-title'>My Dashboard</div>
          {!!user && (<h2>Hello {user.name}!</h2>)}
          <div className="goal-section">This is the goal section</div>
          <div className="practice-section">This is the practice section</div>
          <div className="achievement-section">This is the achievement section</div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
