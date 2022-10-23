import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action, comedy, horror, romance, documentaries} from './urls'
import Footer from './Components/Footer/Footer';









function App() {
  
 
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title={"Netflix Original"} url={originals}/>
      <RowPost title={"Action"} issmall url={action}/>
      <RowPost title={"Comedy"} issmall url={comedy}/>
      <RowPost title={"Romance"} issmall url={romance}/>
     
      <Footer />
      
     
     
    </div>
  );
}

export default App;
