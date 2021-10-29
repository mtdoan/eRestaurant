import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getUser } from "../../components/utils/client";
import { RowContainer, InnerContainer, SmallContainer, SubmitButton, Heading } from "../../components/commonStyle/commonStyle";

const AccountDetailContainer = styled.div`
  display: block;
  justify-content: space-between;
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
  
  const submitAccountDetailsHandler = () => {
    history.push(`/eRestaurant/customeraccount`);
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  const onValueChange = (e) => {
    console.log("changing ...", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <AccountDetailContainer>
      <RowContainer>
        <Heading>Account Details</Heading>
      </RowContainer>

      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-location">
            <h3>First Name</h3>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.firstName} />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <h3>Last Name</h3>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.lastName} />

          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">
            <h3>Email</h3>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.email} />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <h3>Phone Number</h3>
            <Input onChange={(e) => onValueChange(e)} name='firstName' value={user.phoneNumber} />

          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <RowContainer>
        <InnerContainer>
          <SmallContainer id="choose-date">
            <h3>Password</h3>
            <Input type="password" onChange={(e) => onValueChange(e)} name='firstName' value={user.password} />
          </SmallContainer>
        </InnerContainer>
        <InnerContainer>
          <SmallContainer id="number-of-customers">
            <h3>Confirm Password</h3>
            <Input type="password" onChange={(e) => onValueChange(e)} name='firstName' value={user.password} />
          </SmallContainer>
        </InnerContainer>
      </RowContainer>
      <SubmitButton type="button" onClick={submitAccountDetailsHandler}>Save Details</SubmitButton>
    </AccountDetailContainer>
  );
}

