import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Select from 'react-select'
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker.css';
import { submitBooking, checkExistingBooking, resetCart } from '../utils/client';
import { toast } from 'react-toastify';

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
  const [cart, setCart] = useState({ cartItems: [] });
  const [restaurantId, setRestaurantId] = useState(-1);
  const [patronNumber, setPatronNumber] = useState(-1);
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(-1);
  const history = useHistory();


  const callback = (data) => {
    history.push(`/eRestaurant/booked/${data.bookingId}`);
  }

  const submitBookingHandler = () => {
    checkExistingBooking(-1, startDate.getTime(), time, (data) => {
      if (data.existing) {
        submitBooking(restaurantId, patronNumber, startDate.getTime(), time, callback);
      } else {
        toast.error("You've made a reservation at this time!", {autoClose: 3000});
      }
    });
  };

  useEffect(() => {
    resetCart((cartItems) => {
      setCart({ cartItems })
    });
  }, []);

  console.log("setLocation = ", restaurantId);
  console.log("setPatronNumber = ", patronNumber);
  console.log("setStartDate = ", startDate?.getTime());
  console.log("setTime = ", time);
  let date = new Date();
  return (
    <BookingContainer>
      <RowContainer>
        <h1>Make a Booking!</h1>
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
              onChange={(event) => {
                setPatronNumber(event.value);
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
      <SubmitButton type="button" onClick={submitBookingHandler}>Confirm Reservation</SubmitButton>
    </BookingContainer>
  );
}

