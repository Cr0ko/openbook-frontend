import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const Market = ({ logo, bgColor, font }) => {
  const { id } = useParams();

  return (
    <div style={{ backgroundColor: bgColor, fontFamily: font }}>
      <Navbar logo={logo} bgColor={bgColor} />
      <div>Market Details for {id}</div>
    </div>
  );
};

export default Market;
