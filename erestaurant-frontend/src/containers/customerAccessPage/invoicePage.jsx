import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { useReactToPrint } from 'react-to-print';
import { getBookingFromBookingId } from "../../components/utils/client";
import { Invoice } from './invoice';
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const InvoiceContainer = styled.div`
  width: 800px;
  flex-direction: column;
  text-align: left;
  margin: auto;
  padding: 1rem 0;  
  display: flex;
`;

  const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

  const Heading = styled.h1`
  color: #000;
  `;

  const ColDiv = styled.div`
    width: 30%;
    padding: 0;
    margin: "auto"
    display: inline-block;
    flex-direction: column;
    align-items: center;
    text-align: left;
    font-size: 16px;
  `;

  const SmallColDiv = styled.div`
    width: 7%;
    padding: 0;
    margin: "auto"
    display: inline-block;
    flex-direction: column;
    align-items: center;
    text-align: left;
  `;


  const RowDiv = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 1rem;
    display: flex;
    text-align: left;
    font-size: 16px;
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

  const InnerPageContainer = styled.div`
    width: 70%;
    min-height: 70vh;
    flex-direction: column;
    background: #ffffff;
  `;
  const SubmitButton = styled.button`
    padding: 10px;
    width: 220px;
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

export function InvoicePage() {
  const componentRef = useRef();

  const { orderId } = useParams();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    console.log('Call CART api');
  }, []);

  const history = useHistory();

  const accountpage = () => {
    history.push("/eRestaurant/customeraccount")
  }



  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent/>
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <FormContainer>
                <Marginer direction="vertical" margin="2em"/> 
                <InvoiceContainer>
                  <Invoice className="print-preview" ref={componentRef} id={orderId}/>
                </InvoiceContainer>
                <button onClick={handlePrint} style={{ width: "160px" }}>Print this out!</button>
                <Marginer direction="vertical" margin="2em"/> 
                <SubmitButton onClick={accountpage}>Return to Account Page</SubmitButton>
                <Marginer direction="vertical" margin="2em"/> 
              </FormContainer>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}
