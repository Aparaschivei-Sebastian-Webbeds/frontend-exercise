import { Box, Button, TextField } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useState } from "react"
import { useUpdateTheater } from "../customHooks/TheatersHooks";
import { styles } from "../styles/styles";


export const UpdateTheaterForm = (props) => {
    const { updateTheater } = useUpdateTheater()
    const [theaterInput, setTheaterInput] = useState({
        'name': props.theater.name,
        'location': props.theater.location,
        'capacity': props.theater.capacity
    })
    const [errorState, setErrorState] = useState({
        'noDataError': false,
        'invalidCapacity': false
    })
    const classes = styles();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (theaterInput.name === '' || theaterInput.location === '' || theaterInput.capacity === null || theaterInput.capacity < 0) {
            if (theaterInput.name === '' || theaterInput.location === '' || theaterInput.capacity === null) {
                setErrorState({ ...errorState, noDataError: true })
                setTimeout(function () {
                    setErrorState({ noDataError: false })
                }, 4000)
            }
            if (theaterInput.capacity !== null && (theaterInput.capacity < 0 || theaterInput.capacity % 1 !== 0)) {
                setErrorState({ ...errorState, invalidCapacity: true })
                setTimeout(function () {
                    setErrorState({ invalidCapacity: false })
                }, 4000)
            }
        }
        else {
            updateTheater(props.theater.id, theaterInput)
        }

    }
    return (<Box className={classes.updateTheaterBox}>

        <form>
            <Box className={classes.flexColumn} border="1px solid grey" borderRadius="4px">
                <Box className={classes.flexInline}>
                    <TextField label="Theater name" value={theaterInput.name} required onChange={(e) => { setTheaterInput({ ...theaterInput, name: e.target.value }) }} />
                    <TextField label="Theater location" value={theaterInput.location} required onChange={(e) => { setTheaterInput({ ...theaterInput, location: e.target.value }) }} />
                    <TextField label="Theater capacity" value={theaterInput.capacity} required onChange={(e) => { setTheaterInput({ ...theaterInput, capacity: e.target.value }) }} />
                </Box>
                <Button onClick={handleSubmit} variant="contained" color="primary" >Update </Button>
            </Box>
        </form>
        <Box>
            {errorState.noDataError && <Alert severity="warning">Fill all the fields!</Alert>}
            {errorState.invalidCapacity && <Alert severity="warning">Invalid capacity</Alert>}
        </Box>
    </Box>)
}