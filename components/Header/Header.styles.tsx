import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-color: #5cdb95;
  padding: 0;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  margin-bottom: 4rem;
  padding: 0 8rem;
  color: #292f33;
  z-index: 10;

  @media (max-width: 50rem) {
    padding: 0 1rem;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  font-weight: bold;

  @media (max-width: 50rem) {
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  }
`;

export const A = styled.a`
  color: #292f33;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #292f33;
    text-decoration: none;
`;

export const Cart = styled.div`
  display: grid;
`;
