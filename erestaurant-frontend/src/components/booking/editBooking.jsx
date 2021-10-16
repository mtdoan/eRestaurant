import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Select from 'react-select'
import { useHistory, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker.css';
import { editBooking, getBookingFromBookingId } from '../utils/client';

const customStyles = {
  placeholder: (defaultStyles) => {
    return {
        ...defaultStyles,
        color: '#000',
    }
}
};

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

export function EditBooking(props) {
  const history = useHistory();

  const [booking, setBooking] = useState({
    restaurantId: "",
    numberOfPatrons: "",
    dateEpoch: "",
    timeSlotId: ""
  });

  const { bookingId } = useParams();
  const getBookingDetails = (bookingId) => {
    getBookingFromBookingId(bookingId, setBooking);
  }

  useEffect(() => {
    getBookingDetails(bookingId);
  }, []);

  const callback = () => {
    console.log("call back");
    history.push(`/eRestaurant/booked/${bookingId}`);
  }

  const editBookingHandler = () => {
    editBooking(bookingId, booking.restaurantId, booking.numberOfPatrons, booking.dateEpoch, booking.timeSlotId, callback);
  };

  console.log("booking = ", booking);

  return (
    <BookingContainer>
      <RowContainer>
        <h1>Edit Your Booking</h1>
      </RowContainer>

      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-location">
            <p>Restaurant location</p>
            <Select
              styles={customStyles}
              options={[
                { value: 1, label: "Haymarket" },
                { value: 2, label: "Mascot" }
              ]}
              placeholder={booking?.restaurantId === 1 ? "Haymarket" : "Mascot"}
              onChange={(event) => {
                setBooking({...booking, restaurantId: event.value});
              }}
            />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <p>Number of patrons</p>
            <Select
              styles={customStyles}
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
              placeholder={(() => {
                switch (booking.numberOfPatrons) {
                  case 1: return '1';
                  case 2: return '2';
                  case 3: return '3';
                  case 4: return '4';
                  case 5: return '5';
                  case 6: return '6';
                  case 7: return '7';
                  case 8: return '8'
                }
              })()}
              onChange={(event) => {
                setBooking({...booking, numberOfPatrons: event.value});
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
                onChange={(date) => {
                  setBooking({...booking, dateEpoch: date.getTime()});
                }
                }
                minDate={new Date()}
                placeholderText="Choose date"
                dateFormat="dd/MM/yyyy"
                value={(new Date(booking?.dateEpoch)).toLocaleDateString()}
              />
            </DateContainer>
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <p>Time</p>
            <Select
              styles={customStyles}

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
              placeholder={(() => {
                switch (booking?.timeSlotId) {
                  case 1: return 'Lunch 10:30AM';
                  case 2: return 'Lunch 11:00AM';
                  case 3: return 'Lunch 11:30AM';
                  case 4: return 'Lunch 12:00AM';
                  case 5: return 'Lunch 12:30AM';
                  case 6: return 'Dinner 5:30PM';
                  case 7: return 'Dinner 6:00PM';
                  case 8: return 'Dinner 6:30PM';
                  case 9: return 'Dinner 7:00PM';
                  case 10: return 'Dinner 7:30PM';
                  case 11: return 'Dinner 8:00PM';
                  case 12: return 'Dinner 8:30PM';
                }
              })()}
              onChange={(event) => {
                setBooking({...booking, timeSlotId: event.value});
              }}
            />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <SubmitButton type="button" onClick={editBookingHandler}>Save your change</SubmitButton>
    </BookingContainer>
  );
}

