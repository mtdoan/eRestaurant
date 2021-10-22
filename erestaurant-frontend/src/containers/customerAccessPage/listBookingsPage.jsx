import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { listUserBooking } from "../../components/utils/client";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/TopSectionBackground.jpeg";

const useStyles = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px'
  },
  thead: {
    '& > *': {
      fontSize: 20,
      background: '#000000',
      color: '#FFFFFF'
    }
  },
  row: {
    '& > *': {
      fontSize: 18
    }
  }
})

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

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px 0px;
  background-size: cover;
  @media screen and (max-width: ${deviceSize.mobile}px) {height: 700px; background-position: 0px 0px;}
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  //margin-top: 20px;
  background-color: white;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(234, 125, 125, 0.8);
  display: flex;
  flex-direction: column;
`;

export function ListBookingsPage() {
  const [data, setData] = useState({ allBooking: [] });
  const classes = useStyles();

  useEffect(() => {
    listUserBooking((allBooking) => setData({ allBooking }));
  }, []);

  console.log('Render');
  if (!data) {
    console.log("No")
    return "No post!";
  }

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.thead}>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.allBooking.map((booking) => (
                    <TableRow className={classes.row} key={booking?.id}>
                      <TableCell> #00A{booking?.id}</TableCell>
                      <TableCell>{(new Date(booking?.dateEpoch)).toLocaleDateString()}</TableCell>
                      <TableCell>{(() => {
                          switch (booking?.timeSlotId) {
                            case 1:  return 'Lunch 10:30AM';
                            case 2:  return 'Lunch 11:00AM';
                            case 3:  return 'Lunch 11:30AM';
                            case 4:  return 'Lunch 12:00PM';
                            case 5:  return 'Lunch 12:30PM';
                            case 6:  return 'Dinner 5:30PM';
                            case 7:  return 'Dinner 6:00PM';
                            case 8:  return 'Dinner 6:30PM';
                            case 9:  return 'Dinner 7:00PM';
                            case 10: return 'Dinner 7:30PM';
                            case 11: return 'Dinner 8:00PM';
                            case 12: return 'Dinner 8:30PM';
                            default: return 'Lunch 10:30AM';
                          }
                        })()}
                      </TableCell>
                      <TableCell>1B King Road, North Sydney, NSW 2060 </TableCell>
                      <TableCell>
                        <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={buildPath(`booking/edit/${booking.id}`)}>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  )
}
