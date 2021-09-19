import React, { useState } from "react";
import styled from "styled-components";
import NumericInput from 'react-numeric-input';
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";
import { Container, Row, Col } from 'react-grid';
import { NavbarLoggedIn } from "../../components/navbar"; 

export function BookingPage() {

    const PageWrapper = styled.div`
        width: 100%;
        min-height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const InnerPageContainer = styled.div`
        width: 70%;
        min-height: 70vh;
        padding: 1em;
        flex-direction: column;
        background: #ffffff;
        border-bottom: 2px solid black;
        border-top: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;

    `;

    const SubmitButton = styled.button`
        padding: 10px;
        width: 250px;
        color: #000000;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all, 240ms ease-in-out;
        background: #fff; 
        border-bottom: 2px solid black;
        border-top: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
    `;

    const DropDown = styled.select`
        padding: 5px 92px;
        height: 10x;
        width: 290px;
    `;

    const Heading = styled.h1`
        color: #000000;
    `;

    const Input = styled.input`
        padding: 5px 70px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        height: 10x;
        width: 290px;
    `;

    const TopSectionContainer = styled.div`
        width: 100%;
        height: 100vh;
        background: url(${TopSectionBackgroundImg}) no-repeat;
        background-position: 0px 0px;
        background-size: cover;
        @media screen and (max-width: ${deviceSize.mobile}px) {height: 700px; background-position: 0px 0px;}
    `;

    const BackgroundFilter = styled.div`
        width: 100%;
        height: 100%;
        background-color: rgba(234, 125, 125, 0.8);
        display: flex;
        flex-direction: column;
    `;

    const TopSectionInnerContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 20px;
        background-color: #ffffff;
    `;

    const [value, setValue] = useState("default");
    const handleChange = (e) => setValue(e.target.value);

    return (
        <PageWrapper>
            <TopSectionContainer>
            <BackgroundFilter>
            <NavbarLoggedIn useTransparent />
            <TopSectionInnerContainer>
                <InnerPageContainer>
                    <Heading>Make a Booking!</Heading>
                    <Container>
                        <Row>
                            <Col sm>    
                               <p>Restaurant Location:</p>
                                <DropDown defaultValue={value} onChange={handleChange}>
                                    <option value="default" disabled hidden>Restaurant</option>
                                    <option value="Sydney">Sydney</option>
                                </DropDown>
                                <Marginer direction="vertical" margin="5em"/> 
                                <p>Booking Time:</p> 
                                <DropDown defaultValue={value} onChange={handleChange}>
                                    <option value="default" disabled hidden>Booking Time</option>
                                    <option value="12:30pm">12:30pm</option>
                                    <option value="1:30pm">1:30pm</option>
                                </DropDown>
                            </Col>
                            <Col sm>
                                <p>Number of Patrons:</p>
                                <NumericInput min={1} max={6} />
                                <Marginer direction="vertical" margin="84px"/> 
                                <p>Date of Booking:</p>
                                <Input type={Date} placeholder="Date (e.g DD/MM/YYYY)" />
                            </Col>
                        </Row>
                    </Container>
                    <Marginer direction="vertical" margin="5em"/> 
                    <SubmitButton>Confirm Reservation</SubmitButton>
                </InnerPageContainer>
            </TopSectionInnerContainer>
            </BackgroundFilter>
            </TopSectionContainer>
        </PageWrapper>
    );

}