import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios'; 

const Practice = () => {
  const [session, setSession] = useState({ date: '', duration: '', notes: '' });
  const [sessions, setSessions] = useState([]);
  const [editingId, setEditingId] = useState(null);


  const fetchSessions = async () => {
    try {
      const response = await axios.get('/practice');
      setSessions(response.data);
    } catch (error) {
      console.error('Error fetching sessions', error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSession((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId === null) {
        await axios.post('/practice', session);
    } else {
        await axios.put(`/practice/${editingId}`, session);
        setEditingId(null);
    }    
      fetchSessions(); 
      setSession({ date: '', duration: '', notes: '' }); 
    } catch (error) {
      console.error('Error submitting session', error);
    }
  };

  const handleEdit = (id) => {
    const sessionToEdit = sessions.find((s) => s._id === id);
    setSession({ date: sessionToEdit.date, duration: sessionToEdit.duration, notes: sessionToEdit.notes });
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/practice/${id}`, {withCredentials: true});
      fetchSessions();
    } catch (error) {
      console.error('Error deleting session', error);
    }
  };

  return (
    <div>
      <Sidebar>
        <div className='practicepage'>
          <div className='page-title'>My Practice Log</div>
          <form onSubmit={handleSubmit}>
            <input type="date" name="date" value={session.date} onChange={handleChange} required />
            <input type="text" name="duration" placeholder="Duration" value={session.duration} onChange={handleChange} required />
            <textarea name="notes" placeholder="Notes" value={session.notes} onChange={handleChange} required />
            <button type="submit">{editingId ? 'Update Session' : 'Add Session'}</button>
          </form>
          <ul>
            {sessions.map((session) => (
              <li key={session._id}>
                {session.date} - {session.duration} - {session.notes}
                <button onClick={() => handleEdit(session._id)}>Edit</button>
                <button onClick={() => handleDelete(session._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </Sidebar>
    </div>
  );
};

export default Practice;
