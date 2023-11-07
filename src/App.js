import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
            <HomePage
            />
          }>
             </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
