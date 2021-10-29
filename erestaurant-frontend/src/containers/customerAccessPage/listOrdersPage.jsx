import React, { useState, useEffect } from 'react';
import { NavbarLoggedIn } from "../../components/navbar";
import { Link, useHistory } from "react-router-dom";
import { buildPath } from "../../Paths";
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { listUserOrder } from "../../components/utils/client";
import { PageWrapper, TopSectionContainer, BackgroundFilter, TopSectionInnerContainer, InnerPageContainer, Heading, SubmitButton } from "../../components/commonStyle/commonStyle";

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

export function ListOrdersPage() {
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState({ allOrders: [] });

  useEffect(() => {
    listUserOrder((allOrders) => setData({ allOrders: allOrders }));
  }, []);

  console.log('Render');
  if (!data) {
    console.log("No")
    return "No post!";
  }

  const returnAccountPage = () => {
    history.push("/eRestaurant/customeraccount")
  }

  return (
    <PageWrapper>
      <TopSectionContainer>
        <BackgroundFilter>
          <NavbarLoggedIn useTransparent />
          <TopSectionInnerContainer>
            <InnerPageContainer>
              <p/>
              <Heading style={{ marginBottom: "-30px" }}>Invoice list</Heading>
              {
                data.allOrders.length == 0 ?
                  <h3>You have no invoices.</h3>
                  : <>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow className={classes.thead}>
                          <TableCell>Invoice Number</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Time</TableCell>
                          <TableCell> .</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.allOrders.map((order) => (
                          <TableRow className={classes.row} key={order?.id}>
                            <TableCell> #I00{order?.id}</TableCell>
                            <TableCell>{(new Date(order?.dateEpoch)).toLocaleDateString()}</TableCell>
                            <TableCell>{(() => {
                              switch (order?.timeSlotId) {
                                case 1: return 'Lunch 10:30AM';
                                case 2: return 'Lunch 11:00AM';
                                case 3: return 'Lunch 11:30AM';
                                case 4: return 'Lunch 12:00PM';
                                case 5: return 'Lunch 12:30PM';
                                case 6: return 'Dinner 5:30PM';
                                case 7: return 'Dinner 6:00PM';
                                case 8: return 'Dinner 6:30PM';
                                case 9: return 'Dinner 7:00PM';
                                case 10: return 'Dinner 7:30PM';
                                case 11: return 'Dinner 8:00PM';
                                case 12: return 'Dinner 8:30PM';
                                default: return 'Lunch 10:30AM';
                              }
                            })()}
                            </TableCell>

                            <TableCell>
                              <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={buildPath(`invoice/${order.id}`)}>View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
              }
              <SubmitButton type="button" onClick={returnAccountPage}>Return Account Page</SubmitButton>

            </InnerPageContainer>
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    </PageWrapper>
  )
}
