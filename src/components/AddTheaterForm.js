import { Box, Button,  TextField } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useState } from "react"
import { useCreateTheater } from "../customHooks/TheatersHooks";


export const AddTheaterForm=()=>{
    const[theaterInput,setTheaterInput]=useState({
        'name':'',
        'location':'',
        'capacity':0
    })
    const[errorState,setErrorState]=useState({
        'noDataError':false,
        'invalidCapacity':false
    })
    console.log(theaterInput)
    console.log(theaterInput.capacity)
    const {createTheater}=useCreateTheater();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(theaterInput.name===''||theaterInput.location==='' || theaterInput.capacity===null||theaterInput.capacity<0)
        {
            if(theaterInput.name===''||theaterInput.location==='' || theaterInput.capacity===null){
                setErrorState({ ...errorState, noDataError: true })
                setTimeout(function(){
                    setErrorState({ noDataError: false })  
                },4000)
            }
            if(theaterInput.capacity!==null && (theaterInput.capacity<0 || theaterInput.capacity%1!==0)){
                setErrorState({ ...errorState, invalidCapacity: true })
                setTimeout(function(){
                    setErrorState({ invalidCapacity: false })  
                },4000)
            }
        }
        else{
            createTheater(theaterInput);
            setTheaterInput({name:'',location:'',capacity:0});
        }
        
    }
    return(<div>
        <Box>
            {errorState.noDataError && <Alert severity="warning">Fill all the fields!</Alert>}
            {errorState.invalidCapacity && <Alert severity="warning">Invalid capacity</Alert>}
        </Box>
        <form>
                <Box >
                <TextField label="Theater name" value={theaterInput.name} required onChange={(e)=>{setTheaterInput({...theaterInput,name:e.target.value})}}/> 
                <TextField label="Theater location" value={theaterInput.location} required onChange={(e)=>{setTheaterInput({...theaterInput,location:e.target.value})}}/> 
                <TextField label="Theater capacity" value={theaterInput.capacity} required onChange={(e)=>{setTheaterInput({...theaterInput,capacity:e.target.value})}}/> 
                <Button onClick={handleSubmit} variant="contained" color="primary" >Add </Button>
                </Box>
            </form>
    </div>)
}