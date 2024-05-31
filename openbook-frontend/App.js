import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import ConfigUI from './components/ConfigUI';

const App = () => {
  const [config, setConfig] = useState({
    logo: '',
    bgColor: '#f0f2f5',
    font: 'Arial, sans-serif',
    rpcUrl: '',
  });

  const [markets, setMarkets] = useState([
    { name: 'Market 1', volume: '1000' },
    { name: 'Market 2', volume: '2000' },
  ]);

  const handleSaveConfig = (newConfig) => {
    setConfig(newConfig);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home {...config} markets={markets} />} />
        <Route path="/market/:id" element={<Market {...config} />} />
        <Route path="/config" element={<ConfigUI onSave={handleSaveConfig} />} />
      </Routes>
    </Router>
  );
};

export default App;
