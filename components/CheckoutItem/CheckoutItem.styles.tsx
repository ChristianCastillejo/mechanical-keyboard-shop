import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr auto;
  min-height: 4rem;
  border-bottom: 1px solid darkgrey;
  padding: 0.5rem 0;
  font-size: 1rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding-right: 1rem;
  img {
    width: 100%;
    height: 60%;
  }

  @media (max-width: 50rem) {
    padding-right: unset;
  }
`;

export const TextContainer = styled.span`
  padding: 0 1rem;
`;

export const QuantityContainer = styled(TextContainer)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0.5rem;

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 0.8rem;
  cursor: pointer;
`;
