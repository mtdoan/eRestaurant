import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 15px 0;
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
  max-width: 370px;
  width: 100%;
  overflow: hidden;
  height: 700px;
  box-shadow: 0 0 5px #ccc;
  padding: 15px;
  margin: 15px;
  background-color: #fff;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  display: block;
  object-fit: cover;
`;

export const CardBox = styled.img`
  margin: 15px 0;
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
  margin: 10px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;

`;

export const ProductButton = styled.button`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  background: rgb(205, 2, 36);
  border-radius: 10px;
  color: #fff;
  transition: 0.2 ease-out;
  text-align: center;
  padding: 10px 0;
  margin: 10px 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
      background: #B71C1C;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #fff;
  }
`;