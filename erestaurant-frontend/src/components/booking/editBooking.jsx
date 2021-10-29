import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './react-datepicker.css';
import { editBooking, getBookingFromBookingId, checkExistingBooking } from '../utils/client';
import { toast } from 'react-toastify';
import { SubmitButton, RowContainer, InnerContainer, SmallContainer, DateContainer, Heading } from "../../components/commonStyle/commonStyle";

export const BookingContainer = styled.div`
  display: block;
  justify-content: space-between;
  width: 100%;
`;

const customStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
    }
  }
};

export function EditBooking() {
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
    checkExistingBooking(bookingId, booking.dateEpoch, booking.timeSlotId, (data) => {
      if (data.existing) {
        editBooking(bookingId, booking.restaurantId, booking.numberOfPatrons, booking.dateEpoch, booking.timeSlotId, callback);
      } else {
        toast.error("You've made a reservation at this time!", { autoClose: 3000 });
      }
    });
  };
  let date = new Date();

  return (
    <BookingContainer>
      <RowContainer>
        <Heading>Edit Your Booking</Heading>
      </RowContainer>

      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-location">
            <h3>Restaurant location</h3>
            <Select
              styles={customStyles}
              options={[
                { value: 1, label: "North Sydney" },
              ]}
              placeholder="North Sydney"
              onChange={(event) => {
                setBooking({ ...booking, restaurantId: event.value });
              }}
            />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <h3>Number of patrons</h3>
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
                setBooking({ ...booking, numberOfPatrons: event.value });
              }}
            />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">
            <DateContainer>
              <h3>Date</h3>
              <DatePicker
                onChange={(date) => {
                  setBooking({ ...booking, dateEpoch: date.getTime() });
                }
                }
                minDate={new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1))}
                placeholderText="Choose date"
                dateFormat="dd/MM/yyyy"
                value={(new Date(booking?.dateEpoch)).toLocaleDateString()}
              />
            </DateContainer>
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <h3>Time</h3>
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
                setBooking({ ...booking, timeSlotId: event.value });
              }}
            />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <SubmitButton type="button" onClick={editBookingHandler}>Save your change</SubmitButton>
    </BookingContainer>
  );
}

