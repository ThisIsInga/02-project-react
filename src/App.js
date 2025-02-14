import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Menu from './components/Menu/Menu';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/news' element={<News posts={props.posts}/>} />
          <Route path='/dialogs/*' element={<Dialogs names={props.names} messages={props.messages}/>} />
        </Routes>
       
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
