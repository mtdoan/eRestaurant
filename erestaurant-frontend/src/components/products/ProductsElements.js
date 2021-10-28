import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  color: #000;
  justify-content: space-around;
`;

export const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
 `;

export const ProductScrollDiv = styled.div`
  margin-left: 1rem;
  overflow-y: scroll;
  border:1px solid red;
  width: 60%;
  float: left;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CartScrollDiv = styled.div`
  overflow-y: scroll;
  border:1px solid red;
  width: 700px;
  float: left;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 0 1rem 1rem;
`;

export const ProductCard = styled.div`
  margin: 15px 1rem;
  max-width: 370px;
  width: 100%;
  overflow: hidden;
  height: 250px;
  box-shadow: 0 0 5px #ccc;
  padding: 10px;
  background-color: #fff;
`;

export const CardBox = styled.img`
  margin: 15px 0;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  color: rgb(205, 2, 36);
`;

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  margin: auto;
`;

export const ProductInfo = styled.div`
  width: 80%;
  padding: 1rem;
  text-align: start;
`;

export const ProductDescription = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProductButton = styled.button`
  height: fit-content;
  font-size: 0.8rem;
  border: none;
  outline: none;
  background: rgb(205, 2, 36);
  border-radius: 16px;
  color: #fff;
  transition: 0.2 ease-out;
  text-align: center;
  padding: 0.6rem 1rem;
  margin: 10px;
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