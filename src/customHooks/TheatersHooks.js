import { useContext, useEffect } from "react"
import { TheatersContext } from "../contexts/TheatersContext"
import { TheatersService } from "../services/TheatersService"
import {v4 as uuid} from 'uuid'

export const useGetTheaters = () => {
    const { theaters, dispatchTheaters } = useContext(TheatersContext)
    useEffect(() => {
        TheatersService.get().then((response) => {
            dispatchTheaters({ type: 'set', payload: response })
        })

    }, [])
    return { theaters }
}
export const useDeleteTheaters = () => {
    const { dispatchTheaters } = useContext(TheatersContext)

    const deleteTheater = (id) => {
        
        TheatersService.delete(id).then((response) => {
            dispatchTheaters({ type: 'delete', payload: id })
        })

    }

    return { deleteTheater }
}
export const useCreateTheater = () => {

    const { dispatchTheaters } = useContext(TheatersContext)
    const createTheater = (reqBody) => {
        
        TheatersService.create(reqBody).then((response) => {
            dispatchTheaters({ type: 'add', payload: response });
        })
    }
    return { createTheater }

}

export const useUpdateTheater=()=>{
    const{dispatchTheaters}=useContext(TheatersContext)
    const updateTheater=(id,reqBody)=>{
        TheatersService.update(id,reqBody).then((response)=>{
            dispatchTheaters({type:'update',payload:{'id':id,'reqBody':reqBody}})
        })
    }
    return { updateTheater }
}