import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Login from './Components/Login/login';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
