import logo from './logo.svg';
import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Diary from './components/Diary/Diary';
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
    <Route path="/conditions/diary" element={
      <Diary
      />
    }></Route>

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
