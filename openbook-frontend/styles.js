import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || '#f0f2f5'};
  font-family: ${({ font }) => font || 'Arial, sans-serif'};
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || '#333'};
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const MarketListContainer = styled.div`
  width: 80%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarketCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ConfigContainer = styled.div`
  width: 80%;
  background-color: white;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
