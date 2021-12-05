/* eslint-disable no-fallthrough */

export const EventsReducer = function (state, { type, payload }) {
    switch (type) {
        case 'add':
            {
                var event = {
                    'id': payload.id,
                    'artist': payload.artist,
                    'start': payload.start,
                    'end': payload.end
                }
                console.log('event in eventsREducer: ', event)
                var newEvents = state.events.concat(event);
                return ({ ...state, events: newEvents });
            }
        case 'delete':
            {
                var newEvents2 = state.events.filter(event => event.id !== payload);
                return ({ ...state, events: newEvents2 });
            }
        // case 'getEvents':
        //     {var response=getEvents()
        //     return({...state,events:response})}
        case 'set':
            {
                return ({ ...state, events: payload })
            }
        case 'update':
            {
                var newEvents3 = state.events.map((event) => {
                    return event.id === payload.id ? payload.reqBody : event;
                })
                return ({ ...state, events: newEvents3 })
            }
        default:
            {
                console.log("bad event dispatcher type");
                return
            }
    }

}