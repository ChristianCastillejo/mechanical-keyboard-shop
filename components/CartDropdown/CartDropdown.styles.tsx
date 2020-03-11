import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 120%;
  margin-left: -13rem;
  width: 18rem;
  height: 21rem;
  display: grid;
  padding: 1.2rem;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0 0.3rem 1.5rem 0 rgba(0, 0, 0, 0.15);
  z-indez: 10;

  @media (max-width: 50rem) {
    margin-left: -17rem;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 1.1rem;
  margin: 3rem auto;
`;

export const CartItemsContainer = styled.div`
  height: 15rem;
  display: grid;
  align-content: start;
  grid-gap: 3rem;
  overflow: auto;
  padding: 0.5rem;
`;
