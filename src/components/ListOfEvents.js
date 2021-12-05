import { Box, Button } from "@material-ui/core"
import { useContext, useState } from "react"
import { TheatersContext } from "../contexts/TheatersContext"
import { useDeleteEvents, useGetEvents } from "../customHooks/EventsHooks"
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Dialog, DialogContent } from '@mui/material';
import Popup from "reactjs-popup";
import { UpdateEventForm } from "./UpdateEventForm";


export const ListOfEvents = (props) => {
    const { events } = useGetEvents(props.id)
    const { deleteEvent } = useDeleteEvents()
    const [openUD, setOpenUD] = useState({open:false,event:''});
    const handleDeleteButton = (Event) => (event) => {
        event.preventDefault();
        deleteEvent(Event.id)
    }
    const handleUpdateButton = (Event) => (event) => {
        event.preventDefault()
        setOpenUD({open:true,event:Event});
    }
    const handleClose = () => {
        setOpenUD({...openUD,open:false});

    }
    // return(
    //     events.events.map((event) => {
    //         return (<>
    //             <Box key={event.id}>

    //                 <span>Artist: {event.artist}</span><br />
    //                 <span>Start: {event.start}</span><br />
    //                 <span>End: {event.end}</span><br />
    //             </Box>

    //             <Button variant="contained" color="secondary" id={event.id} onClick={handleDeleteButton(event)} >Delete </Button>
    //         </>)
    //     })
    // )

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Event Artist</TableCell>
                        <TableCell align="right">Event start time</TableCell>
                        <TableCell align="right">Event end time</TableCell>
                        <TableCell align="right">Options</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.events.map((event) => (
                        <TableRow key={event.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{event.artist}</TableCell>
                            <TableCell align="right">{event.start}</TableCell>
                            <TableCell align="right">{event.end}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="secondary" id={event.id} onClick={handleDeleteButton(event)} >Delete </Button>
                                <Button variant="contained" color="info" id={event.id} onClick={handleUpdateButton(event)} >Update </Button>

                                <Dialog
                                    open={openUD.open}
                                    onClose={handleClose}
                                >
                                   <DialogContent>
                                        <UpdateEventForm event={openUD.event} />
                                 </DialogContent>
                                </Dialog>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}