import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Teest from './components/Teest/Teest';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        
        <Routes>
          <Route path='/news' element={<News />} />
          <Route path='/teest' element={<Teest />} />
        </Routes>
       
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
