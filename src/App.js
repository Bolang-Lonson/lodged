import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
