import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Sidebar>
      <div className=''>
        <div className='dashboardpage'>
          <div className="dashboard-top">
            <div className='page-title'>Dashboard</div>
            <div className="dashboard-greeting">{!!user && (<h2>Hello {user.name}!</h2>)}</div>
          </div>

          <div className="goal-section">This is the goal section</div>
          <div className="practice-section">This is the practice section</div>
          <div className="achievement-section">This is the achievement section</div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
