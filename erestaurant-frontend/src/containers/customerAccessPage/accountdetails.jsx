import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavbarOrder } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { loadStaff, removeStaffFromList } from "../../components/utils/client";

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
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;