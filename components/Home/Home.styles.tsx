import styled from 'styled-components';

export const HomeContainerStyled = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 100vh;
  align-content: center;
  background-color: #5cdb95;

  h1 {
    font-size: 3rem;
    color: #05386b;

    @media (max-width: 50rem) {
      font-size: 2rem;
    }
  }
`;
export const Button = styled.a`
  background-color: #edf5e1;
  padding: 0.4rem 2rem;
  border-radius: 2rem;
  color: #05386b;

  &:hover {
    text-decoration: none;
    color: #05386b;
  }
`;
