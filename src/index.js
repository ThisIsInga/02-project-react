import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {textPost: 'Hello its my first text here', likes: '1001', dislikes: '300'},
  {textPost:'Hello there', likes:'500', dislikes:'100'},
  {textPost:'I like this website!', likes:'100', dislikes:'0'},
  {textPost:'HEY', likes:'10', dislikes:'0'},
];

let names = [
  {id: 1, name: 'Natasha'},
  {id: 2, name: 'Sasha'},
  {id: 3, name: 'Ulia'},
  {id: 4, name: 'Petrov'},
  {id: 5, name: 'Vadim'},
];

let messages = [
  {message: 'Hi'},
  {message: 'Andrey'},
  {message: 'How is your name?'},
  {message: 'Yo! Inga!'},
  {message: 'Yo!'},
  {message: 'Yo!'}, 
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} names={names} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
