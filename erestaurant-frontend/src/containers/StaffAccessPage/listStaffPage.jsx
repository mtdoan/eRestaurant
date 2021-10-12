import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavbarOrder } from "../../components/navbar";
import { Link } from "react-router-dom";
import { buildPath } from "../../Paths";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { loadStaff, removeStaffFromList } from "../../components/utils/client";

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
            <NavbarOrder />
            <InnerPageContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.thead}>
                            <TableCell>Id</TableCell>
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
        </PageWrapper>
    )
}
