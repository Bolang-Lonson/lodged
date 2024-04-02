import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Panel from './Components/Dashboard/panel';
import Contact from './Components/Contact/contact';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/panel' element={<Panel/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;