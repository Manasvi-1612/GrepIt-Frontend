import React, { useState } from 'react';
import './assets/styles/App.css';
import Loader from './components/Loader.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp.js';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoaderComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      {!loadingComplete && <Loader onLoaderComplete={handleLoaderComplete} />}
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
