import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home />}></Route>
        <Route path ='/register' element={<Register />}></Route>
        <Route path ='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
