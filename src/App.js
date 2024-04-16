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
  const [images, setImages] = useState([]);
  const apiToken = 'T1RLAQJKaJzgXYcnTcrc09TS1Ech94x/lqdPDXSEcy/OezER6RB1jwrYpQOpAEtP2FEl2CRNAADggIUY87PkIpv4ZDhaTCjEz3LfVTaIJKfNIBQpZh4+Z16zF0HyhiNA/uAvKW4UE/xrvaPGahAvS0l8UZdg8GrHhYJti9FK2iYdJdNgPS5R6ru8ch8sQd6iQIC+SR0H3i191z0nql7oSeilodj4qwZUdWy7insgMgd5XKjvgXOt/uxkiuQAyxdwrbJs69xYXo3fGpXWL3oXEANeYiBI14xdm5W570ErFIQtv+cOGVtqT7wXVpvmlvb4o8eMqq6Pzsoc7VdJtU5ttCnXJg1F0DBpvLOoThV8mE/r9F3LM1MVAGA*';

  async function fetchImage(category) {
      return await fetch('https://api.cert.platform.sabre.com/v1.0.0/shop/hotels/media', {
          method: "post",
          headers: {
              "accept": "application/json",
              "Content-Type": "application/json",
              "authorization": `Bearer ${apiToken}`
          },
          body: JSON.stringify({
              "GetHotelMediaRQ": {
                  "HotelRefs": {
                      "HotelRef": [
                      {
                          "HotelCode": "426",
                          "CodeContext": "Sabre",
                          "ImageRef": {
                              "MaxImages": "6",
                              "Images": {
                                  "Image": [
                                  {
                                      "Type": "ORIGINAL"
                                  }
                                  ]
                              },
                              "Categories": {
                                  "Category": [
                                  {
                                      "Code": category
                                  }
                                  ]
                              },
                              "AdditionalInfo": {
                                  "Info": [
                                  {
                                      "Type": "CAPTION",
                                      "content": true
                                  }
                                  ]
                              },
                              "Languages": {
                                  "Language": [
                                  {
                                      "Code": "EN"
                                  }
                                  ]
                              }
                          }
                      }
                      ]
                  }
              }
          })
      }).then(resp => resp.json())
      .then(data => {return {
          title: data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].HotelInfo.Marketer,
          url: data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].ImageItems.ImageItem[0].Images.Image[0].Url,
          caption: data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].ImageItems.ImageItem[0].AdditionalInfo.Info[0].Description.Text[0].content
      }})
      // debugging and testing response content
  };

  const loadCards = () => {
      let imgs = [];
      [2, 3, 4, 5].forEach(categ => fetchImage(categ).then(data => imgs.push(data)));
      setImages(imgs);
      console.log(imgs, images);
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/panel/' element={<Panel shadow={shadow}/>}>
        <Route index element={<Explore setShadow={setShadow} images={images} loadCards={loadCards}/>}/>
        <Route path='/panel/dashboard' element={<Dashboard setShadow={setShadow}/>}/>
        <Route path='/panel/history' element={<History setShadow={setShadow}/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;