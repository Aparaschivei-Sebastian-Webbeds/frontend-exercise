
import axios from "../config/axios"
const SERVER_PATH="http://localhost:8000/api/"
// export const getEvents=()=>{
//     return axios.get(`${SERVER_PATH}events`).then((response)=>{
//         return response.data;
//     }).catch((error)=>{
//         return error.response;
//     })

// }
// export const createEvent=(reqBody)=>{
//     return axios.post(`${SERVER_PATH}events`,reqBody).then((response)=>{
//         return response.data;
//     }).catch((error)=>{
//         return error.response;
//     })
// }
// export const updateEvent=(id,reqBody)=>{
//     return axios.put(`${SERVER_PATH}events/${id}`,reqBody).then((response)=>{
//         if(response) return true;
//         else return false;
//     }).catch((error)=>{
//         return error.response
//     })
// }
// export const deleteEvent=(id)=>{
//     return axios.delete(`${SERVER_PATH}events/${id}`).catch((error)=>{
//         return error.response
//     })
// }
export const EventsService={
    get:(theaterId)=>{
        return axios.get(`${SERVER_PATH}events`,{params:{theaterId:theaterId},withCredentials:true}).then((response)=>{
            console.log('response.data in eventsService get:',response.data)
            return response.data;
        }).catch((error)=>{
            return error.response;
        })
    },
    create:(reqBody)=>{
        return axios.post(`${SERVER_PATH}events`,reqBody,{withCredentials:true}).then((response)=>{
            console.log("create event response: ",response.data);
            return response.data;
        }).catch((error)=>{
            return error.response;
        })
    },
    update:(id,reqBody)=>{
        return axios.put(`${SERVER_PATH}events/${id}`,reqBody,{withCredentials:true}).then((response)=>{
            if(response) return true;
            else return false;
        }).catch((error)=>{
            return error.response
        })
    },
    delete:(id)=>{
        return axios.delete(`${SERVER_PATH}events/${id}`,{withCredentials:true}).catch((error)=>{
            return error.response
        })
    }
}