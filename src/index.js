import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageCharacters from './components/PageCharacters';
import SpecificCharacter from './components/SpecificCharacter';
import Navbar from './components/Navbar';
import ErrorPage from './ErrorPage';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/page/:pageN' element={<PageCharacters/>}/>
        <Route path='/character/:id' element={<SpecificCharacter/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);