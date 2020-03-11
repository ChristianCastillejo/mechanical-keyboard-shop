import styled, { css } from 'styled-components';

export const CustomButtonStyled = styled.button`
  min-width: 10rem;
  width: auto;
  height: 3rem;
  line-height: 3rem;
  padding: 0 2rem 0 2rem;
  font-weight: bolder;
  cursor: pointer;
  display: grid;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: #292f33;
  color: white;
  border: none;

  &:hover {
    box-shadow: 0 0.4rem 1.5rem 0 rgba(0, 0, 0, 0.15);
  }
`;
