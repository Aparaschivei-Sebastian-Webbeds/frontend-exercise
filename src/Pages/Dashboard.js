
import React from 'react';
import { ListOfTheaters } from '../components/ListOfTheaters';
import { TheatersContextProvider } from '../contexts/TheatersContext';

const Dashboard = () => {
    
    return (
    <TheatersContextProvider>
        
        <ListOfTheaters/>
    </TheatersContextProvider>
    )


}
export {Dashboard};