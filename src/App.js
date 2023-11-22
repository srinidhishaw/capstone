import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ChatPage from './pages/Chat/Chat';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
import Solutions from './pages/Solutions/Solutions';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
            <HomePage
            />
          }>
             </Route>

    <Route path="/solutions" element={
      <Solutions
      />
    }></Route>

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
