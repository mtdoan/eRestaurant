import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { editUser } from '../utils/client';
import { getUser } from "../../components/utils/client";

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

const Input = styled.input`
  padding: 8px;
  text-align: center;
  border-color: #CCCCCC;
  height: 10x;
  width: 100%;
`;

export function AccountDetails(props) {
  const history = useHistory();

  const [user, setUser] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: ""
  });
  const getUserHandler = () => {
    getUser((user) => setUser(user));
  }

  const callback = (data) => {
    history.push(`/eRestaurant/customeraccount`);
  }

  const submitAccountDetailsHandler = () => {
    editUser(user.id, user.firstName, user.lastName, user.phoneNumber, user.email, user.password, callback);
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  const onValueChange = (e) => {
    console.log("changing ...", e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <BookingContainer>
      <RowContainer>
        <h1>Account Details</h1>
      </RowContainer>

      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-location">
            <p>First Name</p>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.firstName} />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <p>Last Name</p>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.lastName} />

          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">
            <DateContainer>
              <p>Email</p>
              <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.email} />

            </DateContainer>
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <p>Phone Number</p>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.phoneNumber} />

          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">
            <DateContainer>
              <p>Password</p>
              <Input type="password" onChange={(e) => onValueChange(e)} name='firstName' value={user.password} />

            </DateContainer>
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <p>Confirm Password</p>
            <Input type="password" onChange={(e) => onValueChange(e)} name='firstName' value={user.password} />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <SubmitButton type="button" onClick={submitAccountDetailsHandler}>Save Details</SubmitButton>
    </BookingContainer>
  );
}

