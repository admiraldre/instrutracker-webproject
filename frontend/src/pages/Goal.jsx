import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Goals = () => {
  const [goal, setGoal] = useState({ title: '', description: '' });
  const [goals, setGoals] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const getAuthToken = () => localStorage.getItem('token'); 

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAuthToken()}`, 
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId === null) {
        const response = await axiosInstance.post('/goals', goal);
        setGoals([...goals, response.data]);
      } else {
        await axiosInstance.put(`/goals/${editingId}`, goal);
        setGoals(goals.map((g) => (g._id === editingId ? { ...g, ...goal } : g)));
        setEditingId(null); 
      }
      fetchGoals();
      setGoal({ title: '', description: '' }); 
    } catch (error) {
      console.error('Failed to submit goal', error);
    }
  };

  const handleEdit = (id) => {
    const goalToEdit = goals.find((g) => g._id === id);
    setGoal({ title: goalToEdit.title, description: goalToEdit.description });
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/goals/${id}`);
      setGoals(goals.filter((g) => g._id !== id));
    } catch (error) {
      console.error('Failed to delete goal', error);
    }
  };

  const fetchGoals = async () => {
    try {
      const response = await axiosInstance.get('/goals');
      setGoals(response.data);
    } catch (error) {
      console.error('Failed to fetch goals', error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div>
      <Sidebar>
        <div className='goalspage'>
          <div className='page-title'>My Goals</div><br/>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Goal Title"
              value={goal.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Goal Description"
              value={goal.description}
              onChange={handleChange}
              required
            />
            <button type="submit">{editingId ? 'Update Goal' : 'Set Goal'}</button>
          </form>
          <ul>
            {goals.map((g) => (
              <li key={g._id}>
                <strong>{g.title}</strong> - {g.description}
                <button onClick={() => handleEdit(g._id)}>Edit</button>
                <button onClick={() => handleDelete(g._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </Sidebar>
    </div>
  );
};

export default Goals;
