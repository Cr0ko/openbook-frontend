import React, { useState } from 'react';
import { ConfigContainer } from '../styles';

const ConfigUI = ({ onSave }) => {
  const [logo, setLogo] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [font, setFont] = useState('');
  const [rpcUrl, setRpcUrl] = useState('');

  const handleSave = () => {
    onSave({ logo, bgColor, font, rpcUrl });
  };

  return (
    <ConfigContainer>
      <h2>Configuration</h2>
      <div>
        <label>Logo URL:</label>
        <input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} />
      </div>
      <div>
        <label>Background Color:</label>
        <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </div>
      <div>
        <label>Font:</label>
        <input type="text" value={font} onChange={(e) => setFont(e.target.value)} />
      </div>
      <div>
        <label>RPC URL:</label>
        <input type="text" value={rpcUrl} onChange={(e) => setRpcUrl(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
    </ConfigContainer>
  );
};

export default ConfigUI;
