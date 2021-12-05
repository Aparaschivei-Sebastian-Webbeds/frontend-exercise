import { Box, Button, FormControl, TextField } from "@material-ui/core";
import { LocalizationProvider, TimePicker } from "@mui/lab";
import { Alert } from "@mui/material";
import { useState } from "react"
import { useUpdateEvent } from "../customHooks/EventsHooks";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import format from "date-fns/format";
import { styles } from "../styles/styles";


export const UpdateEventForm = (props) => {
    const classes=styles();
    const [eventInput, setEventInput] = useState({
        'artist': props.event.artist,
        'start': props.event.start,
        'end': props.event.end,
        'theaterId': props.event.id
    })
    const [errorState, setErrorState] = useState({
        'noDataError': false,
        'wrongDateFormatError': false,
        'invalidHours':false
    })
    const { updateEvent } = useUpdateEvent();
    console.log(eventInput)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (eventInput.artist === '' || eventInput.start===null||eventInput.end===null|| eventInput.start.toString() === 'Invalid Date' || eventInput.end.toString() === 'Invalid Date') {
            if (eventInput.artist === ''|| eventInput.start===null||eventInput.end===null) {
                setErrorState({ ...errorState, noDataError: true })
                setTimeout(function(){
                    setErrorState({ noDataError: false })  
                },4000)
            }
            if((eventInput.start!==null &&eventInput.start.toString() === 'Invalid Date') || (eventInput.end!==null &&eventInput.end.toString() === 'Invalid Date')){
                setErrorState({ ...errorState, wrongDateFormatError: true })
                setTimeout(function(){
                    setErrorState({ wrongDateFormatError: false })  
                },4000)
            }
            if(eventInput.start>eventInput.end){
                setErrorState({ ...errorState, invalidHours: true })
                setTimeout(function(){
                    setErrorState({ invalidHours: false })  
                },4000)
            }
        }
        else {
            updateEvent(props.event.id,{
                'artist': eventInput.artist,
                'start': format(eventInput.start, 'HH:mm'),
                'end': format(eventInput.end, 'HH:mm'),
                'theaterId': eventInput.theaterId
            });
            setEventInput({ artist: '', start: null, end: null, theaterId: props.id });
        }
    }
    const handleStartChange = (newValue) => {
        setEventInput({ ...eventInput, start: newValue })
    }
    const handleEndChange = (newValue) => {
        setEventInput({ ...eventInput, end: newValue })
    }
    return (<Box className={classes.updateBox}>
        <Box >
            {errorState.noDataError && <Alert severity="warning">Fill all the fields!</Alert>}
            {errorState.wrongDateFormatError && <Alert severity="warning">Wrong date format!</Alert>}
            {errorState.invalidHours && <Alert severity="warning">Start hour is later than end hour!</Alert>}

        </Box>
        <FormControl>
            <Box sx={{display:"flex",flexDirection:"column"}}>
                <Box sx={{display:"flex",flexDirection:"inline"}}>
                <TextField label="Event artist" value={eventInput.artist} required onChange={(e) => { setEventInput({ ...eventInput, artist: e.target.value }) }} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        ampm={false}
                        label="Event start time"
                        inputFormat="HH:mm"
                        value={eventInput.start}
                        onChange={handleStartChange}
                        renderInput={(params) => <TextField  {...params} />}
                    />
                    <TimePicker
                        ampm={false}
                        label="Event end time"
                        inputFormat="HH:mm"
                        value={eventInput.end}
                        onChange={handleEndChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </Box>
                <Button onClick={handleSubmit} variant="contained" color="primary" >Update </Button>
            </Box>
        </FormControl>
    </Box>)
}