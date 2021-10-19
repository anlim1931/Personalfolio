import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Posts from './components/Posts/Posts';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Posts />
      <Works />
      <Footer />
    </div>
  )
}


export default App;
