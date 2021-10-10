import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const MutedLink = styled.a`
  color: grey;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0 10px 0;
`;

export const BoldLink = styled.a`
  color: #CD0224;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
  margin: 0 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  margin: 10px 0;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  border-radius: 6px;
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid rgb(205, 2, 36);
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  width: 150px;
  color: #CD0224;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #fff; 
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffdfdb;
  }
`;