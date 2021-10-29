import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

export const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
`;

export const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

export const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 100vh;
  padding: 0.5rem calc((100vw - 2000px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #000;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;



export const ColDiv = styled.div`
  width: 30%;
  padding: 0;
  margin: "auto"
  display: inline-block;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 16px;
`;

export const SmallColDiv = styled.div`
  width: 7%;
  padding: 0;
  margin: "auto"
  display: inline-block;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const RowDiv = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 1rem;
  display: flex;
  text-align: left;
  font-size: 16px;
`;

//
export const SubmitButton = styled.button`
  padding: 0.7rem 1.5rem;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffd6d6;
    color: rgba(205, 2, 36, 0.9);
  }
`;



export const BookingContainer = styled.div`
  width: 800px;
  flex-direction: column;
  text-align: left;
  margin: auto;
  padding: 1rem 0;  
  display: flex;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50%;
`;

export const SmallContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50%;
`;

export const DateContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 45px;
`;

export const SmallTitle = styled.h1`
  font-size: 45px;
`;

export const AnchorLink = styled(Link)`
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 10px 0;
`;

export const MenuTypeContainer = styled.div`
  font-size: 1rem;
  height: 40px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  background-color: transparent;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;