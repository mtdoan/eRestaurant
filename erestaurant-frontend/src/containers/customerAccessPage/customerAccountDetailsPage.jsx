import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { Navbar } from "../../components/navbar";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Container, Row, Col } from 'react-grid';
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";

export function CustomerAccountDetailsPage() {
  const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  @media screen and (max-width: ${deviceSize.mobile}px) {height: 700px; background-position: 0px 0px;}
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  //margin-top: 20px;
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(205, 2, 36, 0.9); 
  &:focus {outline: none;}
  &:hover { background: #fff; color: rgba(205, 2, 36, 0.9);}
`;

const Input = styled.input`
  padding: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: 10x;
  width: 290px;
  `;

  const InnerPageContainer = styled.div`
    width: 70%;
    min-height: 70vh;
    flex-direction: column;
    background: #ffffff;
  `;

  const InputHeading = styled.p`
    justify-content: flex-left;
  `;

  const history = useHistory();

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
            <Navbar useTransparent/>
            <TopSectionInnerContainer>
              <InnerPageContainer>
              <Marginer direction="vertical" margin="1em"/> 
              <h1>Account Details</h1>
                    <Container>
                        <Row>
                            <Col sm>    
                              <InputHeading>First Name:</InputHeading>
                              <Input placeholder="First Name*" />
                              <Marginer direction="vertical" margin="2em"/> 
                              <p>Email:</p> 
                              <Input placeholder="Email*" />
                              <Marginer direction="vertical" margin="2em"/> 
                              <p>Password:</p> 
                              <Input placeholder="Password*" />
                            </Col>
                            <Col sm>    
                              <p>Last Name:</p>
                              <Input placeholder="Last Name*" />
                              <Marginer direction="vertical" margin="2em"/> 
                              <p>Phone Number:</p> 
                              <Input placeholder="Phone Number" />
                            </Col>
                        </Row>
                    </Container>
                    <Marginer direction="vertical" margin="3em"/> 
                    <SubmitButton onClick={()=> history.push("./customerAccountPage")}>Save Details</SubmitButton>
                </InnerPageContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}
