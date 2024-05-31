import React from 'react';
import { MarketListContainer, MarketCard } from '../styles';

const MarketList = ({ markets }) => (
  <MarketListContainer>
    {markets.map((market, index) => (
      <MarketCard key={index}>
        <div>{market.name}</div>
        <div>{market.volume}</div>
      </MarketCard>
    ))}
  </MarketListContainer>
);

export default MarketList;
