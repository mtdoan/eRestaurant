import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  ${'' /* height: 100vh; */}
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px rgba(205, 2, 36, 0.9);
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: rgb(205, 2, 36);
`;

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  font-weight: 800;
  padding: 1rem 1rem;
  border: none;
  background: linear-gradient(
    to right,
    rgba(225, 122, 126, 0.9),
    rgb(205, 2, 36)
  );
  border-radius: 10px;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #B71C1C;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;