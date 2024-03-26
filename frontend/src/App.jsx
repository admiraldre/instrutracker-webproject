import React , {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import ResultPage from './pages/ResultPage';
import MaybeShowNavBar from './components/MaybeShowNavBar';
import About from './pages/About';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Practice from './pages/Practice';
import Goal from './pages/Goal';
import Forum from './pages/Forum';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <MaybeShowNavBar>          
            <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/result' element={<ResultPage />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
              <Route path='/profile/' element={<Profile/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/practice/' element={<Practice/>}></Route>
              <Route path='/goal/' element={<Goal/>}></Route>
              <Route path='/forum' element={<Forum/>}></Route>
              <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </MaybeShowNavBar>
        <Footer />
      </UserContextProvider>
    </div>

  )
}

export default App
