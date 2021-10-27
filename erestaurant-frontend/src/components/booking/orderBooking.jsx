import React, { useState } from 'react';
import styled from "styled-components";
import Select from 'react-select'
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker.css';
import { submitBooking, checkExistingOrder } from '../utils/client';
import {toast} from 'react-toastify';

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

export function OrderBooking(props) {
  const [restaurantId, setRestaurantId] = useState(-1);
  const [patronNumber, setPatronNumber] = useState(-1);
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(-1);
  const history = useHistory();

  const callback = (data) => {
    history.push(`/eRestaurant/orderpayment/${data.bookingId}`);
  }

  const submitBookingHandler = () => {
    checkExistingOrder(startDate?.getTime(), time, (data) => {
      if (data.existing) {
        if (restaurantId != -1 && startDate != null && time != -1) {
          submitBooking(restaurantId, patronNumber, startDate.getTime(), time, callback);
        } else {
          toast.error("Please select restaurant location, date and time!", {autoClose: 3000});
        }
      } else {
        toast.error("You've made an order at this time!", {autoClose: 3000});
      }
    });
  };

  let date = new Date();

  return (
    <BookingContainer>
      <RowContainer>
        <h1>Select your order details</h1>
      </RowContainer>

      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-location">
            <p>Restaurant location</p>
            <Select
              options={[
                { value: 1, label: 'North Sydney' }
              ]}
              placeholder="Location"
              onChange={(event) => {
                setRestaurantId(event.value);
              }}
            />
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
                { value: 11, label: 'Dinner 8:00PM' },
                { value: 12, label: 'Dinner 8:30PM' },
              ]}
              placeholder="Choose time"
              onChange={(event) => {
                setTime(event.value);
              }}
            />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">
            <DateContainer>
              <p>Date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }
                }
                minDate={new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1))}
                placeholderText="Choose date"
                dateFormat="dd/MM/yyyy"
              />
            </DateContainer>
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer>
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <SubmitButton type="button" onClick={submitBookingHandler}>Confirm Reservation</SubmitButton>
    </BookingContainer>
  );
}

