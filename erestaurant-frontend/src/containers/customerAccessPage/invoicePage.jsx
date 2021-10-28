import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { useReactToPrint } from 'react-to-print';
import { Invoice } from "../../components/invoice/invoice.jsx";
import { Marginer } from "../../components/marginer";
import { useHistory } from "react-router";
import { PageWrapper, BackgroundFilter, TopSectionContainer, TopSectionInnerContainer, Heading } from "../../components/commonStyle/commonStyle";

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

const InnerPageContainer = styled.div`
  width: 70%;
  min-height: 70vh;
  flex-direction: column;
  background: #ffffff;
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

  const returnAccountPage = () => {
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
                <InvoiceContainer style={{ marginTop: "-20px" }}>
                  <Invoice className="print-preview" ref={componentRef} id={orderId} />
                </InvoiceContainer>
                <SubmitButton onClick={handlePrint} style={{ width: "160px" }}>Print this out!</SubmitButton>
                <Marginer direction="vertical" margin="2em"/> 
                <SubmitButton onClick={returnAccountPage}>Return Account Page</SubmitButton>
                <Marginer direction="vertical" margin="2em"/> 
              </FormContainer>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  );
}
