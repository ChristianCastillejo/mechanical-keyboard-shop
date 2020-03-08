import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-color: #ccc;
  padding: 0;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  margin-bottom: 4rem;
  padding: 0 8rem;
  color: #292f33;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  a
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
