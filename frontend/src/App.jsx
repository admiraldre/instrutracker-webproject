import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path ='/' element={<Home />}></Route>
        <Route path ='/register' element={<Register />}></Route>
        <Route path ='/login' element={<Login />}></Route>
        <Route path ='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
    </UserContextProvider>
  )
}

export default App
