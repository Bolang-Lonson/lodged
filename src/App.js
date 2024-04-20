import './App.css';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Panel from './Components/Dashboard/panel';
import Contact from './Components/Contact/contact';
import Dashboard from './Components/Dashboard/Panes/dashboard';
import History from './Components/Dashboard/Panes/history';
import Explore from './Components/Dashboard/Panes/explore';

const App = () => {
  const [shadow, setShadow] = useState(true);
  // boolean for whether the navbar in the panel has a shadow
  // I depends on the particular pane in view

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/panel/' element={<Panel shadow={shadow}/>}>
        <Route index element={<Explore setShadow={setShadow}/>}/>
        <Route path='/panel/dashboard' element={<Dashboard setShadow={setShadow}/>}/>
        <Route path='/panel/history' element={<History setShadow={setShadow}/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;