import React from 'react';
import Navbar from '../components/Navbar';
import MarketList from '../components/MarketList';

const Home = ({ logo, bgColor, font, markets }) => (
  <div style={{ backgroundColor: bgColor, fontFamily: font }}>
    <Navbar logo={logo} bgColor={bgColor} />
    <MarketList markets={markets} />
  </div>
);

export default Home;
