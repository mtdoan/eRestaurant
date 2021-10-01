import React from "react";
import styled from "styled-components";
import Select from 'react-select'
import DateComponent from "./dateComponent";
import { useHistory } from "react-router-dom";

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-top: 2rem;
  border: none;
  border-radius: 16px;
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

const BookingContainer = styled.div`
  display: block;
  justify-content: space-between;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50%;
`;

const SmallContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50%;
`;
const DateContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export function Booking(props) {
  const history = useHistory();

  const submitBooking = () => {
    history.push("/eRestaurant/booked");
  };

  return (
    <BookingContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">  
            <p>Restaurant location</p>
            <Select 
              options={[
                { value: 1, label: 'Haymarket' },
                { value: 2, label: 'Mascot' }
              ]} 
              placeholder="Location"
            />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">  
            <p>Number of patrons</p>
            <Select 
              options={[
                { value: 1, label: '1' },
                { value: 2, label: '2' },
                { value: 3, label: '3' },
                { value: 4, label: '4' },
                { value: 5, label: '5' },
                { value: 6, label: '6' },
                { value: 7, label: '7' },
                { value: 8, label: '8' }
              ]} 
              placeholder="Number of patrons"
              
            />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">  
            <DateContainer>
              <p>Date</p>
              <DateComponent />
            </DateContainer>
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">  
            <p>Time</p>
            <Select 
              options={[
                { value: 1, label: 'Lunch 10:30AM' },
                { value: 2, label: 'Lunch 11:00AM' },
                { value: 3, label: 'Lunch 11:30AM' },
                { value: 4, label: 'Lunch 12:00AM' },
                { value: 5, label: 'Lunch 12:30AM' },
                { value: 6, label: 'Dinner 5:30PM' },
                { value: 7, label: 'Dinner 6:00PM' },
                { value: 8, label: 'Dinner 6:30PM' },
                { value: 9, label: 'Dinner 7:00PM' },
                { value: 10, label: 'Dinner 7:30PM' },
                { value: 11, label: 'Dinner 8:30PM' },
                { value: 12, label: 'Dinner 9:00PM' },
              ]} 
              placeholder="Choose time"
            />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <SubmitButton type="button" onClick={submitBooking}>Confirm Reservation</SubmitButton>
    </BookingContainer>
  );
}
