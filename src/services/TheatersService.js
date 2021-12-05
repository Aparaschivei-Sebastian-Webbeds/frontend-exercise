import axios from "../config/axios"
const SERVER_PATH="http://localhost:8000/api/"
// export const getTheaters=()=>{
//     return axios.get(`${SERVER_PATH}theaters`).then((response)=>{
//         console.log("theaters in getTheaters",response.data)
//         return response.data;
//     }).catch((error)=>{
//         return error.response;
//     })

// }
// export const createTheater=(reqBody)=>{
//     return axios.post(`${SERVER_PATH}theaters`,reqBody).then((response)=>{
//         return response.data;
//     }).catch((error)=>{
//         return error.response;
//     })
// }
// export const updateTheater=(id,reqBody)=>{
//     return axios.put(`${SERVER_PATH}theaters/${id}`,reqBody).then((response)=>{
//         if(response) return true;
//         else return false;
//     }).catch((error)=>{
//         return error.response
//     })
// }
// export const deleteTheater=(id)=>{
//     return axios.delete(`${SERVER_PATH}theaters/${id}`).catch((error)=>{
//         return error.response
//     })
// }

export const TheatersService ={
    get: () => {
        return axios.get(`${SERVER_PATH}theaters`,{withCredentials:true}).then((response)=>{
            console.log("theaters in getTheaters",response.data)
            return response.data;
        }).catch((error)=>{
            return error.response;
        })
    },
    create: (reqBody) => {
        return axios.post(`${SERVER_PATH}theaters`,reqBody,{withCredentials:true}).then((response)=>{
            return response.data;
        }).catch((error)=>{
            return error.response;
        })
    },
    delete: (id) => {
        return axios.delete(`${SERVER_PATH}theaters/${id}`,{withCredentials:true}).catch((error)=>{
            return error.response
        })
    },
    update:(id,reqBody)=>{
        return axios.put(`${SERVER_PATH}theaters/${id}`,reqBody,{withCredentials:true}).then((response)=>{
            if(response) return true;
            else return false;
        }).catch((error)=>{
            return error.response
        })
    }
}
