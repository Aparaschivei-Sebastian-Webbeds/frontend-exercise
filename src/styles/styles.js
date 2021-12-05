import { makeStyles } from "@material-ui/core";

export const styles = makeStyles(theme => ({
    root: {
        backgroundColor: '#c1e3ca'

    },
    title: {
        backgroundColor: '#f2320c'
    },
    counter: {
        fontFamily: 'Apple Chancery, cursive'
    },
    form: {
        backgroundColor: '#dee2fc',
        display: "flex",
        flexDirection: "inline",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"

    },
    tasksList: {
        backgroundColor: '#a1acc4',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1",
        borderColor: "grey",
        mx: "20%"
    },
    loader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    },
    listItem: {
        display: "flex",
        width: "100%",
        flexDirection: "inline",
        alignSelf: "center",
        justifyContent: "space-around",
        alignItems: "center"
    },
    taskText: {
        display: "flex",
        width: "100%",
        flexDirection: "inline",
        justifyItems: "flex-start",
        marginLeft: "0"
    },
    taskButtons: {
        display: "flex",
        width: "100%",
        flexDirection: "inline",
        justifyContent: "flex-end",
        marginRight: "0"
    },
    
    flexInline: {
        display: "flex",
        flexDirection: "inline",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "0"
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        margin: "0"
    },
    updateBox:{
        width:'100%'
    },
    dataContainer:{
        width:"80%",
        height:"250px",
      
    },
    theatersListOnRender:{
        width:"80%",
        height:"500px",
        marginTop:'2%'
    },
    navbar:{
        
    },
    eventsModal :{
        position: 'absolute',
        top: '10%',
        left: '10%',
        bottom:'10%',
        right:'10%',
        width: '80%',
        height:'80%',
        backgroundColor: 'white',
        border: '1px solid #000',
       
      }
    


}

));

