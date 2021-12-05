import { useContext, useEffect } from "react"
import { TheatersContext } from "../contexts/TheatersContext"
import { EventsService } from "../services/EventsService"

export const useGetEvents = (id) => {
    const { events, dispatchEvents } = useContext(TheatersContext)
    useEffect(() => {
        EventsService.get(id).then((response) => {
            if (response.message === 'ok') {
                // console.log('response in useGetEvents ', response)
                dispatchEvents({ type: 'set', payload: response.data })
                //console.log('events in useGetEvents: ', events)
            }
            else{
                alert(response.message)
            }
        })

    }, [id])
    return { events }
}
export const useCreateEvent = () => {

    const { dispatchEvents } = useContext(TheatersContext)
    const createEvent = (reqBody) => {

        EventsService.create(reqBody).then((response) => {
            if (response.message === "ok") {
                dispatchEvents({ type: 'add', payload: response.response });
            }
            else {
                alert("cannot add this event... it would overlap with an existing event!")
            }

        })
    }
    return { createEvent }

}
export const useDeleteEvents = () => {
    const { dispatchEvents } = useContext(TheatersContext)

    const deleteEvent = (id) => {

        EventsService.delete(id).then((response) => {
            if (response.message === 'ok') {
                dispatchEvents({ type: 'delete', payload: id })
            }
            else {
                alert(response.message)
            }
        }).catch((error)=>{
            console.log("error: ",error);
        })

    }

    return { deleteEvent }
}
export const useUpdateEvent = () => {
    const { dispatchEvents } = useContext(TheatersContext)
    const updateEvent = (id, reqBody) => {
        EventsService.update(id, reqBody).then((response) => {
            if (response.message === "ok") {

                dispatchEvents({ type: 'update', payload: { 'id': id, 'reqBody': reqBody } })
            }
            else {
                alert("cannot apply this modification... it would overlap with an existing event!")

            }
        })
            
        
    }
    return { updateEvent }
}