import { Box, Button, TextField } from '@material-ui/core';
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Modal, Dialog, DialogContent } from '@mui/material';
import { useGetTheaters, useDeleteTheaters } from '../customHooks/TheatersHooks';
import { AddEventForm } from './AddEventForm';
import { AddTheaterForm } from './AddTheaterForm';
import { ListOfEvents } from './ListOfEvents';
import { useState } from "react"
import Popup from 'reactjs-popup';
import { UpdateTheaterForm } from './UpdateTheaterForm';
import { styles } from '../styles/styles';
import React from 'react';
export const ListOfTheaters = () => {
    const classes = styles();
    const [openModal, setOpenModal] = useState(false);
    const [openUD, setOpenUD] = useState({open:false,theater:''});
    const [showEvents, setShowEvents] = useState({ 'theater': '' })
    const { theaters } = useGetTheaters()
    const { deleteTheater } = useDeleteTheaters()
    const handleDeleteButton = (theater) => (event) => {
        //console.log("event: ",event)

        deleteTheater(theater.id)
    }
    const handleShowEventsButton = (theater) => (event) => {
        //console.log('theater:',theater)
        setShowEvents({ theater: theater })
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleCloseUD=()=>{
        setOpenUD({...openUD,open:false});
    }
    const handleUpdateButton=(theater)=>(event)=>{
        event.preventDefault()
        setOpenUD({open:true,theater:theater})
    }
    //console.log("theaters:",theaters);
    return (<Box className={classes.flexColumn}>

        <Box className={classes.theatersListOnRender} border="1px solid black" borderRadius="4px" style={{ overflow: 'auto' }}>
            <h1 align="center">Theaters list</h1><br />
            <AddTheaterForm />
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Theater name</TableCell>
                            <TableCell align="right">Theater location</TableCell>
                            <TableCell align="right">Theater capacity</TableCell>
                            <TableCell align="right">Options</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {theaters.theaters.map((theater) => (
                            <TableRow key={theater.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{theater.name}</TableCell>
                                <TableCell align="right">{theater.location}</TableCell>
                                <TableCell align="right">{theater.capacity}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="secondary" id={theater.id} onClick={handleDeleteButton(theater)} >Delete </Button>
                                    <Button variant="contained" color="primary" id={theater.id} onClick={handleShowEventsButton(theater)} >Show events </Button>
                                    <Button variant="contained" color="info" id={theater.id} onClick={handleUpdateButton(theater)} >Update </Button>
                                    <Dialog
                                        open={openUD.open}
                                        onClose={handleCloseUD}
                                    >
                                        <DialogContent>
                                        <UpdateTheaterForm theater={openUD.theater} />                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>

        <Modal

            open={openModal}
            onClose={handleCloseModal}
        >
            <Box className={classes.eventsModal} style={{ overflow: 'auto' }}>
                {showEvents.theater.id && <Box >
                    <h1 align="center">Events of theater {showEvents.theater.name}</h1><br />
                    <AddEventForm id={showEvents.theater.id} />
                    <ListOfEvents id={showEvents.theater.id} />

                </Box>}
            </Box>
        </Modal>

    </Box>)
}