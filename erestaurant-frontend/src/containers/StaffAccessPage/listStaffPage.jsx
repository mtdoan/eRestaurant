import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavbarLoggedIn } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { loadStaff, removeStaffFromList } from "../../components/utils/client";
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

export function ListStaffPage() {
    const [data, setData] = useState({ allStaff: [] });
    const classes = useStyles();

    const deleteFromStaffList = (staffId) => {
        removeStaffFromList(staffId, refreshStaffList);
    };

    const refreshStaffList = () => {
        console.log("refresh");
        loadStaff((allStaff) => setData({ allStaff }));
    };

    useEffect(() => {
        loadStaff((allStaff) => setData({ allStaff }));
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
                    <NavbarLoggedIn useTransparent/>
                    <TopSectionInnerContainer>
                        <InnerPageContainer>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow className={classes.thead}>
                                        <TableCell>Staff ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                        <TableCell>
                                            <Button variant="contained" style={{ padding: "5px 70px" }} component={Link} to={buildPath(`staff/add`)}>Add</Button>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.allStaff.map((staff) => (
                                        <TableRow className={classes.row} key={staff.id}>
                                            <TableCell>{staff.id}</TableCell>
                                            <TableCell>{staff.firstName} {staff.lastName}</TableCell>
                                            <TableCell>{staff.position}</TableCell>
                                            <TableCell>{staff.email}</TableCell>
                                            <TableCell>{staff.phoneNumber}</TableCell>
                                            <TableCell>
                                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={buildPath(`staff/edit/${staff.id}`)}>Edit</Button>
                                                <Button color="secondary" variant="contained" onClick={() => deleteFromStaffList(staff.id)}>Delete</Button>
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
