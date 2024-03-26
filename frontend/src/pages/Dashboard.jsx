import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [latestGoal, setLatestGoal] = useState(null);
  const [latestSession, setLatestSession] = useState(null);

  const getAuthToken = () => localStorage.getItem('token');

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAuthToken()}`, 
    },
  });

  const fetchLatestGoal = async () => {
    try {
      const response = await axiosInstance.get('/goals/latest');
      setLatestGoal(response.data);
    } catch (error) {
      console.error('Failed to fetch the latest goal', error);
    }
  };

  const fetchLatestSession = async () => {
    try {
      const response = await axiosInstance.get('/practice/latest');
      setLatestSession(response.data);
    } catch (error) {
      console.error('Failed to fetch the latest practice session', error);
    }
  };

  useEffect(() => {
    fetchLatestGoal();
    fetchLatestSession();
  }, []);

  return (
    <Sidebar>
      <div className="">
        <div className="dashboardpage">
          <div className="dashboard-top">
            <div className="page-title">Dashboard</div>
            <div className="dashboard-greeting">{user && <h2>Hello {user.name}!</h2>}</div>
          </div>

          <div className="goal-section">
            {latestGoal ? (
              <div>
                <h3>Latest Goal</h3>
                <p>Title: {latestGoal.title}</p>
                <p>Description: {latestGoal.description}</p>
              </div>
            ) : (
              <p>No goals have been set yet.</p>
            )}
          </div>
          <div className="practice-section">
            {latestSession ? (
              <div>
                <h3>Latest Practice Session</h3>
                <p>Date: {latestSession.date}</p>
                <p>Duration: {latestSession.duration}</p>
                <p>Notes: {latestSession.notes}</p>
              </div>
            ) : (
              <p>No practice sessions have been logged yet.</p>
            )}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
